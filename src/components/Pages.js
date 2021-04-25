import React from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
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
        <Navbar className="navbar" bg="light" expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav tabs>
              <NavItem>
                <NavLink id="0" onClick={this.toggle}>
                  Introduction
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="1" onClick={this.toggle}>
                  Github Project Galley
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="2" onClick={this.toggle}>
                  Skills Profile
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Banner />
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
    </div>;
  }
}

export default Pages;