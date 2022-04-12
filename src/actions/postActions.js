export const deletePost = id => {
  return {
    type: "DELETE_POST",
    payload: id
  };
};

export const addPost = post => {
  return {
    type: "ADD_POST",
    payload: post
  };
};
