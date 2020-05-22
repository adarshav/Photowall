import React from 'react'
import {Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

// import Title from './Title'
import Photowall from './photowall'
import AddPhoto from './AddPhoto';
import Single from './Single';
// Actions are used where the action is triggered in our application,here the action is RemovePost where we want to remove the picture in the photowall when remove button is pressed
import * as actionCreators from '../redux/actions';

class Main extends React.Component {

    state = {loading: true}
    // this is because calling external server to fetch the data 
    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading:false})
        });
        this.props.startLoadingComments();
    }
    // removePhoto(postRemoved) {
    //     console.log(postRemoved.description)
    //     this.setState((state) => ({
    //         posts: state.posts.filter(post => post !== postRemoved )
    //     }))
    // }

    // addPhoto(postSubmitted) {
    //     this.setState(state => ({
    //         posts: state.posts.concat([postSubmitted])
    //     }))
    // }

    render() {
        console.log(this.props.posts);
        return ( 
        
        <div>
            <h1>
                <Link to = '/'>Photowall</Link>
            </h1>
            <Switch>
                <Route exact path = "/" render={() => (
                    <div>
                        <Photowall {...this.props}/>
                        {/* <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/> */}
                    </div>
                )}/> 

                <Route path= "/create" render = {({history}) => (
                <AddPhoto { ...this.props } onHistory = {history}/>
                    // this.addPhoto(addedPost)
                    // this is done when user posts an image he will be redirected to main page
                    // history.push('/')
                )}/>
                {/* here params represents parameters which is an large object, The above 'history' is also one among the params object if we mention params there also we can derive as params.history. */}
                <Route exact path = '/single/:id' render = {(params) => (
                    <Single loading = {this.state.loading} { ...this.props } {...params} />
                )}/>
            </Switch>
            
         </div>
        )
    }

}
const mapStateToProps = (state) => ({
    posts:state.posts,
    comments:state.comments
})
function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(Main));


// import React, {Component} from 'react'
// import PhotoWall from './photowall'
// import AddPhoto from './AddPhoto'
// import {Route, Link} from 'react-router-dom'
// import Single from './Single'
// class Main extends Component {
 
//  state = { loading: true }
//  componentDidMount() {
//  this.props.startLoadingPost().then(() => {
//  this.setState({loading: false})
//  })
//  this.props.startLoadingComments()
//  }
//  render() {
//  return ( 
 
//  <div>
//  <h1> 
//  <Link to="/"> Photowall </Link> 
//  </h1>
//  <Route exact path = "/" render={() => (
//  <div>
//  <PhotoWall {...this.props} /> 
//  </div>
//  )}/> 
//  <Route path= "/AddPhoto" render = {({history}) => (
//  <AddPhoto {...this.props} onHistory={history}/>
//  )}/>
//  <Route exact path="/single/:id" render = {(params) => (
//  <Single loading={this.state.loading} {...this.props} {...params}/> 
//  )}/>
 
//  </div>
//  )
//  }
// }
// export default Main