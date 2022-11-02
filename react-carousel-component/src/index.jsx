import React from 'react';
import ReactDom from 'react-dom/client';
import Carousel from './carousel';

const images = [
  {
    id: 1,
    img: 'https://preview.redd.it/g2nltjddg5e41.jpg?auto=webp&s=5f168221264a4e4fd00c4026b880a9a1beb94cae'
  },
  {
    id: 2,
    img: 'https://i.pinimg.com/originals/2d/60/df/2d60df43e06b1735adbe5c234f69cde3.jpg'
  },
  {
    id: 3,
    img: 'http://mymodernmet.com/wp/wp-content/uploads/2017/03/camerons-chinchillas-butt-2.jpg'
  },
  {
    id: 4,
    img: 'https://pbs.twimg.com/media/EZHN_WGXYAUTtt9?format=jpg&name=large'
  },
  {
    id: 5,
    img: 'https://pbs.twimg.com/media/EAEQ_ciX4AAIITj.jpg'
  }
];

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render(<Carousel imgSrc={images}/>);
