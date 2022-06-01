import React from 'react';
import PropTypes from 'prop-types';
import NoMPUl from 'shared/NoMPUl'
import Li from 'shared/Li'
import {Row,Col,Container} from 'react-bootstrap'
import Div from 'shared/Div'
import styled from 'styled-components'

const StyledDiv = styled(Div)`
height: 100px;
width:100px;
@media only screen and (min-width: 666px) {
height: 170px;
width:170px;
}
@media only screen and (min-width: 996px) {
height: 270px;
width:270px;
}
`
const FunctionalComponent = (props) =>{

  return (
    <div>
    <NoMPUl>
    <Row>
    <Col xs={4}>
    <Li>
    <StyledDiv  border='2px solid white' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][0]} backgroundRepeat='no-repeat' backgroundSize='100%'></StyledDiv>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <Div position='relative'>



    <StyledDiv position='relative' backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][1]} backgroundRepeat='no-repeat' backgroundSize='100%' pr = {props.most_interested_clothing}>
    {
      props.most_interested_clothing &&
      <Div position='absolute' width='100%' top='80%' backgroundColor='maroon' opacity='.8' color='white' backgroundRepeat='no-repeat' fontWeight='bold' textAlign='center'>
      Most clicked on
      </Div>
    }
    </StyledDiv>
    </Div>

    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <StyledDiv  backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][2]} backgroundRepeat='no-repeat' backgroundSize='100%'></StyledDiv>
    </Li>
    </Col>
    </Row>
    <Div padding='5px 0' />
    <Row>
    <Col xs={4}>
    <Li>
    <StyledDiv  backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][3]} backgroundRepeat='no-repeat' backgroundSize='100%'></StyledDiv>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <StyledDiv  backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][4]} backgroundRepeat='no-repeat' backgroundSize='100%'></StyledDiv>
    </Li>
    </Col>
    <Col xs={4}>
    <Li>
    <StyledDiv  backgroundImg={props.clothPool[props.selectedStyle][props.refreshNumber][5]} backgroundRepeat='no-repeat' backgroundSize='100%'></StyledDiv>
    </Li>
    </Col>
    </Row>
    </NoMPUl>
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
