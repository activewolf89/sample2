

import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'shared/Button'
import {Row,Col,Container} from 'react-bootstrap'
import Div from 'shared/Div'
import StyledLink from 'shared/StyledLink';
import ClothPool from './ClothPool';
const FunctionalComponent = (props) =>{

  return (
    <div>
    <Form>
      <Row>
      <Col xs={12}>
      <div class="list-group-item list-group-item-action flex-column align-items-start ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Event Name</Form.Label>

        <Form.Control  onChange={(e)=>{props.handleChange('name',e.target.value)}} value={props.eventDetails.name} placeholder="Enter" />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
      </div>
      </Col>
      </Row>
      <Row>
      <Col xs={12}>
      <div class="list-group-item list-group-item-action flex-column align-items-start ">
        <div class="d-flex w-100 justify-content-between">
        <Form.Label>Event Theme <small style={{fontStyle:'italic'}}> (this pool will be what we send your users, <span style={{fontWeight:'bold'}}>rotate to change</span>)</small></Form.Label>
        </div>
        <Form.Select aria-label="Event Type"  onChange={(e)=>{props.handleChange('selectedStyle',e.target.value)}} value={props.eventDetails.selectedStyle}>
        <option value="Business Casual">Business Casual</option>
        <option value="Zoom Casual">Zoom Casual</option>
          <option value="Casual">Casual</option>
          <option value="Business Formal">Business Formal</option>
          <option value="Summer Celebration"> Summer Celebration </option>
        </Form.Select>
        <Div padding='10px 0 0 0'>
        <ClothPool
          clothPool = {props.clothPool}
          handleRefreshNumber = {props.handleRefreshNumber}
          eventDetails = {props.eventDetails}
          refreshNumber = {props.refreshNumber}
         />
         </Div>
      </div>
      </Col>
      </Row>
      <Row>
      </Row>
      <Row>
      <Col xs={12}>
      <div class="list-group-item list-group-item-action flex-column align-items-start ">
        <div class="d-flex w-100 justify-content-between">
        <Form.Label>What day is your event? <span style={{fontStyle:'italic'}}> (closest event date is 14 calendar days from today) </span> </Form.Label>
        </div>
        <input type='date' onChange={(e)=>{props.handleChange('date',e.target.value)}} value={props.eventDetails.date} />
      </div>
      </Col>
      </Row>
      <Row>
      <Col xs={12}>
      <div class="list-group-item list-group-item-action flex-column align-items-start ">
        <div class="d-flex w-100 justify-content-between">
        <Form.Label>How many will be invited? <span style={{fontStyle:'italic'}}> (this estimate will help track your success) </span></Form.Label>
        </div>
        <Form.Select aria-label="Event Type" onChange={(e)=>{props.handleChange('howManyInvited',e.target.value)}} value={props.eventDetails.howManyInvited}>
          <option value="1">1-5</option>
          <option value="2">6-15</option>
          <option value="3">16-30</option>
          <option value="3">31-60</option>
          <option value="3">61-100</option>
          <option value="3">101-200</option>
          <option value="3">200+</option>
        </Form.Select>
      </div>
      </Col>
      <Col xs={12}>
      <div class="list-group-item list-group-item-action flex-column align-items-start " >
      <div class="d-flex w-100 justify-content-between">
      <Form.Label>Event Reminders For Recipients <span style={{fontStyle:'italic'}}>(This will be a public-facing comment for your guests)</span></Form.Label>
      </div>
        <textarea onChange={(e)=>{props.handleChange('eventReminders',e.target.value)}} value={props.eventDetails.eventReminders} style={{width:'100%',height:'220px', border:'2px solid gray'}} placeholder="Comment for guest" />

      </div>
      </Col>
      </Row>
      <Row>
        <Col xs={{span:12}} >
        <Div  padding='10px' >
        <Button Armoire color='white' padding='10px' width='100%' onClick={(e) =>{e.preventDefault();props.handleSubmit()}}>
        Start Your Event
        </Button>
        </Div>
        </Col>
      </Row>
    </Form>
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

// eventDetails: {
//   name:'',
//   selectedStyle:'Business Casual',
//   selectedTheme:false,
//   date: false,
//   howManyInvited: "1-5",
//   eventReminders:'test'
// }
