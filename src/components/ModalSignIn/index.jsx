import React, { Component } from 'react'
import {createPortal} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

import SignIn from '../SignIn'

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailValue:''
        };

        this.root = document.createElement('div');
        this.root.className = "signin container-fluid d-flex justify-content-center align-items-center"
        document.body.appendChild(this.root);
    }
    
    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    onChangeEmail = ({ target }) => {
        this.setState({emailValue: target.value})
    }
    
    render() {
        const { closeModalSignIn, children } = this.props;

        return createPortal(
            <SignIn
                onChangeEmail={this.onChangeEmail}
                {...this.props}
                {...this.state}
            />,
            this.root
        )
    }
}