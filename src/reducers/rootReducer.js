const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle Laid an Egg",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"
    },
    {
      id: "2",
      title: "Charmander Laid an Egg",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"
    },
    {
      id: "3",
      title: "a Helix Fossil was Found",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter(e => e.id !== action.payload)
      };
    case "ADD_POST":
      action.payload.id = Math.random().toString();
      let posts = [...state.posts, action.payload];
      return {
        ...state,
        posts
      };
    default:
      return state;
  }
};

export default rootReducer;
