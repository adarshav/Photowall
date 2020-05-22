// import React from 'react';
// import propTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// const Photo = ({props, post}) => {
//     // const post = props.post;
//     return(
//         <div>
//             <figure className = "figure">
//                 <Link to = {`/single/${post.id}`} >
//                     <img className = "photo" src = {post.imageLink} alt = {post.description} />
//                 </Link>
                
//                 <figcaption>
//                     <p>{ post.description }</p>
//                 </figcaption>
//                 <div className = "button-container">
//                     <button onClick = { () => {
//                         // props.removePost(props.index);
//                         props.startRemovingPost(props.index, post.id);
//                         props.history.push('/');
//                     }}> Remove </button>
//                     <Link className = "button" to = {`/single/${post.id}`}>
//                         <div className = "comment-count">
//                             <div className = "speech-bubble"></div> 
//                                 {/* {props.comments[post.id] ? props.comments[post.id].length : 0 } */}
//                                 {/* {props.comments[post.id] ? props.comments[post.id].length : 0 } */}
//                         </div>
//                     </Link>
//                 </div>
//         </figure>
//         </div>
        
//     )
// }

// Photo.propTypes = {
//     post:propTypes.object.isRequired
// }

// // const mapStateToProps = (state) => ({
// //     posts:state
// // })
// // export default connect(mapStateToProps)(Photo);
// export default Photo;




// ************************************************************************
import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function Photo(props) {
 const post = props.post
 return <figure className="figure"> 
 <Link to={`/single/${post.id}`}> <img className= "photo" src={post.imageLink} alt={post.description}/></Link>
 <figcaption> <p> {post.description} </p> </figcaption>
 <div className = "button-container">
 <button onClick = {() => {
 props.startRemovingPost(props.index, post.id)
 props.history.push('/')
 }}> Remove </button>
 <Link className="button" to={`/single/${post.id}`}> 
 <div className="comment-count"> 
 <div className="speech-bubble"> </div>
 {props.comments[post.id] ? props.comments[post.id].length : 0 }
 </div>
 </Link>
 </div>
 </figure>
}
Photo.propTypes = {
 post: PropTypes.object.isRequired,
}
export default Photo