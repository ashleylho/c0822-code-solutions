import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickedTopicId: null };
    this.openTopic = this.openTopic.bind(this);
  }

  openTopic(event) {
    this.setState({ clickedTopicId: event.target.id });
  }

  closeTopic(event) {

  }

  render() {
    const topics = this.props.topics;
    const listItems = topics.map(topic =>
      <li key={topic.id} data-topic-id={topic.id}>
        <div className='topic' onClick={this.openTopic}>
        {topic.name}
        </div>
        </li>);
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}
