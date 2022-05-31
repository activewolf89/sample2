import React from 'react';
import Div from 'shared/Div';
import Button from 'shared/Button';
import Span from 'shared/Span';
import styled,{css} from 'styled-components';

const funcC0mp = (props) =>{
  return (
    <Div fontWeight='bold' display='flex' justifyContent='space-between'>
    <Div />
    <Div>
      <small padding='0 8px'>
      <select onChange={(e)=>{props.toggleUsabilityTest(e.target.value)}}>
      <option value={1}> V2 </option>
      <option value={0}> V1 </option>

      </select>
      </small>
      </Div>
    </Div>

  )
}
funcC0mp.propTypes = {
}
export default funcC0mp;
