import React from 'react';
import ReactDom from 'react-dom/client';
import Accordion from './accordion';

const topics = [
  { id: 1, name: 'Bubbles', details: 'Bubbles is the softest and sweetest Powerpuff Girl. Her blond pigtails and happy smile belie her innocence. But just because Bubbles is the kindest Powerpuff Girl doesn\'t mean she\'s a pushover. She can kick monster and villain butt just as well as her sisters can.' },
  { id: 2, name: 'Buttercup', details: 'Buttercup is a tough, hotheaded tomboy. Her raven- haired locks mirror her dark, serious nature. Buttercup doesn\'t have time for plans; she\'s all action. And don\'t try getting in her way! She fights hard and has a pile of victims to prove it.' },
  { id: 3, name: 'Blossom', details: 'Blossom is the leader of the Powerpuff Girls. Like her fiery red hair, Blossom is strong and determined, but she\'s also methodical and thinks things through. Blossom doesn\'t run into a situation with just her emotions ruling her.' },
  { id: 4, name: 'Professor Utonium', details: 'Supremely intelligent, Professor Utonium teaches classes in quantum physics and micro-nuclear fusion at Townsville Research Center. He is also a very compassionate man and loves to make a difference in the lives of his fellow citizens.' }
];

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render(<Accordion topics={topics}/>);
