import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Skills } from "../components/Skills.js";
import '../App.css';


export function About() {
    return (
        <main>
            <section id="section-2">
                <div className="main-about py-6">
                    <div >
                        <Container fluid="sm" className="con-about px-4 px-lg-5 my-5">
                            <Row className="my-5 row-about">

                                <Col xs={9} lg={6} className="vl">
                                    <h2 className="fw-bolder">About Me</h2>
                                    <hr />
                                    <p>Hi, I'am Suparnan. I completed my UG at R.M.D. Engineering College in Computer Science Engineering on 2016. I started my career in Cognizant Tehnology Solution as Mainframe Developer. Later on i developed my aspiration towards Full Stack Developing mainly in MERN stack.</p>
                                </Col>

                                <Col xs={9} lg={6}>
                                    <Image src="https://lh3.googleusercontent.com/ogw/ADea4I4smpFpgigiCRK_g0NMYMMk0gH6N1-88Pdpm2pl=s192-c-mo" roundedCircle />
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
            <Skills />
        </main>

    );
}