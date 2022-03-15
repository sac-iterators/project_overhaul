import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import SignInForm from "./SignInForm"

import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle, signInWithFacebook } from "../firebase/firebaseConfig";
import { useAuthState, useSignInWithFacebook } from "react-firebase-hooks/auth";
// import GoogleButton from 'react-google-button'
import { GoogleLoginButton, FacebookLoginButton } from "react-social-login-buttons";

function SignInButton() {
    const [show, setShow] = useState(false);
    const [text, setText] = useState("Sign in")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Might use this to add extra actions after user is signed in. Not sure how to implement yet.
    function signInClickEvent() {
        signInWithGoogle();
        this.setText("Sign out")
    }

    return (
        <>
            <a href='#' onClick={handleShow}>{text}</a>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <SignInForm/>
                    </Modal.Body>

                <Modal.Body>
                    <div className="login">
                        <div className="login__container">
                            <GoogleLoginButton onClick={signInWithGoogle}/>
                            <FacebookLoginButton onclick={signInWithFacebook}/>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Sign in
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SignInButton;