import React,{Component} from 'react';
import Div from 'shared/Div';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Ol from 'shared/Ol'
import Li from 'shared/Li'
import styled from 'styled-components';
import CorporateEvent from './event-plan.jpg';
import NextStep from './4-steps.jpg'
import StyledLink from 'shared/StyledLink';
import Guarantee from './guarantee.JPG'
import Banner from '../Banner'
import Button from 'shared/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Table from 'react-bootstrap/Table'
import FontAwesome from 'react-fontawesome';

const StyledDiv =  styled(Div)`
  width: 100vw;
  height: 100vw;
  @media only screen and (min-width: 500px) {
    width: 500px;
    height: 500px;
  }
@media only screen and (min-width: 996px) {
  width: 400px;
  height: 400px;
}
@media only screen and (min-width: 1500px) {
  width: 600px;
  height: 600px;
}

`

const MasterGrid = styled(Div)`
  display: grid;
  grid-template-areas:
  "weAreBack weAreBack weAreBack weAreBack weAreBack weAreBack"
  "notSure notSure notSure notSure notSure notSure"
  "filler filler filler filler filler filler"
  "lookingFor lookingFor lookingFor lookingFor lookingFor lookingFor"
  "beautyShots beautyShots beautyShots beautyShots beautyShots beautyShots"
  "freshOptions freshOptions freshOptions freshOptions freshOptions freshOptions"
  "q q q q q q"
  "b b b c c c"
  "d d d e e e"
  "happilyEverAfters happilyEverAfters happilyEverAfters happilyEverAfters happilyEverAfters happilyEverAfters"
  "reactGallery reactGallery reactGallery reactGallery reactGallery reactGallery"

  ;

  grid-template-rows: auto ;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 5px;


`
class Template extends Component {

  render(){
    return (

      <Container fluid>
        <Row>
        <Col xs={12}>
          <Banner  WebImage={[CorporateEvent,CorporateEvent]}  buttonObj={{url:"/event-planner-front-end", text:"Start Planning"}} />
        </Col>
        </Row>
        <Row>
          <Col xs={12}>
          <div className="list-group-item list-group-item-action flex-column align-items-start ">
            <div className="d-flex w-100 justify-content-between">
            <Div padding='10px 0 '>
              <h5 className="mb-1"><span style={{textDecoration:'underline', }}>You are an event planner</span> and these are the problems Armoire "Dress Your Event" feature solves.</h5>
              </Div>
            </div>
            <div>
            <Table striped bordered hover>
          <thead>
          <tr>
          <th>Problem</th>
          <th>Answer</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>Event Planners sponsored want to know who is going and if there is a theme, to have guests display that theme</td>
          <td><span style={{fontWeight:'bold'}}>Trackability through backend integration and clothing referrals through event survey</span> </td>

          </tr>
          <tr>
          <td>Guests do not know what to wear at an upcoming event and want suggestions and visibility in theme trends</td>
          <td><span style={{fontWeight:'bold'}}>See what other guests are wearing and tailored options to your tastes</span> </td>
          </tr>

          </tbody>
          </Table>

            </div>

          </div>
          </Col>
        </Row>
        <Row >
        <Col xs={12} md={6}>
        <div className="list-group">
  <div className="list-group-item list-group-item-action flex-column align-items-start ">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1"><FontAwesome name='book' /></h5>
      <small>5 minutes</small>
    </div>
    <p className="mb-1">Tell us about your event! What type of business scenerio will it be? How many will be attending, and we will suggest styles for your guests</p>
    <small className="text-muted">We set you up as best as we can for a successful themed event</small>

  </div>
  <div className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
    <h5 className="mb-1"><FontAwesome name='envelope' /></h5>
      <small className="text-muted">5 minutes</small>
    </div>
    <p className="mb-1">We provide an event landing page for your guests, just send the event code out when your ready</p>
    <small className="text-muted">You will be able to see the landing page for modification prior to sending</small>
  </div>
  <div className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
    <h5 className="mb-1"><FontAwesome name='calendar' /></h5>
      <small className="text-muted">async</small>
    </div>
    <p className="mb-1">Get notifications on when your guests have received their clothes and get ready for event</p>
    <small className="text-muted">Kick back and relax</small>
  </div>
  <div className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
    <h5 className="mb-1"><FontAwesome name='address-card' /></h5>
      <small className="text-muted">one week post event</small>
    </div>
    <p className="mb-1">Check on how answers to the guest survey post event, and check out metrics in your backend</p>
    <small className="text-muted">This information will be used for improving the next event</small>
  </div>
  <div className="list-group-item list-group-item-action flex-column align-items-start">
  <StyledLink to={'/event-planner-front-end'}>
  <Button Armoire padding='10px' width='100%' >
  Start Planning
  </Button>
  </StyledLink>
  </div>
</div>
        </Col>
          <Col xs={12} md={6}>
            <Div padding='10% 0'>
             <img src={NextStep} width='100%' height='100%' />
             </Div>
          </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <Div  height='150px' backgroundImg={Guarantee} backgroundRepeat='no-repeat' backgroundSize='center' backgroundPosition='center'>
        </Div>
        </Col>
        </Row>
        </Container>

    )
  }
}


Template.propTypes = {

}
export default Template;

//https://www.socialtables.com/blog/event-planning/corporate-event-themes/
