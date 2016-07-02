export const setRetrieving = (status) => {
  return {
    type: 'ARTICLE_STATUS_RETRIEVING'
  }
};

export const setIdle = () => {
  return {
    type: 'ARTICLE_STATUS_IDLE'
  }
};

export const addArticleData = (data) => {
  return {
    type: 'ARTICLE_ADD_DATA',
    data: data
  }
}

export const getArticleData = (id) => {
  return (dispatch) => {
    dispatch(setRetrieving());
    return new Promise((resolve, reject) => {
      const client = new XMLHttpRequest();
      client.open('GET', 'http://127.0.0.1:8000/article/' + id, true);
      client.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
          if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            dispatch(addArticleData(data));
            dispatch(setIdle());
            resolve(data);
          }
          else {
            reject(this.statusText);
          }
        };
      };
      client.send();
    });
  };
};
