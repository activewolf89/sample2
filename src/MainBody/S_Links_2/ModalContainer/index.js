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

import Wireframes from './wireframes.pdf'
import EmailConfirmation from './email_receipt_final.pdf'
import EmailConfirmationRecipient from './for_sure.pdf'
import { Document, Page } from 'react-pdf';
import PDFRead from './PDFRead';

const FunctionalComponent = (props) =>{
  console.log(props)

  return (
    <div>
    <Modal show onHide={props.handleClose} size='xl'>
      <Modal.Header closeButton>
        <Modal.Title>Popup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {
        props.whichModal == 'event_email' ?
        <PDFRead fileToShow = {EmailConfirmation} />:
        props.whichModal == 'recipient_email' ?
        <PDFRead fileToShow = {EmailConfirmationRecipient} />:
        props.whichModal == 'wireframe' ?
        <PDFRead fileToShow = {Wireframes} />:
        <PDFRead fileToShow = {Wireframes} />
      }
      </Modal.Body>
      <Modal.Footer>

        <Button variant="primary" Armoire onClick={props.handleClose} color='white' width='100%'>
          Exit
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
