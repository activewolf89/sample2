import React,{Component} from 'react';
import Div from 'shared/Div';
import Table from 'react-bootstrap/Table'
import styled from 'styled-components';
import ImageRotator from './ImageRotator'
import ShowCarousel from './ShowCarousel'
import SC6 from './sc_6.jpg'
import SC7 from './sc_7.jpg'
import SC8 from './sc_8.jpg'
import SC9 from './sc_9.jpg'
import SC10 from './sc_10.jpg'
import SC11 from './sc_11.jpg'
import SC0 from './sc_0.jpg'
import SC1 from './sc_1.jpg'
import SC2 from './sc_2.jpg'
import SC3 from './sc_3.jpg'
import SC4 from './sc_4.jpg'
import SC5 from './sc_5.jpg'

import SC13 from './sc_13.jpg'
import SC14 from './sc_14.jpg'
import SC15 from './sc_15.jpg'
import SC16 from './sc_16.jpg'
import FontAwesome from 'react-fontawesome'
import Button from 'shared/Button';
import ModalContainer from './ModalContainer';
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
    this.state = {
      showModal: false,
      whichModal: 'wireframe',
      refreshNumber: 0,
      selectedNumber: false,
      loginEmail: 'guest_user@gmail.com',
      guestCheckout: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSwap = this.handleSwap.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleFind = this.handleFind.bind(this)
    this.handleGuestCheckout = this.handleGuestCheckout.bind(this)
  }
  handleGuestCheckout = function(){
    this.setState({
      guestCheckout: !this.state.guestCheckout
    })
  }
  handleFind = function(){
    var zero = this.state.refreshNumber
    var selectedNumber = this.state.selectedNumber
    if(selectedNumber > 12){
      if(selectedNumber == 13){
        return SC13
      } else if(selectedNumber == 14){
        return SC14
      }
      else if(selectedNumber == 15){
        return SC15
      }
      else {
        return SC16
      }
    } else {

    if(zero == 1){
      if(selectedNumber == 1){
        return SC6
      } else if(selectedNumber == 2){
        return SC7

      }
      else if(selectedNumber == 3){
        return SC8

      }
      else if(selectedNumber == 4){
        return SC9

      }
      else if(selectedNumber == 5){
        return SC10
      }

      else {
        return SC11
      }
       //look in b
    } else {
      if(selectedNumber == 1){
        return SC0
      } else if(selectedNumber == 2){
        return SC1

      }
      else if(selectedNumber == 3){
        return SC2

      }
      else if(selectedNumber == 4){
        return SC3

      }
      else if(selectedNumber == 5){
        return SC4
      }

      else {
        return SC5
      }
    }
  }
  }
  handleChange = function(value){
    this.setState({
      loginEmail:value
    })
  }
  handleClose = function(value){
    this.setState({
      showModal: false
    })
  }
  handleSelect = function(value){
    this.setState({
      selectedNumber: value == this.state.selectedNumber ? false:value
    })
  }
  handleToggle = function(value){
    this.setState({
      showModal: !this.state.showModal
    })
  }
  handleSwap = function(){
    this.setState({
      selectedNumber: false,
      refreshNumber: this.state.refreshNumber == 0 ? 1:0
    })
  }

  render(){
    var clothPool =  {
      "Business Casual": [[SC6,SC7,SC8,SC9,SC10,SC11],[SC0,SC1,SC2,SC3,SC4,SC5]],
      "Summer Celebration": [[SC0,SC1,SC2,SC3,SC4,SC5],[SC6,SC7,SC8,SC9,SC10,SC11]],

    }
    return (
      <Div >
      <Div display='flex' alignItems='center' flexDirection='column'>

      <h5 className="mb-1"> <span style={{textDecoration:'underline',  }}>Select Your Clothes</span></h5>

      <span>- or - </span>
      <p><a href='https://www.armoire.style/closet/brand/brass/aoOAyXXVGl?occasions=occasion_work&seasons=summer&seasons=fall&seasons=winter&seasons=spring' target="_blank">Click here</a> to browse main Armoire site, you may enter event code to get discount </p>
      </Div>
      {
        this.state.showModal &&
      <ModalContainer guestCheckout = {this.state.guestCheckout} handleGuestCheckout = {this.handleGuestCheckout} handleClose = {this.handleClose} handleChange = {this.handleChange} loginEmail = {this.state.loginEmail} loginEmail = {this.state.loginEmail} pic = {this.handleFind()}/>
    }
      <Div padding='10px 20px 5px 0' display='flex' justifyContent='space-between' cursor='pointer' onClick={this.handleSwap}  >
      <Div display='flex' justifyContent='center' width='100%' >
      <Button width='100%'>

      <span style={{cursor:'pointer', paddingRight:'5px'}} > <FontAwesome name='arrow-left' lg /> </span>
      <span style={{fontWeight:'bold'}}>Rotate Options</span>
      <span style={{cursor:'pointer',paddingLeft:'5px'}}> <FontAwesome name='arrow-right' lg /> </span>
      </Button>
      </Div>
      <Div   >
      </Div>
      </Div>
      <ImageRotator  handleSelect = {this.handleSelect} selectedNumber = {this.state.selectedNumber} selectedStyle={"Summer Celebration"} clothPool = {clothPool} refreshNumber={this.state.refreshNumber} />
      <ShowCarousel
handleSelect = {this.handleSelect} selectedNumber = {this.state.selectedNumber}
       />
        <Div display='flex' justifyContent='center' padding='10px'>
        <Button  disabled = {!this.state.selectedNumber} Armoire = {this.state.selectedNumber}  padding='10px' width='100%' onClick={this.handleToggle}>
        Continue
        </Button>
        </Div>
      </Div>

    )
  }
}


