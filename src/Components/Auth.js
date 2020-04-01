import React, { Component } from 'react'
import axios from 'axios'
import { login, register } from '../../redux/userReducer'
import Dashboard from '../Dashboard/Dashboard'
import { connect } from 'react-redux'


class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            // profilePic: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    login = () => {
        const { email, password } = this.state
        axios.post(`/api/login`, { email, password }).then(res => {
            const email = res.data.user_email
            const userId = res.data.user_id
            // const profilePic  = res.data.profilePic
            this.props.login(
                email, userId
            )
            this.props.history.push("/Movies")
        }).catch(err => alert(err))

    }

 

    register = () => {
        const { email, password } = this.state
        axios.post(`/api/register`, { email, password }).then((res) => {
            this.props.register(
                res.data
            )
            this.props.history.push("/Dashboard");
        }).catch(err => console.warn(err))
    }

    render() {
        return (
            <div className="login-screen">
                <div className="login-container">
                    <input className="login"
                        placeholder="Enter Email"
                        name='email'
                        type="email"
                        onChange={this.handleChange}

                    />
                    <input className='login'
                        placeholder='Enter Password'
                        name='password'
                        type="password"
                        onChange={this.handleChange}

                    />
                    <div className="button-container">
                    <button className="login-button" onClick={this.login}>Login</button>
                    <button className="register-button" onClick={this.register}>Register</button>
                    </div>
                </div>
             
                />
            </div>
        )
    }
}

export default connect(null, { login, register })(Auth);