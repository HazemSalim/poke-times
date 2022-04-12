import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../actions/postActions";

class AddPost extends Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addPost(this.state);

    this.setState({
      title: "",
      body: ""
    });
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            id="title"
            onChange={this.handleChange}
         
          />
          <label>Body:</label>
          <input
            type="text"
            id="body"
            onChange={this.handleChange}
            
          />
          <div className="center">
            <button onClick={this.handleClick}>Add Post</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: post => {
      dispatch(addPost(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddPost);
