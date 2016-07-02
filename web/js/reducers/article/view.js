const view = (state = 'read', action) => {
  switch (action.type) {
    case 'ARTICLE_VIEW_SET':
      return action.view;
    default:
      return state;
  }
};

export default view;
