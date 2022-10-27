import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.status = { isOpen: false };
    this.openTopic = this.openTopic.bind(this);
  }

  openTopic(event) {
    this.setState({ isOpen: true });
  }

  closeTopic(event) {

  }

  render() {
    const topics = this.props.topics;
    const listItems = topics.map(topic =>
      <li key={topic.id}>
        <div className='topic' onClick={this.openTopic}>
        {topic.name}
        </div>
        <p className={`details ${this.status.isOpen ? '' : 'hidden'}`}>{topic.details}</p>
        </li>);
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

// map through topics, if event.target === topic, generate topic details for that topic
// else just generate topics
