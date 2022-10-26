import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.tagName === 'I') {
      this.setState({ isOpen: true });
    } else if (event.target.tagName === 'A' || event.target.className === 'modal column-two-thirds') {
      this.setState({ isOpen: false });
    }
  }

  render() {
    let modal;
    if (this.state.isOpen === true) {
      modal = 'drawer row';
    } else {
      modal = 'drawer row hidden';
    }
    return (
      <div className="container" onClick={this.handleClick}>
          <button onClick={this.handleClick}>
            <i className='fa-solid fa-bars'></i>
          </button>
          <div className='row'>
            <img src="https://assets.teenvogue.com/photos/5beb34096029df2db3813b6d/4:3/w_1528,h_1146,c_limit/tout.jpg" alt="powerpuff girls"></img>
          </div>
        <div className={modal}>
          <div className='menu column-third'>
            <h2>Menu</h2>
            <h3>
              <a className='bubbles' href='#'>Bubbles</a>
            </h3>
            <h3>
            <a className='blossom' href='#'>Blossom</a>
            </h3>
            <h3>
            <a className='buttercup' href='#'>Buttercup</a>
            </h3>
          </div>
          <div className='modal column-two-thirds'>
          </div>
        </div>
      </div>
    );
  }
}
