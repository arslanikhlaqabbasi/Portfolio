import React from 'react'
import Carosal from './Carosal';
import Service from './Service'
import Overview from './Overview';
import Testimonial from './Testimonial';
import Client from './Client';
import Industries from './Industries';

export default function Home() {
  const images = ['https://template79488.motopreview.com/mt-demo/79400/79488/mt-content/uploads/2019/04/mt-1794-slider-img-1.jpg',
   'https://template79488.motopreview.com/mt-demo/79400/79488/mt-content/uploads/2019/04/mt-1794-slider-img-2.jpg',
    'https://template79488.motopreview.com/mt-demo/79400/79488/mt-content/uploads/2019/04/mt-1794-slider-img-3.jpg'];
const texts=['We Take Care ','Call Center', 'Reliable Outsource']
const texts1=['Of Your Customer','Outsource Provider', 'Customer Support Call']

  return (
    <>

<Carosal images={images} texts={texts} texts1={texts1} interval={5000}/> 
<Service/>

<Overview/>

<Testimonial/>
<Industries/>
<Client/>
</>
)
}
