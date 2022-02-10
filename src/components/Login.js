import React from 'react';
import axios from 'axios';
import { Card, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './Login.css'
class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios.post('https://anytimefitness.herokuapp.com/api/auth/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.props.history.push('/classlist')
            })
            .catch(err => {
                console.log(err)
            })
    };

    render(){
        return(
            <div className='loginContainer'>
                <Card body className='text-center'>
                    <Form onSubmit={this.login}>
                        <h2>LOGIN</h2>
                        <FormGroup>
                            <Label for='username'>Username</Label>
                            <Input 
                                type="text" 
                                name='username' 
                                id='username' 
                                placeholder='username' 
                                value={this.state.credentials.username}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input 
                                type="password" 
                                name='password' 
                                id='password' 
                                placeholder='password'
                                value={this.state.credentials.password}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Login;