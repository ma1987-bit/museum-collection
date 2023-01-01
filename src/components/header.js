import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import {logo,navlink} from './collection.module.css'


const Header = ({ siteTitle }) => (
 
  <header>
  <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/"><StaticImage className={logo} src="../images/logo.png" alt="logo" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className={navlink} href="/">Home</Nav.Link>
            <Nav.Link className={navlink} href="/exhibitions">Exhibitions</Nav.Link>
            <Nav.Link className={navlink} href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </header>
   
)

export default Header
