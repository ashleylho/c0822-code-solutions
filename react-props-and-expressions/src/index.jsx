import React from 'react';
import ReactDom from 'react-dom';

function CustomButton(props) {
  return (
    <button>{props.text}</button>
  );
}

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);

root.render(element);
