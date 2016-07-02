const data = (state, action) => {
  if (typeof state === 'undefined') {
    return {
      id: '',
      text: '',
    };
  }

  switch (action.type) {
    case 'ARTICLE_ADD_DATA':
      return action.data;
    case 'ARTICLE_DATA_SET_TEXT':
      return {
        id: state.id,
        text: action.text
      };
    default:
      return state;
  }
};

export default data;
