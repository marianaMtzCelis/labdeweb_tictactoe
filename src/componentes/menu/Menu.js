import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"

class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">
              Tic Tac Toe - by: Mariana Martinez Celis
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Menu"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#action/3.1">Hello</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">I'm a</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Floating
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Menu</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Menu
