import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PostsList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  handlePostSelect({id}, event){
    const { selectPost, deselectPost } = this.props;
    event.target.checked ? selectPost(id) : deselectPost(id);
  }

  renderPost(post){
    return (
      <li className="list-group-item" key={post.id}>
        <input
          checked={_.includes(this.props.selectedPostsIds, post.id)}
          type="checkbox"
          onChange={this.handlePostSelect.bind(this, post)} />
        {post.title}
      </li>
    );
  }

  render(){
    return (
      <ul className="list-group">
        {_.map(this.props.posts, this.renderPost.bind(this))}
      </ul>
    );
  }
}

function mapStateToProps(state){
  const { posts, selectedPostsIds } = state;
  return {
    posts,
    selectedPostsIds
  }
}

export default connect(mapStateToProps, actions)(PostsList);
