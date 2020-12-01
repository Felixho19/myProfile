import React from 'react';
import {Container, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import Project from './Project';
import Banner from './Banner';
import Greetings from './Greetings';
import Profile from './Profile';
import { Navbar } from 'react-bootstrap';

class Pages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '0'
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e){
    if (this.state.activeTab !== e.target.id) {
      this.setState({
        activeTab: e.target.id
      });
    }
  }
  render() {
    return <div>
      <Banner />
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav tabs>
              <NavItem>
                <NavLink id="0" onClick={this.toggle}>
                  Introduction
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="1" onClick={this.toggle}>
                  Selected Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="2" onClick={this.toggle}>
                  Profiles
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="0">
            <Greetings/>
          </TabPane>
          <TabPane tabId="1">
            <Project/>
          </TabPane>
          <TabPane tabId="2">
            <Profile/>
          </TabPane>
        </TabContent>
      </Container>
    </div>;
  }
}

export default Pages;