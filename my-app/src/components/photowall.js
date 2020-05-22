import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';


import Photo from './photo';

const Photowall = (props) => {
    return(
        <div>
            <Link className = "addIcon" to = '/create'></Link>
            <div className = "photo-grid">
               {
                //    there we have given the id we post as newDate and it wll be in the number format where it will be a big or greater number than with pre assumed number such as 0, 1, 2. So the photo id should sorted in form of descending order so that whatever new photo you add it will be seen first.
                   props.posts
                   .sort(function(x, y) {
                       return y.id - x.id
                   })      
                   .map((post, index) => <Photo key = { index } post = {post}  { ...props } index = {index}/>)
               }
            </div>
        </div>
        
    )
}
// This flexibility is awesome but could also cause some problems. If I’m using a component written by another developer I have to figure out what props that component want, what’s required and also the correct type. React has a solution for this and its called propTypes. PropTypes defines type and which props are required. This benefits the future you and other developer using your component in two ways:

// 1. You can easily open up a component and check which props are required and what type they should be.
// 2. When things get messed up React will give you an awesome error message in the console, saying which props is wrong/missing plus the render method that caused the problem.
// Photowall.propTypes = {
//     // totally there are two props which is pushed from Main.js i.e posts & onRemovePhoto
//     // the below line says the posts prop should always be in array type and is is required [mandatory]
//     posts:propTypes.array.isRequired
// }

export default Photowall;


// import React from 'react'
// import Photo from './photo'
// import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'
// //anchor tag, href attribute
// function PhotoWall(props) {
// return <div> 
//  <Link className = "addIcon" to="/AddPhoto"> </Link> 
//  <div className="photoGrid" >
//  {props.posts
//  .sort(function(x,y) {
//  return y.id - x.id
//  })
//  .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
//  </div>
//  </div>
// }
// PhotoWall.propTypes = {
//  posts: PropTypes.array.isRequired,
// }
//  export default PhotoWall