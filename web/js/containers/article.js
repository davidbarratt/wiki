import { connect } from 'react-redux';
import Article from '../components/article.jsx';
import { getArticleData, setView } from '../actions/article.js';

const mapStateToProps = (state, ownProps) => {
  return {
    view: state.article.view,
    text: state.article.data.text
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMount: () => {
      dispatch(getArticleData(ownProps.id));
    },
    changeView: (view) => {
      dispatch(setView(view));
    }
  };
};

const ArticleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);

export default ArticleContainer;
