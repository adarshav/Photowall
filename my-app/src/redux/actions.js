import { database } from '../firebase/config';

//this is a function to call the action and update the database
export function startAddingPost(post) {
    // here dispatch is a method, [.then] is a promise
    return(dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(() => {
            dispatch(addPost(post));
        }).catch((error) => {
            console.log(error);
        })
    }
}
// this is function for fetching the data in the database
export function startLoadingPost() {
    return(dispatch) => {
        // here snapshot is id's of posts object
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = [];
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val());
            })
            dispatch(loadPosts(posts));
        })
            
    }
}

// Action for loading posts
export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts:posts
    }
}

// function for removing posts in the database
export function startRemovingPost(index, id) {
    return(dispatch) => {
        return database.ref(`posts/${ id }`).remove().then(() => {
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error);
        })
    }
}
// Actions are just javascript objects which takes key as type and payload
//remove posts
export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index:index
    }
}
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post:post
    }
}
// function for adding comments to database
export function startAddingComments(comment, postId) {
    return(dispatch) => {
        return database.ref('comment/'+postId).push(comment).then(() => {
            dispatch(addComment(comment, postId));
        }).catch((error) => {
            console.log(error);
        })
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment:comment, 
        postId: postId
    }
}
// function for loading comments in database 
export function startLoadingComments() {
    return(dispatch) => {
        return database.ref('comment').once('value').then((snapshot) => {
            let comments = {};
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())    
            })
            dispatch(loadComments(comments));
        }).catch((error) => {
            console.log(error);
        })
    }
}
//action for loadingComments
export function loadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments:comments
    }
}


// import {database} from '../firebase/config'
// export function startAddingPost(post) {
//  return (dispatch) => {
//  return database.ref('posts').update({[post.id]: post}).then(() => {
//  dispatch(addPost(post))
//  }).catch((error) => {
//  console.log(error)
//  })
//  }
// } 
// export function startLoadingPost() {
//  return (dispatch) => {
//  return database.ref('posts').once('value').then((snapshot) => {
//  let posts = []
//  snapshot.forEach((childSnapshot) => {
//  posts.push(childSnapshot.val())
//  })
//  dispatch(loadPosts(posts))
//  }).catch((error) => {
//  console.log(error)
//  })
//  }
// }
// export function startRemovingPost(index, id) {
//  return (dispatch) => {
//  return database.ref(`posts/${id}`).remove().then(() => {
//  dispatch(removePost(index))
//  }).catch((error) => {
//  console.log(error)
//  })
//  }
// }
// export function startAddingComment(comment, postId) {
//  return (dispatch) => {
//  return database.ref('comments/'+postId).push(comment).then(() => {
//  dispatch(addComment(comment, postId))
//  }).catch((error) => {
//  console.log(error)
//  })
//  }
// }
// export function startLoadingComments() {
//  return (dispatch) => {
//  return database.ref('comments').once('value').then((snapshot) => {
//  let comments = {}
//  snapshot.forEach((childSnapshot) => {
//  comments[childSnapshot.key] = Object.values(childSnapshot.val())
//  })
//  dispatch(loadComments(comments))
//  })
//  }
// }
// export function loadComments(comments) {
//  return {
//  type: 'LOAD_COMMENTS',
//  comments
//  }
// }
// export function removePost(index) {
//  return {
//  type: 'REMOVE_POST',
//  index
//  }
// }
// export function addPost(post) {
//  return {
//  type: 'ADD_POST',
//  post
//  }
// }
// export function addComment(comment, postId) {
//  return {
//  type: 'ADD_COMMENT',
//  comment,
//  postId
//  }
// }
// export function loadPosts(posts) {
//  return {
//  type: 'LOAD_POSTS',
//  posts
//  }
// }