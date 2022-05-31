/**
*
* Header
*
*/

import React from 'react';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import PropTypes from 'prop-types';
//shared --
import Div from 'shared/Div';



class Header extends React.Component {

  render() {
    return (
        <Div position='sticky' top='0px' zIndex='100' width='100%' >
        <Div  textAlign='center' display='flex' flexDirection='column' alignItems='center' >
        <Div backgroundColor='white'>
        <TopHeader
        />
        </Div>
        <Div Armoire>
        <BottomHeader
        />
        </Div>
        </Div>
        </Div>
    );
  }
}



export default Header
