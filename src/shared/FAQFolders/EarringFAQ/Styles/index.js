import React from 'react';
import Div from 'shared/Div';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';

// -----
const Styles = (props) =>{
  return (
    <Div >
      {
        props.detailedId ==="q1" &&
        <Q1 />
      }
      {
        props.detailedId ==="q2" &&
        <Q2 />
      }
      {
        props.detailedId ==="q3" &&
        <Q3 />
      }
      {
        props.detailedId ==="q4" &&
        <Q4 />
      }
    </Div>
  )
}
Styles.propTypes = {
}
export default Styles;
