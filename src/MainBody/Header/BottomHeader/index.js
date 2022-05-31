import React from 'react';
import Div from 'shared/Div';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import FontAwesome from 'react-fontawesome';
import StyledLink from 'shared/StyledLink';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
const StyledNoMPUl = styled(NoMPUl)`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  max-width: 1500px;

  align-items: center;
  cursor: pointer;
  @media only screen and (min-width: 996px) {

  }
`

const StyledLi = styled(Li)`
  order: 2;
  @media only screen and (min-width: 996px) {
  order: 1;
  }
`
const StyledLi2 = styled(Li)`
  order: 1
@media only screen and (min-width: 996px) {
  order: 2;
}
`

// -----
const FuncC0mp = (props) =>{
  const location = useLocation();
  return (

    <Div padding = '10px 0' >
      <StyledNoMPUl >
        <Li order='0' >
        <Div  height='100%' position='relative'   bordered = {location.pathname.includes('/event-planner-front-end') }>

        <StyledLink to='/event-planner-front-end'>
          <Div
            color='white'
            textAlign='center'
            position='relative'
            fontWeight='bold'
            height='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
          >
              <FontAwesome style={{color:'white'}} size='lg'  name="street-view" />
              <span>
              Event FrontEnd
              </span>
            </Div>
            </StyledLink>

        </Div>
        </Li>
        <Li order='1'>
        <StyledLink to='/event-planner-back-end'>
          <Div
            color='white'
            textAlign='center'
            position='relative'
            fontWeight='bold'
            height='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            bordered = {location.pathname.includes('/event-planner-back-end') }
          >
              <FontAwesome style={{color:'white'}} size='lg'   name="street-view" />
              <span>
              Event Backend
              </span>
            </Div>
            </StyledLink>
        </Li>
        <Li order='2'>
        <StyledLink to='/user-front-end'>
          <Div
            bordered = {location.pathname.includes('/user-front-end') }
            color='white'
            textAlign='center'
            position='relative'
            fontWeight='bold'
            height='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
          >
              <FontAwesome style={{color:'white'}} size='lg'  name="user" />
              <span>
              User Frontend
              </span>
            </Div>
            </StyledLink>
        </Li>
        <Li order='3'>
        <StyledLink to='/snapshot-links'>
          <Div
            bordered = {location.pathname.includes('/snapshot-links') }
            color='white'
            textAlign='center'
            position='relative'
            fontWeight='bold'
            height='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
          >
              <FontAwesome style={{color:'white'}} size='lg'  name="th-large" />
              <span>
              Snapshots/Links
              </span>
            </Div>
            </StyledLink>

        </Li>
      </StyledNoMPUl>
    </Div>

  )
}
FuncC0mp.propTypes = {
}
export default FuncC0mp;