Template.propTypes = {

}
export default Template;



















// <Row >
// <Col xs={6}>
// <div class="list-group">
// <div class="list-group-item list-group-item-action flex-column align-items-start ">
// <div class="d-flex w-100 justify-content-between">
// <h5 class="mb-1">Step 1</h5>
// <small>5 minutes</small>
// </div>
// <p class="mb-1">Tell us about your event! What type of business scenerio will it be? How many will be attending, and we will suggest styles for your guests</p>
// <small class="text-muted">We set you up as best as we can for a successful themed event</small>
//
// </div>
// <div class="list-group-item list-group-item-action flex-column align-items-start">
// <div class="d-flex w-100 justify-content-between">
// <h5 class="mb-1">Step 2</h5>
// <small class="text-muted">5 minutes</small>
// </div>
// <p class="mb-1">We provide an event landing page for your guests, just send the event code out when your ready</p>
// <small class="text-muted">You will be able to see the landing page for modification prior to sending</small>
// </div>
// <div class="list-group-item list-group-item-action flex-column align-items-start">
// <div class="d-flex w-100 justify-content-between">
// <h5 class="mb-1">Step 3</h5>
// <small class="text-muted">async</small>
// </div>
// <p class="mb-1">Get notifications on when your guests have received their clothes and get ready for event</p>
// <small class="text-muted">Kick back and relax</small>
// </div>
// <div class="list-group-item list-group-item-action flex-column align-items-start">
// <div class="d-flex w-100 justify-content-between">
// <h5 class="mb-1">Step 4</h5>
// <small class="text-muted">one week post event</small>
// </div>
// <p class="mb-1">Check on how answers to the guest survey post event, and check out metrics in your backend</p>
// <small class="text-muted">This information will be used for improving the next event</small>
// </div>
// </div>
// </Col>
//   <Col xs={6}>
//     <Div padding='10% 0'>
//      <img src={Circle} width='100%' height='100%' />
//      </Div>
//   </Col>
// </Row>
// <Row>
// <Col xs={12}>
// <Div  height='150px' backgroundImg={Guarantee} backgroundRepeat='no-repeat' backgroundSize='center' backgroundPosition='center'>
// </Div>
// </Col>
// </Row>
