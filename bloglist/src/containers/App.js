import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, Route, Switch } from "react-router-dom";
import {Button} from 'react-bootstrap';
import Blogpost from '../components/Blogpost.js';
import Blogcards from '../components/Blogcards.js';
import {requestBlogs } from '../actions';
import './App.css';
import 'tachyons';
import Blogpostcard from '../components/Blogpostcard.js';

const mapStateToProps = state => {
  return {
      blogs: state.requestBlogs.blogs,
      isPending: state.requestBlogs.isPending,
      error: state.requestBlogs.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onRequestBlogs: () => dispatch(requestBlogs())
  }
}

class App extends Component {
  componentDidMount(){     
    this.props.onRequestBlogs();
  }

  /*onRouteChange = (route) => {
    if (route === 'Home'){
      this.setState(initialState)
    } else if(route === 'Blogpost'){
      this.setState({isSignedIn:true})
    }
    this.setState({route: route});
  }*/

  render(){
    const {blogs, isPending} = this.props;
    console.log('blog-pending', isPending);
    if(isPending){
      return (<div className='tc'>
          <h1>Loading...</h1>
        </div>)
    }
    else {
      return (
        <div>
            <div className='tc'>
              <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                  <li>
                      <Link style={{color:'white', textDecoration:'none'}} className='dim' to='/'>Home</Link>
                  </li>
                  <li>
                      <Link style={{color:'white', textDecoration:'none'}} className='dim' to='/blogposts'>Blog Post</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route exact={true} path='/' render={() => (<Blogcards blogs={blogs} />)}/>
                <Route path='/blogposts' render={() => (<Blogpost blogs={blogs} />)} />
              </Switch>
             
              
            </div>
  
        </div>
      )
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
