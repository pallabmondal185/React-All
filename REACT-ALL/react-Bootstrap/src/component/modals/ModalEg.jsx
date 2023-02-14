import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function ModalEg() {
  const [show, setShow] = useState(false);
  const [wait, setWait] = useState('Wait 5 Second...')

  const handleClose = () => {
    setShow(false);

  }

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      setWait('');
    }, 5000);
  }, []);

  return (
    <>
      <h3><strong> Popup Modal Example:</strong> <small>{wait}</small></h3>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Login:-</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Link to='/login'>
            <Button variant="primary" onClick={handleClose}>Submit</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalEg
