import React from 'react';

class Article extends React.Component {
  componentDidMount () {
    this.props.onMount();
  }
  render () {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.text}} />
    );
  }
}

export default Article;
