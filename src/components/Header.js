import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { About } from "../components/About.js";


export function Header() {
    return (
        <main>
            <section id="section-1">
             <Navbar fixed="top" bg="light" expand="lg">
                <Container fluid="sm">
                    <Navbar.Brand href="#section-1">Suparnan Vijayaragavan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto" navbarScroll>
                            <Nav.Link href="#section-2">About</Nav.Link>
                            <Nav.Link href="#section-3">Skill Set</Nav.Link>
                            <Nav.Link href="#section-4">Portfolio</Nav.Link>    
                            <Nav.Link href="#section-5">Contact</Nav.Link>                        
                        </Nav>
                        <Button variant="outline-dark" href="Resume_Suparnan V.docx" download>
                            <span>  My Resume </span>
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <header className="bg-dark main py-6">
                <div className="container-fluid con px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <p className="lead fw-normal text-white-50 mb-0">Hello, I am</p>
                        <h1 className="display-4 fw-bolder">SUPARNAN VIJAYARAGAVAN</h1>
                        <p className="lead fw-normal text-white-50 mb-0">FULL STACK DEVELOPER</p>
                    </div>
                </div>
            </header>
            </section>
            <About />
        </main>
    );
}