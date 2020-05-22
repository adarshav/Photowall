// import React from 'react';
// import { Route } from 'react-router-dom';

// import Main from './components/Main';
// import AddPhoto from  './components/AddPhoto';


// function App() {
//   return (
//     <div className="App">
//         <Route exact path = '/' component = { Main } />
//         <Route path = '/create' component = { AddPhoto } />
//     </div>
//   );
// }

// export default App;

// import Main from './components/Main'
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
// import * as actions from './redux/actions'
// import {withRouter} from 'react-router'
// function mapStateToProps(state) {
//  return {
//  posts: state.posts,
//  comments: state.comments
//  }
// }
// function mapDispatchToProps(dispatch) {
//  return bindActionCreators(actions, dispatch)
// }
// const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
// export default App