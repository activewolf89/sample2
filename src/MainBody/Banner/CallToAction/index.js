import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import ReWords from '../ReWords'
import styled from 'styled-components'
import StyledLink from 'shared/StyledLink';



const StyledDiv = styled(Div)`
  position: relative;
  width: 100%;
  height: 90px;
  @media only screen and (min-width: 996px) {

    width: 600px;
    height: 110px;
  }
`

const StyledHiddenDiv = styled(Div)`
  display: none;
  @media only screen and (min-width: 996px) {
    display: block;
  }
`

// -----
const funcC0mp = (props) =>{
  return (
    <Div  >
      <StyledLink to={props.buttonObj.url}>
      <Button Armoire  width='100%' color='white'>
        <span style={{fontWeight:'bold', color:'white'}}>
          {props.buttonObj.text}
        </span>
      </Button>
      </StyledLink>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
