import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Contact() {
    return(
        <div className="bg-dark main py-5">
            <section id="section-5">
            {/* <div className=""> */}
            <Container className="con-1">
            <Row>
                <Col md={2}>
                </Col>
                <Col md={4} className="vl">
                    <h2 className="fw-bolder text-white">Contact Me</h2>
                    <hr />
                    <p className="text-white">I am interested in working with any company that thinks my skill will be helpful for them. If you're looking for someone like me, please let me know or you can just say "Hi" to me.</p>
                </Col>
                
                <Col md={6}>
                <p className="display-7 ml-1 fw-bolder text-white">Email :</p>
                <p className="ml-1 text-white">sonuragavan27@gmail.com <span className="disabled">(Always Available)</span></p>
                <br />
                <p className="display-7 ml-1 fw-bolder text-white">Phone :</p>
                <p className="ml-1 text-white">9940420034 <span className="disabled">(Recommended)</span></p>
                <br />
                <p className="display-7 ml-1 fw-bolder text-white">Address :</p>
                <p className="ml-1 text-white">Nanganallur, Chennai, Tamilnadu, India - 600061</p>
                <br />
                </Col>
                {/* <Col md={2}>
                </Col> */}
            </Row>
        </Container>
        {/* </div> */}
        </section>
        <footer className="py-5 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Portfolio @ Suparnan Vijayaragavan, 2021</p></div>
        </footer>
        </div>
    )
}