import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import { Contact } from './Contact';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { FaGithub } from "react-icons/fa";


export function Portfolio() {
    // const [variant, setVariant] = useState(['primary', 'dark', 'info'])
    return (
        <main>
            <section id="section-4">
                <div className="bg-light pricing sm py-6">

                    <Container fluid="sm" className="con-1 px-4 px-lg-5 ">
                        <header className="display-6 fw-bolder">Portfolio</header>
                        <hr />
                        <Row>
                            <Col sm={4} xs lg>
                                <Card className="card h-100" bg='dark' hover="true">
                                    <Card.Body>
                                        <Card.Title>
                                            <h5 className="card-title text-center text-uppercase text-muted">MERN</h5>
                                            <h6 className="card-price text-center text-white">Reset Password <p class="period">Full Stack</p></h6>
                                        </Card.Title>
                                        <hr className="hr" />

                                        <p className="para text-white">This is my first full stack projec for Reseting the Password. This Application is about a basic structure of password authentication and authorization. The reset mechanism was done 2 way like a random string was generated and stored in the Database and the random string was sent to the user authorized mail. if the string matches, the user will be redirected to Password changing Page.</p>
                                        <br />
                                    </Card.Body>
                                    <Card.Footer className="d-grid gap-2">
                                        <Button variant="outline-info" size="lg" href="https://github.com/Suparnan/password-reset-frontend">
                                            <FaGithub />    GitHub
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm={4} xs lg>
                                <Card className="card h-100" bg="dark" hover="true">
                                    <Card.Body>
                                        <Card.Title>
                                            <h5 className="card-title text-center text-uppercase text-muted">Node JS Express Mongo DB</h5>
                                            <h6 className="card-price text-center text-white">Assign Student-Mentor<p class="period">Backend</p></h6>
                                        </Card.Title>
                                        <hr className="hr" />
                                        <p className="para text-white">I have created an Backend Application which will assign students to mentor. It has functionality such as assigning a student to a respective mentor and interchange a mentor to a particular student.</p>
                                    </Card.Body>
                                    <Card.Footer className="d-grid gap-2">
                                        <Button variant="outline-info" size="lg" href="https://github.com/Suparnan/Assign-Mentor">
                                            <FaGithub />    GitHub
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm={4} xs lg>
                                <Card className="card h-100" bg="dark" hover="true">
                                    <Card.Body>
                                        <Card.Title>
                                            <h5 className="card-title text-center text-uppercase text-muted">React JS</h5>
                                            <h6 className="card-price text-white text-center">Minimal Shopping Cart<p class="period">Frontend</p></h6>
                                        </Card.Title>
                                        <hr className="hr" />
                                        <p className="para text-white">This React application has a list of items which can be added to the cart when selected. The CRUD is used as a basic functionality, since the user can add an item to the cart, read and remove a particular item from the cart.</p>
                                    </Card.Body>
                                    <Card.Footer className="d-grid gap-2">
                                        <Button variant="outline-info" size="lg" href="https://github.com/Suparnan/Shopping-cart">
                                            <FaGithub />    GitHub
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={2} xs lg></Col>
                            <Col sm={4} xs lg>
                                <Card className="card h-100" bg="dark" hover="true">
                                    <Card.Body>
                                        <Card.Title>
                                            <h5 className="card-title text-center text-uppercase text-muted">React JS</h5>
                                            <h6 className="card-price text-white text-center">Recipe App<p class="period">Frontend</p></h6>
                                        </Card.Title>
                                        <hr className="hr" />
                                        <p className="para text-white">This React application has an API which has a list of recipes. The API consists of search functionality and CRUD is used as a basic functionality, since the user can add an recipe to the API, read and remove a particular recipe.</p>
                                    </Card.Body>
                                    <Card.Footer className="d-grid gap-2">
                                        <Button variant="outline-info" size="lg" href="https://github.com/Suparnan/Shopping-cart">
                                            <FaGithub />    GitHub
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            {/* <Col md={1}></Col> */}
                            <Col sm={4} xs lg>
                                <Card className="card h-100" bg="dark" hover="true">
                                    <Card.Body>
                                        <Card.Title>
                                            <h5 className="card-title text-center text-uppercase text-muted">HTML CSS Javascript</h5>
                                            <h6 className="card-price text-white text-center">Breaking Bad<p class="period">Frontend</p></h6>
                                        </Card.Title>
                                        <hr className="hr" />
                                        <p className="para text-white">This Frontend application was done completely using HTML, CSS and Javascript. An online API of Breaking Bad related to charecters and episodes was acheived using Fetch functionality.</p>
                                    </Card.Body>
                                    <Card.Footer className="d-grid gap-2">
                                        <Button variant="outline-info" size="lg" href="https://github.com/Suparnan/Shopping-cart">
                                            <FaGithub />    GitHub
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col sm={2} xs lg></Col>
                        </Row>
                    </Container>

                    <br />
                    <br />
                </div>
            </section>
            <Contact />

        </main>
    )
}