import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import SignInForm from "./SignInForm"

function SignInButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a href='#' onClick={handleShow}>
                Sign In
            </a>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign in</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body>
                        <SignInForm/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="primary" >
                            Sign in
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default SignInButton;