import React from 'react';
import './footer.css'

export default function Footer(){
    const user={
        instagram:"https://www.instagram.com/invites/contact/?i=15qth0sqh0b53&utm_content=kixv2g6",
        linkedIn:"https://www.linkedin.com/in/himanshu-gupta-28a6ba207",
        github:"https://github.com/Himanshu-Styles",
        facebook:"https://www.facebook.com/profile.php?id=100017297291417",
        codepen:"https://codepen.io/Himanshu_Styles"
    };
    return (
        <>
        <div className="footer">
            <p><a href={user.instagram} ><i className="fa fa-instagram"></i></a>
                <a href={user.linkedIn}><i className="fa fa-linkedin"></i></a>
                <a href={user.github}><i className="fa fa-github"></i></a>
                <a href={user.facebook}><i className="fa fa-facebook"></i></a>
                <a href={user.codepen}><i className="fa fa-codepen"></i></a>
                {/* <a href="#"><i className="fa fa-twitter"></i></a> */}
            </p>
        </div>
        </>
    );
}