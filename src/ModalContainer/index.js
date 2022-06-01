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
import Ul from 'shared/Ul';
const FunctionalComponent = (props) =>{

  return (
    <div>

    <Modal show onHide={props.handleClose} size='xl'>
      <Modal.Header closeButton>
        <Modal.Title>{props.post_usability_test == 0 ? "Going back Version 1":"Going forward Version 2"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <P>
      These were changes made to the test application based off the usability report
      </P>
        <Div>
        <h4>User Page Updates</h4>
        <Ul>
        <Li>Add price for images</Li>
        <Li>Sign up or guest option at check out modal</Li>
        <Li>Display Option of what other people have picked</Li>
        <Li>Enter Event Code on landing page to see details</Li>
        <Li>Replace recycling with left and right arrows</Li>
        </Ul>
        </Div>
        <Div>
        <h4>Event Page Updates</h4>
        <Ul>
        <Li>Add current most popular choice so far</Li>
        <Li>Swap the top suggested clothing pool section with the survey and describe what the below pool will do</Li>
        <Li>Replace recycling with left and right arrows</Li>
        <Li>Change the prototype with summer cocktail party</Li>
        </Ul>
        </Div>
        <Div>
        <h4>All Page Updates</h4>
        <Ul>
        <Li>Less wordy and more flow-oriented</Li>
        <Li>Made font and banner smaller</Li>
        <Li>Made Mobile friendly in case you need to show this site on mobile</Li>
        <Li>Added Version 2 and 1 to swap between to show changes</Li>
        </Ul>
        </Div>
      </Modal.Body>
      <Modal.Footer onClick={props.handleClose}>
      <Button width='100%' Armoire>Close </Button>
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
