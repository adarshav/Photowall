import React, {Component} from 'react';

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            // here id is assigned with date because when we post a new picture it should be in first
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if (description && imageLink){
            // this.props.onAddPhoto(post)
            // this.props.addPost(post);//this is ibefore implementing firebase after firebase implementation we have to call the function where actionCreators is first called
            this.props.startAddingPost(post);
            this.props.onHistory.push('/');
        }

    }

    render() {
        return (
    <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}> 
               <input type ="text" placeholder="Link" name="link"/>
               <input type ="text" placeholder="Desciption" name="description"/>
               <button> Post </button>
          </form>
        </div>
    </div>
    )
    }
}



export default AddPhoto


// import React, {Component} from 'react'
// class AddPhoto extends Component {
//  constructor() {
//  super()
//  this.handleSubmit = this.handleSubmit.bind(this)
//  }
//  handleSubmit(event) {
//  event.preventDefault();
//  const imageLink = event.target.elements.link.value
//  const description = event.target.elements.description.value
//  const post = {
//  id: Number(new Date()),
//  description: description,
//  imageLink: imageLink
//  }
//  if (description && imageLink){
//  this.props.startAddingPost(post)
//  this.props.onHistory.push('/')
//  }
//  }
//  render() {
//  return (
//  <div>
//  <div className="form">
//  <form onSubmit={this.handleSubmit}> 
//  <input type ="text" placeholder="Link" name="link"/>
//  <input type ="text" placeholder="Desciption" name="description"/>
//  <button> Post </button>
//  </form>
//  </div>
//  </div>
//  )
//  }
// }
// export default AddPhoto