import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../App.css';
import { Portfolio } from './Portfolio.js';

export function Skills() {
    return (
        <main>
            <section id="section-3">
                <div className="bg-dark main-1 py-6">

                    {/* <div className="main"> */}
                    <Container fluid="xs" className="px-4 px-lg-5 my-3">
                        <header className="display-6 fw-bolder text-white hl">My Skills</header>
                        <br />
                        <Row className="my-5">
                            <Col xs={6} className="vl-light">
                                <p className="display-7 ml fw-bolder text-white">HTML5 :</p>
                                <ProgressBar animated striped variant="success" now={85} />
                                <br />
                                <p className="display-7 ml fw-bolder text-white">CSS :</p>
                                <ProgressBar animated striped variant="info" now={72} />
                                <br />
                                <p className="display-7 ml fw-bolder text-white">Javascript :</p>
                                <ProgressBar animated striped variant="warning" now={85} />
                                <br />
                                <p className="display-7 ml fw-bolder text-white">React :</p>
                                <ProgressBar animated striped variant="info" now={75} />
                                <br />
                            </Col>

                            <Col xs={6}>
                                <p className="display-7 ml fw-bolder text-white">Node JS :</p>
                                <ProgressBar animated striped variant="warning" now={75} />
                                <br />
                                <p className="display-7 ml fw-bolder text-white">Mongo DB :</p>
                                <ProgressBar animated striped variant="danger" now={83} />
                                <br />
                                <p className="display-7 ml fw-bolder text-white">SQL :</p>
                                <ProgressBar animated striped variant="success" now={80} />
                                <br />
                            </Col>
                        </Row>

                    </Container>
                </div>

            </section>
            <Portfolio />
        </main>
    )
}