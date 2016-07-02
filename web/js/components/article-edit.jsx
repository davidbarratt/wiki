import React from 'react';

class ArticleEdit extends React.Component {
  handleSubmit (e) {
    e.preventDefault();
    this.props.saveArticle(this.props.id, this.props.text);
  }
  updateText (e) {
    this.props.updateText(e.target.value);
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <textarea className="form-control" value={this.props.text} onChange={this.updateText.bind(this)}></textarea>
        </div>
        <button type="submit" className="btn btn-default">Save</button>
      </form>
    );
  }
}

export default ArticleEdit;
