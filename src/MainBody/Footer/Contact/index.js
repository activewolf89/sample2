import React from 'react';
import Div from 'shared/Div';
import PropTypes from 'prop-types';
//shared
import NoMPUl from 'shared/NoMPUl';
import Li from 'shared/Li';
import {H5} from 'shared/H';
import DissapearringCaret from 'shared/DissapearringCaret';
import { CSSTransition } from 'react-transition-group';
import DissapearringDiv from 'shared/DissapearringDiv';
import ReapearringDiv from 'shared/ReapearringDiv';
import A from 'shared/A';

require('../footer.css')

// -----
const Contact = (props) =>{
  return (
    <NoMPUl display="flex" flexDirection="column" alignItems='center' childrenPadding="0 10px">
      <Li >
        <Div position="relative" display="flex" justifyContent="space-between" alignItems="center">
          <H5 >
            Project 524B Final
          </H5>
        </Div>
      </Li>
        <NoMPUl display="flex" flexDirection="column" alignItems='center'  childrenPadding="0 10px">
          <Li >
          <Div fontStyle='italic'>
          <span>
          Prototype
          </span>
          </Div>
          </Li>
          <Li >
          <Div fontStyle='italic'>
          <span>
          Purple Team 1 - Class of 2022
          </span>
          </Div>
          </Li>

        </NoMPUl>
    </NoMPUl>

  )
}
Contact.propTypes = {
}
export default Contact;
