import React from 'react';
import PropTypes from 'prop-types';
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import {Row,Col,Container} from 'react-bootstrap'
import Div from 'shared/Div'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'shared/Button'
import P from 'shared/P';
import StyledLink from 'shared/StyledLink';
const FunctionalComponent = (props) =>{

  return (
    <div>
    <Modal show onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Few More Questions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div class="list-group-item list-group-item-action flex-column align-items-start ">
      <Div c width='100%' height='170px' border='2px solid white' backgroundImg={props.pic} backgroundSize='100%'></Div>

      </div>
      {
        !props.guestCheckout &&
      <div class="list-group-item list-group-item-action flex-column align-items-start " >
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Sign-in account or <span style={{textDecoration:'underline',cursor:'pointer',color:'blue'}} onClick={props.handleGuestCheckout}>guest checkout</span></Form.Label>
        <Form.Control   placeholder="Your email" />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
      </div>
    }
      <div class="list-group-item list-group-item-action flex-column align-items-start ">
        <div class="d-flex w-100 justify-content-between">
        <Form.Label>Size</Form.Label>
        </div>
        <Form.Select aria-label="Size"  >
        <option >XS</option>
        <option >S</option>
          <option >M</option>
          <option>L</option>
          <option >XL</option>
          <option>XXL</option>
        </Form.Select>
      </div>

      </Modal.Body>
      <Modal.Footer>
      <Button  disabled = {props.loginEmail == ''} Armoire = {props.loginEmail !== ''}  padding='10px' width='100%' onClick={props.handleClose}>
      <StyledLink to='/snapshot-links' >
      <Div color='white'>
      Checkout
      </Div>
      </StyledLink>
      </Button>

      </Modal.Footer>
    </Modal>
    </div>
  );
};

FunctionalComponent.propTypes = {
  className: PropTypes.string,
};

FunctionalComponent.defaultProps = {
  className: null,
};

export default FunctionalComponent;
