import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function SignInButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Sign In
        </Button>
        </>
    );
}

export default SignInButton;