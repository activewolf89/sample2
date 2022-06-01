
import React from 'react';
import Div from 'shared/Div';
import styled,{css} from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FontAwesome from 'react-fontawesome'
import P from 'shared/P';
import ImageRotator from 'MainBody/ImageRotator'
import ZoomCasual from './zoom_casual.jpg';
import Selection from './start_your_selection.jpg';
import Casual from './casual.jpg';
import BusinessFormal from './bf_showit.jpg'
import SummerCeleb from './sc_showit.jpg'
// -----
const funcC0mp = (props) =>{
  console.log(props)
  return (
    <Row>

    <Col xs={{span:6}} style={{backgroundColor:'beige', width:'100%' }}>

    {
      props.eventDetails.selectedStyle == 'Business Formal' &&
      <Div>
      <Div  color='black' textAlign='center'>
      <P>
      <Div overflowY='scroll' height='135px'>
      <span style={{fontWeight:'bold'}}>Definition: </span>   relating to or denoting a style of clothing that is less formal than traditional business wear, but is still intended to give a professional and businesslike impression.
      "I don't wear a dark suit to work, thanks to the business casual trend"
      </Div>
      </P>
      </Div>
      <Div height='300px' backgroundImg={BusinessFormal} backgroundSize='cover' width='100%' >
      </Div>
      </Div>
    }
    {
      props.eventDetails.selectedStyle == 'Casual' &&
      <Div>
      <Div  color='black' textAlign='center'>
      <P>
      <Div overflowY='scroll' height='135px'>
    <span style={{fontWeight:'bold'}}>Definition: </span>   This includes jeans, sweaters, t-shirts, sneakers, and much more. However, it usually excludes flip-flops, sweats or gym clothes, revealing clothes, stained clothes, heavily distressed or ripped items, and graphic shirts with offensive or controversial statements on them.
      </Div>
      </P>
      </Div>
      <Div height='300px' backgroundImg={Casual} backgroundSize='cover' width='100%' >
      </Div>
      </Div>
    }
    {
      props.eventDetails.selectedStyle == 'Summer Celebration' &&
      <Div>
      <Div  color='black' textAlign='center'>
      <P>
      <Div overflowY='scroll' height='135px'>
      <span style={{fontWeight:'bold'}}>Definition: </span>   We are going to have fun, bright colors to lighten up the mood and have everyone come together for some libations and fun to commemorate the start of summer through a work event.
      </Div>
      </P>
      </Div>
      <Div height='300px' backgroundImg={SummerCeleb} backgroundSize='cover' width='100%' >
      </Div>
      </Div>
    }
    {
      props.eventDetails.selectedStyle == 'Business Casual' &&
      <Div>
      <Div  color='black' textAlign='center'>
      <P>
      <Div overflowY='scroll' height='135px'>
      <span style={{fontWeight:'bold'}}>Definition: </span>   relating to or denoting a style of clothing that is less formal than traditional business wear, but is still intended to give a professional and businesslike impression.
      "I don't wear a dark suit to work, thanks to the business casual trend"
      </Div>
      </P>
      </Div>
      <Div height='300px' backgroundImg={Selection} backgroundSize='cover' width='100%' >
      </Div>
      </Div>
    }
    {
      props.eventDetails.selectedStyle == 'Zoom Casual' &&
      <Div>
      <Div  color='black' textAlign='center'>
      <P>
      <Div overflowY='scroll' height='135px'>
        <span style={{fontWeight:'bold'}}>Definition: </span>   A collection specifically catered to Zoom events, this emphasises top clothing that really catches peoples eye and attention
      </Div>
      </P>
      </Div>
      <Div height='300px' backgroundImg={ZoomCasual} backgroundSize='cover' width='100%' >
      </Div>
      </Div>
    }
    </Col>

    <Col xs={{span:5}}>
    <Div   textAlign='center'>
      <Div display='flex' justifyContent='space-between'>
      <span style={{cursor:'pointer'}} onClick={props.handleRefreshNumber} > <FontAwesome name='arrow-left' lg /> </span>
      <span style={{fontWeight:'bold'}}>Rotate Options</span>
      <span style={{cursor:'pointer'}} onClick={props.handleRefreshNumber} > <FontAwesome name='arrow-right' lg /> </span>
      </Div>
    </Div>
    <Div height='340px'  backgroundSize='cover' width='100%'  Armoire>
    <ImageRotator selectedStyle={props.eventDetails.selectedStyle} clothPool={props.clothPool} refreshNumber={props.refreshNumber} />

    </Div>
    </Col >

    </Row>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
