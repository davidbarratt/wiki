import React from 'react';
import ArticleEditContainer from '../containers/article-edit.js';

class Article extends React.Component {
  componentDidMount () {
    this.props.onMount(this.props.id);
  }
  changeView (e) {
    e.preventDefault();
    this.props.changeView(this.props.view === 'edit' ? 'read' : 'edit');
  }
  render () {
    let text = '';
    let action = '';
    if (this.props.view === 'read') {
      action = 'edit';
      text = <div dangerouslySetInnerHTML={{__html: this.props.text}} />;
    }
    else if (this.props.view === 'edit') {
      action = 'read';
      text = <ArticleEditContainer />
    }

    return (
      <div>
        <div className="row">
          <div className="col-xs-11">
            <h1>{this.props.id}</h1>
            <a href="" onClick={this.changeView.bind(this)}>{action}</a>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {text}
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
