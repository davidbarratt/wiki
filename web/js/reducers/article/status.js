const status = (state = 'idle', action) => {
  switch (action.type) {
    case 'ARTICLE_STATUS_RETRIEVING':
      return 'retrieving';
    case 'ARTICLE_STATUS_IDLE':
      return 'idle';
    default:
      return state;
  }
};

export default status;
