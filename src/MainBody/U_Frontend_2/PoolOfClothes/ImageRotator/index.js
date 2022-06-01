import React from 'react';
import PropTypes from 'prop-types';
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import {Row,Col,Container} from 'react-bootstrap'
import Div from 'shared/Div'
import styled from 'styled-components';

const StyledDiv = styled(Div)`
width : 100px;
height: 100px;
@media only screen and (min-width: 666px) {
  width: 180px;
  height: 180px;

  }
@media only screen and (min-width: 996px) {
  width: 300px;
  height: 300px;

  }
`

const FunctionalComponent = (props) =>{
  var calculate = function(){
    var zero_to_z = Math.floor(Math.random() * 100 + 50)
    return zero_to_z
  }
  var rand_1 = calculate()
  var rand_1_50 = rand_1 * .50
  var rand_2 = calculate()
  var rand_2_50 = rand_2 * .50
  var rand_3 = calculate()
  var rand_3_50 = rand_3 * .50
  var rand_4 = calculate()
  var rand_4_50 = rand_4 * .50
  var rand_5 = calculate()
  var rand_5_50 = rand_5 * .50
  var rand_6 = calculate()
  var rand_6_50 = rand_6 * .50
  var rand_7 = calculate()
  var rand_7_50 = rand_7 * .50
  var rand_8 = calculate()
  var rand_8_50 = rand_8 * .50
  var rand_9 = calculate()
  var rand_9_50 = rand_9 * .50
  var rand_10 = calculate()
  var rand_10_50 = rand_10 * .50
  var rand_11 = calculate()
  var rand_11_50 = rand_11 * .50
  var rand_12 = calculate()
  var rand_12_50 = rand_12 * .50
//handleSelect = {this.handleSelect} selectedNumber = {this.state.selectedNumber
  return (
    <Div  Armoire>
    <NoMPUl>
    <Row>
    <Col xs={4}>
    <Li>
    <StyledDiv position='relative' cursor='pointer' onClick={()=>{props.handleSelect(1)}} pr = {props.selectedNumber == 1} width='100%' height='170px' border='2px solid white' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][0]} backgroundSize='100%'>
    <Div position='absolute' right='0px' fontWeight='bold' color='gray' fontStyle='italic' style={{textDecoration:'strikethrough'}}><s>{props.refreshNumber == 0 ? rand_1:rand_2}</s></Div>
    <Div position='absolute' top='20px' right='0px' fontWeight='bold' color='green'>${props.refreshNumber == 0 ? rand_1_50: rand_2_50}</Div>
    </StyledDiv>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <StyledDiv position='relative'  cursor='pointer' onClick={()=>{props.handleSelect(2)}} pr = {props.selectedNumber == 2} width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][1]} backgroundSize='100%'>
    <Div position='absolute' right='0px' fontWeight='bold' color='gray' fontStyle='italic' style={{textDecoration:'strikethrough'}}><s>${props.refreshNumber == 0 ? rand_3: rand_4}</s></Div>
    <Div position='absolute' top='20px' right='0px' fontWeight='bold' color='green'>${props.refreshNumber == 0 ? rand_3_50: rand_4_50}</Div>
    </StyledDiv>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <StyledDiv position='relative'  cursor='pointer' onClick={()=>{props.handleSelect(3)}} pr = {props.selectedNumber == 3} width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][2]} backgroundSize='100%'>
    <Div position='absolute' right='0px' fontWeight='bold' color='gray' fontStyle='italic' style={{textDecoration:'strikethrough'}}><s>${props.refreshNumber == 0 ? rand_4: rand_5}</s></Div>
    <Div position='absolute' top='20px' right='0px' fontWeight='bold' color='green'>${props.refreshNumber == 0 ? rand_4_50: rand_5_50}</Div>
    </StyledDiv>
    </Li>
    </Col>
    </Row>
    <Div padding='5px 0' />
    <Row>
    <Col xs={4}>
    <Li>
    <StyledDiv position='relative' cursor='pointer' onClick={()=>{props.handleSelect(4)}} pr = {props.selectedNumber == 4} width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][3]} backgroundSize='100%'>
    <Div position='absolute' right='0px' fontWeight='bold' color='gray' fontStyle='italic' style={{textDecoration:'strikethrough'}}><s>${props.refreshNumber == 0 ? rand_6: rand_7}</s></Div>
    <Div position='absolute' top='20px' right='0px' fontWeight='bold' color='green'>${props.refreshNumber == 0 ? rand_6_50: rand_7_50}</Div>
    </StyledDiv>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <StyledDiv position='relative' cursor='pointer' onClick={()=>{props.handleSelect(5)}} pr = {props.selectedNumber == 5} width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][4]} backgroundSize='100%'>
    <Div position='absolute' right='0px' fontWeight='bold' color='gray' fontStyle='italic' style={{textDecoration:'strikethrough'}}><s>${props.refreshNumber == 0 ? rand_8: rand_9}</s></Div>
    <Div position='absolute' top='20px' right='0px' fontWeight='bold' color='green'>${props.refreshNumber == 0 ? rand_8_50: rand_9_50}</Div>
    </StyledDiv>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <StyledDiv position='relative' cursor='pointer' onClick={()=>{props.handleSelect(6)}} pr = {props.selectedNumber == 6} width='100%' height='170px' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][5]} backgroundSize='100%'>
    <Div position='absolute' right='0px' fontWeight='bold' color='gray' fontStyle='italic' style={{textDecoration:'strikethrough'}}><s>${props.refreshNumber == 0 ? rand_10: rand_11}</s></Div>
    <Div position='absolute' top='20px' right='0px' fontWeight='bold' color='green'>${props.refreshNumber == 0 ? rand_10_50: rand_11_50}</Div>
    </StyledDiv>
    </Li>
    </Col>
    </Row>
    </NoMPUl>
    </Div>
  );
};

FunctionalComponent.propTypes = {
  className: PropTypes.string,
};

FunctionalComponent.defaultProps = {
  className: null,
};

export default FunctionalComponent;
