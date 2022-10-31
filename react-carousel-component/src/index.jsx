import React from 'react';
import ReactDom from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render(<Carousel />);
