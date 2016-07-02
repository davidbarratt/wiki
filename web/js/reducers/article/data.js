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
    default:
      return state;
  }
};

export default data;
