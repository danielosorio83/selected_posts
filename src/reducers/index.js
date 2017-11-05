import { combineReducers } from 'redux';

import posts from './posts_reducer';
import selectedPostsIds from './selected_posts_reducer';

const rootReducer = combineReducers({
  posts,
  selectedPostsIds
});

export default rootReducer;
