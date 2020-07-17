import React from 'react';
import Blogcard from './Blogcard.js';
import {Button} from 'react-bootstrap';
import Blog from './Blog.js';
import {Link, Route} from "react-router-dom";
import './Blogcards.css';


const Blogcards = ({blogs}) => {
    
    const cardComponent = blogs.map((user, i) => {
       
        return (
            <div>
                <Link style={{color:'black', textDecoration:'none'}} className='dim' to={`/blogposts/${blogs[i].slug}`}>
                    <Blogcard
                        key={blogs[i].id}
                        blogimage={blogs[i].featured_image_thumbnail} 
                        title={blogs[i].title.rendered} 
                        excerpt={blogs[i].excerpt.rendered} 
                    />
                </Link>
                <Route path={`/blogposts/${blogs[i].slug}`} render={() => (<Blog blogs={blogs[i]} /> )} />
            </div>
            )
            
    })
    return(
        <div>
            <div>
                <div style={{ width:'100%', height:'390px', color:'white'}} className='tc head'>

                <h1 className='pa5 ma3'>E-POWER Blog</h1>
                <p style={{color:'rgba(255,255,255,.5)', paddingRight:'70px', paddingLeft:'70px'}} className='pa1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <Button style={{background: 'linear-gradient(105.33deg, #F41313 -28.55%, #F90178 125.13%)'}} className='dim ph3 pv2 br2 bw0 ma3' type="submit"><span style={{color:'rgba(255,255,255,.5)'}}>PREVIOUS</span></Button>
                <Button style={{background: 'linear-gradient(105.33deg, #F41313 -28.55%, #F90178 125.13%)'}} className='dim ph3 pv2 br2 bw0 ma3' type="submit"><span style={{color:'rgba(255,255,255,.5)'}}>NEXT</span></Button>
            </div>
        </div>

        <div style={{display:'inline-flex', paddingBottom:'100px',  width:'70%' }}>
              <div style={{width:'90%'}}>
                <div className='container'>
                    {cardComponent}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Blogcards;