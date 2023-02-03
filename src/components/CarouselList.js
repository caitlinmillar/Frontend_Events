import { Collapse, Carousel, Radio } from 'antd';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import Event from './Event';
import { useState } from 'react';
import pic1 from "./merchImages/1.png";
import pic2 from "./merchImages/2.png";
import pic3 from "./merchImages/3.png";
import pic4 from "./merchImages/4.png";

const contentStyle = {
    margin: 0,
    height: '260px',
    maxHeight: '100%',
    background: '#364d79',
  };


  const images = [
    {"id" : 1, "url": pic1},
    {"id" : 2, "url": pic2},
    {"id" : 3, "url": pic3},
    {"id" : 4, "url": pic4},
]

const CarouselList = () => {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    }

    const [dotPosition, setDotPosition] = useState('right');
    const handlePositionChange = ({ target: { value } }) => {
      setDotPosition(value);
    };

    
    return (
        <>
        <Radio.Group
        onChange={handlePositionChange}
        value={dotPosition}  
      >
      </Radio.Group>
  
        <Carousel dotPosition={dotPosition} afterChange={onChange}>
        <div className='imagelist'> 
            <h3  className="pic1"style={contentStyle}>
                <Link to="/merch">
                    <img src={pic1}/></Link>
                    </h3>      
        </div>
        <div>
            <h3 style={contentStyle}>
                <Link to="/merch">
                    <img src={pic2}/></Link>
                    </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <Link to="/merch">
                    <img src={pic3}/></Link>
                    </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
                <Link to="/merch">
                    <img src={pic4}/></Link>
                    </h3>
        </div>
        </Carousel>
        </>
    )
}

export default CarouselList