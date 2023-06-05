import './home.css'
import IMAGES from '../../images/img'
import Typical from 'react-typical'
import { Row,Col, Container } from 'react-bootstrap'
import Footer from '../../components/footer/footer'

export default function Home() {
    return (
        <>
            <br/>
            <Container>
                <Row>
                    <Col lg={{span:5, offset:2}} className='glow-text'>
                    
                    <p style={{ margin:"20px" ,fontWeight:"bold" ,fontSize:"5vh" }}>HI, I'M<br/> HIMANSHU GUPTA <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" style={{width:"50px",height:"50px"}} alt="" /></p>
                    <p style={{margin:"20px 20px", fontWeight:"bold",fontSize:"30px"}}> I'm {' '}
                    <Typical
                        loop={Infinity}
                        wrapper='b'
                        steps={
                            [
                                'a Developer 💻',
                                2000,
                                'an Engineering Student 🎓',
                                2000,
                                'a Hooper 🏀',
                                2000
                            ]
                        }
                        />
                    </p>
                    <br/>
                    </Col>
                    <Col lg={3} className="float-center">
                        <div className="glow vert-move">
                    <img src={IMAGES.homeimg2} alt="Notebook" className="nameimg img-fluid " />
                    </div>
                    </Col>
                </Row>
            </Container>
            <br/>
            <div id="slider">
                <figure>
                    <img src={IMAGES.homeslider1} alt="IMG1" />
                    <img src={IMAGES.homeslider2} alt="IMG2" />
                </figure>
            </div>
            <div className='text-center'><img src={IMAGES.signature} className="signature" alt="signature" />
        </div>
            <Footer></Footer>
        </>
    );
}