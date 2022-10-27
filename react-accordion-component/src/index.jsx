import React from 'react';
import ReactDom from 'react-dom/client';
import Accordion from './accordion';

const topics = [
  { id: 1, name: 'Bubbles', details: 'she is blue' },
  { id: 2, name: 'Buttercup', details: 'she is green' },
  { id: 3, name: 'Blossom', details: 'she is pink' },
  { id: 4, name: 'Professor', details: 'he is idk' }
];

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render(<Accordion topics={topics}/>);
