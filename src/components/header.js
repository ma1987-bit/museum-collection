import * as React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from "react-bootstrap"
const Header = ({ siteTitle }) => (
  <header>
  <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">MAS Museum</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/exhibitions">Exhibitions</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </header>
)

export default Header
