import React from 'react';
import Div from 'shared/Div';
import StyledLink from 'shared/StyledLink';
import Armoire from './Armoire/logo.jpg'
import styled from 'styled-components';
const StyledImg = styled.img`
  width: 200px;
  height: 50px;
  @media only screen and (min-width: 666px) {
    width: 100%;

  }
`
const StyledImg2 = styled.img`
display: block;
width: 200px;
@media only screen and (min-width: 666px) {
  display: none;
}

`


// -----
const funcC0mp = (props) =>{
  return (
    <Div margin='10px'>

      <StyledLink to="/" >
        <Div>
          <StyledImg src={Armoire}  alt="logo for store" />
        </Div>
      </StyledLink>
    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
