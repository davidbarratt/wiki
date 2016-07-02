import { connect } from 'react-redux';
import ArticleEdit from '../components/article-edit.jsx';
import { setArticleText, saveArticleData, setView } from '../actions/article.js';

const mapStateToProps = (state, ownProps) => {
  return {
    id: state.article.data.id,
    text: state.article.data.text
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateText: (text) => {
      dispatch(setArticleText(text));
    },
    saveArticle: (id, text) => {
      dispatch(saveArticleData(id, text));
      dispatch(setView('read'))
    }
  };
};

const ArticleEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleEdit);

export default ArticleEditContainer;
