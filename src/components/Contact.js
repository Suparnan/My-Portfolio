import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Contact() {
    return (
        <main>
            <section id="section-5">
                <div className="bg-dark main-contact sm py-5">
                    <Container fluid="xs" className="px-4 px-lg-5 my-5">
                        <Row>
                            <Col xs={6} lg={6} className="vl">
                                <h2 className="fw-bolder text-white">Contact Me</h2>
                                <hr />
                                <p className="text-white">I started learning MERN stack a few months and the learning curve is on an expanding scale eversince. I am really excited looking for opportunities in my area of interest. Please feel free to reach out to my mobile or email.</p>
                            </Col>

                            <Col xs={5}  lg={6}>
                                <p className="display-7 ml-1 fw-bolder text-white">Email:</p>
                                <p className="ml-1 text-white">sonuragavan27@gmail.com <span className="disabled">(Always Available)</span></p>
                                <br />
                                <p className="display-7 ml-1 fw-bolder text-white">Phone:</p>
                                <p className="ml-1 text-white">9940420034 <span className="disabled">(Recommended)</span></p>
                                <br />
                                <p className="display-7 ml-1 fw-bolder text-white">Location:</p>
                                <p className="ml-1 text-white">Chennai, India.</p>
                                <br />
                            </Col>
                        </Row>
                    </Container>
                    <footer className="py-5 bg-dark">
                        <div className="container"><p className="m-0 text-center text-white">Portfolio @ Suparnan Vijayaragavan, 2021</p></div>
                    </footer>
                </div>
            </section>
        </main>
    )
}