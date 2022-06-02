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

import Wireframes1 from './Wireframe/wireframes1024_1.jpg'
import Wireframes2 from './Wireframe/wireframes1024_2.jpg'
import Wireframes3 from './Wireframe/wireframes1024_3.jpg'
import Wireframes4 from './Wireframe/wireframes1024_4.jpg'
import Wireframes5 from './Wireframe/wireframes1024_5.jpg'

import EmailConfirmation from './Other/email_receipt_final1024_1.jpg'
import EmailConfirmationRecipient from './Other/for_sure1024_1.jpg'
import Survey_IMG from './Other/Survey_IMG.jpg'

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
        <img src={EmailConfirmation} alt="alt img" width='100%' height='100%'/>:
        props.whichModal == 'recipient_email' ?
        <img src={EmailConfirmationRecipient} alt="alt img" width='100%' height='100%'/>:
        props.whichModal == 'wireframe' ?
        <Div>
        <img src={Wireframes1} alt="alt img" width='100%' height='100%'/>
        <img src={Wireframes2} alt="alt img" width='100%' height='100%'/>
        <img src={Wireframes3} alt="alt img" width='100%' height='100%'/>
        <img src={Wireframes4} alt="alt img" width='100%' height='100%'/>
        <img src={Wireframes5} alt="alt img" width='100%' height='100%'/>

        </Div>:
        <img src={Survey_IMG} alt="alt img" width='100%' height='100%'/>
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
