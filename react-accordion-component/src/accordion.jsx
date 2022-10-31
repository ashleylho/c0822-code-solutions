import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickedTopicId: null };
    this.openTopic = this.openTopic.bind(this);
  }

  openTopic(event) {
    if (this.state.clickedTopicId === null) {
      this.setState({ clickedTopicId: event.target.dataset.topicId });
    } else if (event.target.dataset.topicId === this.state.clickedTopicId) {
      this.setState({ clickedTopicId: null });
    }
  }

  render() {
    const topics = this.props.topics;
    const listItems = topics.map(topic => {
      const toggle = Number(this.state.clickedTopicId) === topic.id ? '' : 'hidden';
      return <li key={topic.id}>
        <div data-topic-id={topic.id} className='topic' onClick={this.openTopic}>
        {topic.name}
        </div>
        <p className={toggle}>{topic.details}</p>
        </li>;
    });
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}
