import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function (props) {
    const { isUserSignIn, toggleSignIn } = props;

    return (
        <header className="main__header container-fluid clearfix">
            <h2 className="logo">Trello</h2>
            <div className="info float-right">
                <div className="user">
                    {isUserSignIn ? isUserSignIn : 'Guest'}
                </div>
                <button onClick={toggleSignIn} className="btn btn-primary">
                    {isUserSignIn ? 'Sign out' : 'Sign in'}
                </button>
            </div>
        </header>
    )
}