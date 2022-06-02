import React,{Component} from 'react';
import Div from 'shared/Div';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Ol from 'shared/Ol'
import Li from 'shared/Li'
import styled from 'styled-components';
import CorporateEvent from './bts.jpg';
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
          <Banner  WebImage={[CorporateEvent,CorporateEvent]}  buttonObj={{url:"/", text:"Future Mens Collection, Sound good?"}} />
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
