import React from "react";
import axios from "axios";
import { Card, Form, FormGroup, Label, Input, Button } from "reactstrap";

import './Register.css'
class Register extends React.Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
    role: ""
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  register = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://anytimefitness.herokuapp.com/api/auth/register",
        this.state
      )
      .then((res) => {
        console.log(res);
        this.props.history.push('/classlist')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="registerContainer">
        <Card body className="text-center">
          <Form onSubmit={this.register}>
            <h2>REGISTER</h2>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="role">Role</Label>
              <Input type="select" name="role" id="role" value={this.state.role}
              onChange={this.handleChange} >
              <option>Client</option>
              <option>Instructor</option>
              </Input>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Register;
