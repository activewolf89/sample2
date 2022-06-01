import React from 'react';
import Div from 'shared/Div';
import styled,{css} from 'styled-components';
import CallToAction from './CallToAction'
import ReWords from './ReWords'

const StyledDiv = styled(Div)`
  position: relative;
  height: 400px;
  background-image: url(${props => props.mobile});
  @media only screen and (min-width: 996px) {
    background-image: url(${props => props.desktop});
  height: 300
  }
`

const FloatingDiv = styled(Div)`
  position: absolute;
  left: 50%;
  top: 90%;

  transform: translate(-50%,-50%);
`
const FloatingDiv2 = styled(Div)`

  position: absolute;
  top: 0%;
  left: 50%;
  width: 100%;
  @media only screen and (min-width: 996px) {
  width: auto;
  }
  transform: translate(-50%,-50%);
`
// -----
const funcC0mp = (props) =>{
  return (
    <Div  backgroundColor='black' position='relative' >

      <StyledDiv  width='100%'  mobile={props.WebImage[0]} desktop={props.WebImage[1]} backgroundSize='contain' backgroundPosition='center' backgroundRepeat='no-repeat'>

        <FloatingDiv2  textAlign='center' >
        {
        !props.noButton &&
          <ReWords text={props.text} small />
        }
        </FloatingDiv2>
      </StyledDiv>
      {
        !props.noButton &&
        <CallToAction buttonObj={props.buttonObj} text={props.text}/>
      }

    </Div>
  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
