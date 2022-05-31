import React from 'react';
import Div from 'shared/Div';
import MainLogo from '../MainLogo';
import styled from 'styled-components';
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import FontAwesome from 'react-fontawesome';
import StyledLink from 'shared/StyledLink';
import Styled from 'styled-components';
import Demo_1 from './demo.jpg'
import Demo from './Demo';

const StyledDiv = styled(Div)`
  max-width: 1500px;
  padding: 0 10px;
@media only screen and (min-width: 1800px) {
max-width: 2000px;
}

`


// -----
const funcC0mp = (props) =>{
  return (
    <StyledDiv display='flex' justifyContent='center'   width='100vw' textAlign='center' alignItems='center' borderBottom='1px solid white'>
      <MainLogo/>
      <Div display='flex' flexDirection='column'>
      <img src={Demo_1} width='50px' height='35px' alt='demo' />
      <Demo toggleUsabilityTest = {props.toggleUsabilityTest} post_usability_test = {props.post_usability_test} />
      </Div>
      <Div>

      </Div>

    </StyledDiv>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
