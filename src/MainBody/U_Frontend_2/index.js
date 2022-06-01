import React,{Component} from 'react';
import Div from 'shared/Div';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Ol from 'shared/Ol'
import Li from 'shared/Li'
import styled from 'styled-components';
import CorporateEvent from './corporate_event.jpg';
import Circle from './Circular-Arrows-Template.png'
import StyledLink from 'shared/StyledLink';
import Guarantee from './guarantee.JPG'
import Banner from '../Banner'
import Countdown from 'react-countdown';
import Button from 'shared/Button';
import Table from 'react-bootstrap/Table'
import ThemedStyle from './sc_showit.jpg';
import PoolOfClothes from './PoolOfClothes';
import Form from 'react-bootstrap/Form';

import ShowCarousel from './PoolOfClothes/ShowCarousel'

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
  constructor(props){
    super(props)
    this.state ={
      toggle: false,
    }
    this.handleToggle = this.handleToggle.bind(this)

  }
  handleToggle = function(){
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render(){
    var date1 = new Date();
    date1.setDate(date1.getDate() + 30);
    return (
      <Container fluid>
        <Row>
        <Col xs={12}>
          <Banner  WebImage={[CorporateEvent,CorporateEvent]} noButton buttonObj={{url:"/event-planner-front-end", text:"Start Your Event"}} />
        </Col>
        </Row>
        <Row>
          <Col xs={12}>
          <div className="list-group-item list-group-item-action flex-column align-items-start ">

            <div>
            <Table striped bordered hover>
          <thead>
          <tr>
          <th>What do guests at corporate events worry about</th>
          <th>What Armoire "Dress Your Event" feature helps with</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>Under or over-dressing, not knowing what others are wearing</td>
          <td><span style={{fontWeight:'bold'}}>Clothing suggestions from Armoire and the Event planner working on the event, along with seeing what others have picked out.</span> </td>

          </tr>
          <tr>
          <td>I do not want to spend time or money on picking a piece of clothing out I will only use once, and I do not want to repeat clothing</td>
          <td><span style={{fontWeight:'bold'}}>Armoire's rent your clothing feature works perfect for these one-off events</span> </td>
          </tr>

          </tbody>
          </Table>

            </div>

          </div>
          </Col>
        </Row>
        {
          this.state.toggle ?
          <Div>
          <Row>

          <Col xs={12}>
          <div className="d-flex w-100 justify-content-between">
          <Div padding='10px 0 ' textAlign='center'  width='100%'>
            <h5 className="mb-1"> <span style={{textDecoration:'underline', }}>2022 Summer Celebration Company Event</span></h5>
            </Div>

              </div>
              <Div>
                <p>
                 This event is sponsored by your company, and powered by <span style={{fontWeight:'bold'}}>Armoire </span>.
                 Select which clothing style you'd like to wear to the event by clicking on the image below, and then checkout and select what size you need.
                </p>
                <p>
                <span style={{fontWeight:'bold'}}>Tip: </span> If you do not find any below to your liking feel free to check out link to Armoire page -
                <a href='https://www.armoire.style/closet/brand/brass/aoOAyXXVGl?occasions=occasion_work&seasons=summer&seasons=fall&seasons=winter&seasons=spring' target="_blank">Link</a>
                </p>

                </Div>
          <Div display='flex' justifyContent='center' fontWeight='bold' backgroundColor='green' color='white'> Your Event is |


          <Div padding='0 20px' >
          <Countdown date={date1} />
          </Div>
          <Div>
          | Days from Now
          </Div>
          </Div>
          </Col>
          </Row>
          <Row>

          </Row>
          <Row>
            <Col xs={12} md={8}>
            <div style={{padding:'30px 0'}} class="list-group-item list-group-item-action flex-column align-items-start ">
              <Table striped bordered hover>
          <thead>
          <tr>
            <th>General</th>
            <th>Details</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Name of Event</td>
            <td >2022 Summer Celebration Company Event</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>2022-07-11</td>
          </tr>
          <tr>
            <td>Theme/Style</td>
            <td>Summer Celebration</td>
          </tr>
          <tr>
            <td>Pricing</td>
            <td>Your company is picking up <span style={{textDecoration:'underline', fontWeight:'bold', color:'green'}}>50% of the tab</span> , the prices will show amount to rent the clothing for one-month.  </td>
          </tr>
          <tr>
            <td>Reminder from Event Planner</td>
            <td>We will be having an event at an open cocktail garden scene in downtown Seattle to kick off summer - feel free to try out this new clothing suggestion feature we are working with Armoire to see what looks best for you and your style!</td>
          </tr>

          </tbody>
          </Table>


            </div>
            </Col>
            <Col xs={12} md={4}>
            <Div >
            <Div backgroundColor='beige' border='2px solid black'>
          <Div textAlign='center' textDecoration='underline'>Description</Div>
            <p style={{textAlign:'center'}}>
           We are going to have fun, bright colors to lighten up the mood and have everyone come together for some libations and fun to commemorate the start of summer through a work event.
            </p>
            </Div>
             <img src={ThemedStyle} width='100%' height='300px' />
             </Div>
            </Col>
          </Row>

          <PoolOfClothes />
          </Div>:
          <Row>
          <Col xs={12}>
          <Div textAlign='center'>
          <h5 className="mb-1"> <span style={{textDecoration:'underline',  }}>Enter Your Event Code</span></h5>

          </Div>
          <div class="list-group-item list-group-item-action flex-column align-items-start ">
          <Div>
          <Div display='flex' justifyContent='center' >
          <button onClick={this.handleToggle} style={{margin:'5px', width:'300px'}}>
          Demo
          </button>
          </Div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Event ID</Form.Label>
            <Form.Control   placeholder="Event004" />

            <Form.Text style={{width:'300px'}} className="text-muted">
            </Form.Text>
            </Form.Group>
            </Div>

          </div>
          </Col>
          </Row>
        }
        </Container>

    )
  }
}


Template.propTypes = {

}
export default Template;

//https://www.socialtables.com/blog/event-planning/corporate-event-themes/
