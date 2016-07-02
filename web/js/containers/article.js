import { connect } from 'react-redux';
import Article from '../components/article.jsx';
import { getArticleData } from '../actions/article.js';

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.article.data.text,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMount: (id) => {
      dispatch(getArticleData(ownProps.id));
    }
  };
};

const ArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);

export default ArticleContainer;
