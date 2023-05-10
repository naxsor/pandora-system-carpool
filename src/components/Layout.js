import Navigation from './Navigation'
// import Footer from './Footer'
import Content from "./Content";
import "./style.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <main>
            <Container fluid="mt-4" className="Container">
                <Row>
                    <Col md="8">
                        <Content>
                            {children}
                        </Content>
                    </Col>
                    <Col md="4">
                        <Content>
                            {children}
                        </Content>
                    </Col>
                </Row>
            </Container>
            </main>

            {/*<main>{children}</main>*/}
            {/*<Footer />*/}
        </>
    )
}

export default Layout
