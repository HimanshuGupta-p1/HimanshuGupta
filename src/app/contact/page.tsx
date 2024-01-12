"use client"
import React from 'react';
import './style.css';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Footer from '../components/footer/page';

const Contact: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    // Function that displays a success toast on bottom right of the page when form submission is successful
    const toastifySuccess = () => {
        toast('Mail sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data: any) => {
        // Destructure data object
        const { name, email, subject, message } = data;
        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };

            await emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
                templateParams,
                process.env.NEXT_PUBLIC_USER_ID || ''
            );

            reset();
            toastifySuccess();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <div className='ContactForm'>
                <h1 className='glow-text text-center'>CONTACT</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <div className='contactForm'>
                                <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                                    {/* Row 1 of form */}
                                    <div className='row formRow'>
                                        <div className='col-6'>
                                            <input
                                                type='text'
                                                name='name'
                                                {...register('name', {
                                                    required: { value: true, message: 'Please enter your name' },
                                                    maxLength: {
                                                        value: 30,
                                                        message: 'Please use 30 characters or less'
                                                    }
                                                })}
                                                className='form-control formInput'
                                                placeholder='Name'
                                            ></input>
                                            {errors.name && (
                                                <span className='errorMessage'>{typeof errors.name === 'string'
                                                    ? errors.name
                                                    : 'An error occurred'}</span>
                                            )}
                                        </div>
                                        <div className='col-6'>
                                            <input
                                                type='email'
                                                name='email'
                                                {...register('email', {
                                                    required: true,
                                                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                                })}
                                                className='form-control formInput'
                                                placeholder='Email address'
                                            ></input>
                                            {errors.email && (
                                                <span className='errorMessage'>Please enter a valid email address</span>
                                            )}
                                        </div>
                                    </div>
                                    {/* Row 2 of form */}
                                    <div className='row formRow'>
                                        <div className='col'>
                                            <input
                                                type='text'
                                                name='subject'
                                                {...register('subject', {
                                                    required: { value: true, message: 'Please enter a subject' },
                                                    maxLength: {
                                                        value: 75,
                                                        message: 'Subject cannot exceed 75 characters'
                                                    }
                                                })}
                                                className='form-control formInput'
                                                placeholder='Subject'
                                            ></input>
                                            {errors.subject && (
                                                <span className='errorMessage'>{typeof errors.name === 'string'
                                                    ? errors.name
                                                    : 'An error occurred'}</span>
                                            )}
                                        </div>
                                    </div>
                                    {/* Row 3 of form */}
                                    <div className='row formRow'>
                                        <div className='col'>
                                            <textarea
                                                rows={3}
                                                {...register('message', {
                                                    required: true
                                                })}
                                                className='form-control formInput'
                                                placeholder='Message'
                                            ></textarea>
                                            {errors.message && (
                                                <span className='errorMessage'>Please enter a message</span>
                                            )}
                                        </div>
                                    </div>
                                    <button className='btn btn-outline-light' type='submit'>
                                        Submit
                                    </button>
                                    <hr/>
                                </form>
                            </div>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <img src={'/signature.png'} className='signature' alt='signature' />
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Contact;
