import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImg: 1 };
    this.carousel = this.carousel.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleArrow = this.handleArrow.bind(this);
  }

  carousel() {

  }

  handleClick(event) {

  }

  handleArrow(event) {
    if (event.target.className.includes('fa-chevron-right')) {
      if (this.state.currentImg !== 5) {
        this.setState({ currentImg: this.state.currentImg + 1 });
      } else {
        this.setState({ currentImg: 1 });
      }
    } else if (event.target.className.includes('fa-chevron-left')) {
      if (this.state.currentImg !== 1) {
        this.setState({ currentImg: this.state.currentImg - 1 });
      } else {
        this.setState({ currentImg: 5 });
      }
    }
  }

  render() {
    const imgSrc = this.props.imgSrc;
    const imageList = imgSrc.map(img => {
      const toggle = this.state.currentImg === img.id ? '' : 'hidden';
      return <img key={img.id} className={toggle} src={img.img}></img>;
    });
    return (
      <>
        <div className="row" onClick={this.handleArrow}>
        <div className='column-full arrows' >
          <i className='fa-solid fa-chevron-left'></i>
          {imageList}
          <i className='fa-solid fa-chevron-right'></i>
        </div>
      </div>
      <div className="row" onClick={this.handleClick}>
        <div className="column-full circle">
          <i className="fa-solid fa-circle"></i>
          <i className="fa-regular fa-circle"></i>
          <i className="fa-regular fa-circle"></i>
          <i className="fa-regular fa-circle"></i>
          <i className="fa-regular fa-circle"></i>
        </div>
      </div>
      </>
    );
  }
}
