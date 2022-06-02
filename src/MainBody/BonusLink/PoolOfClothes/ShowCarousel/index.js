import React,{Component} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SC6 from '../sc_6.jpg'
import SC7 from '../sc_7.jpg'
import SC8 from '../sc_8.jpg'
import SC9 from '../sc_9.jpg'

import SC13 from '../sc_13.jpg'
import SC14 from '../sc_14.jpg'
import SC15 from '../sc_15.jpg'
import SC16 from '../sc_16.jpg'
import Div from 'shared/Div';
class Template extends Component {
  render(){
    var calculate = function(){
      var zero_to_z = Math.floor(Math.random() * 100 + 50)
      return zero_to_z
    }
    var rand_13 = calculate()
    var rand_13_50 = rand_13 * .50
    var rand_14 = calculate()
    var rand_14_50 = rand_14 * .50
    var rand_15 = calculate()
    var rand_15_50 = rand_15 * .50
    var rand_16 = calculate()
    var rand_16_50 = rand_16 * .50
    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
    return (
      <Div >
      <Div borderTop='2px solid black'  borderBottom='2px solid black' padding='10px 0' textAlign='center'>
      <h5 className="mb-1"> <span style={{textDecoration:'underline', textAlign:'center'  }}>Other event guests have picked</span></h5>
      </Div>

      <Carousel responsive={responsive}  infinite={true}>
      <Div   onClick={()=>{this.props.handleSelect(13)}} pr = {this.props.selectedNumber == 13} position='relative' cursor='pointer'  width='100%' height='170px' border='2px solid white' backgroundImg = {SC13} backgroundSize='100%'>
      <Div position='absolute' right='0px' fontWeight='bold' color='gray' fontStyle='italic' style={{textDecoration:'strikethrough'}}><s>${rand_13 }</s></Div>
      <Div position='absolute' top='20px' right='0px' fontWeight='bold' color='green'>${rand_13_50}</Div>
      <Div position='absolute' backgroundColor='#520844' width='100%' opacity='.7' bottom='20px' right='0px' fontWeight='bold' color='white'>3 chose similar</Div>
      </Div>
      <Div   onClick={()=>{this.props.handleSelect(14)}} pr = {this.props.selectedNumber == 14} position='relative' cursor='pointer'  width='100%' height='170px' border='2px solid white' backgroundImg = {SC14} backgroundSize='100%'>
      <Div position='absolute' backgroundColor='#520844' width='100%' opacity='.7' bottom='20px' right='0px' fontWeight='bold' color='white'>2 chose exact</Div>
      <Div position='absolute' right='0px' fontWeight='bold' color='gray' fontStyle='italic' style={{textDecoration:'strikethrough'}}><s>${rand_14 }</s></Div>
      <Div position='absolute' top='20px' right='0px' fontWeight='bold' color='green'>${rand_14_50}</Div>

      </Div>
      <Div   onClick={()=>{this.props.handleSelect(15)}} pr = {this.props.selectedNumber == 15} position='relative' cursor='pointer'  width='100%' height='170px' border='2px solid white' backgroundImg = {SC15} backgroundSize='100%'>
      <Div position='absolute' backgroundColor='#520844' width='100%' opacity='.7' bottom='20px' right='0px' fontWeight='bold' color='white'>1 chose exact</Div>
      <Div position='absolute' right='0px' fontWeight='bold' color='gray' fontStyle='italic' style={{textDecoration:'strikethrough'}}><s>${rand_15 }</s></Div>
      <Div position='absolute' top='20px' right='0px' fontWeight='bold' color='green'>${rand_15_50}</Div>
      </Div>
      <Div   onClick={()=>{this.props.handleSelect(16)}} pr = {this.props.selectedNumber == 16} position='relative' cursor='pointer'  width='100%' height='170px' border='2px solid white' backgroundImg = {SC16} backgroundSize='100%'>
      <Div position='absolute' backgroundColor='#520844' width='100%' opacity='.7' bottom='20px' right='0px' fontWeight='bold' color='white'>1 chose exact</Div>
      <Div position='absolute' right='0px' fontWeight='bold' color='gray' fontStyle='italic' style={{textDecoration:'strikethrough'}}><s>${rand_16 }</s></Div>
      <Div position='absolute' top='20px' right='0px' fontWeight='bold' color='green'>${rand_16_50}</Div>
      </Div>


      </Carousel>
      </Div>

    )
  }
}


Template.propTypes = {

}
export default Template;
