import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import SignInForm from "./SignInForm";

function SignInButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Sign In
            </Button>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign in</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <SignInForm />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Sign in
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SignInButton;