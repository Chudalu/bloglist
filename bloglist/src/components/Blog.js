import React from 'react';
import Blogpostcard from './Blogpostcard.js';
import {Button} from 'react-bootstrap';

const Blog = ({blogs}) => {
    
    const cardComponent = () => {
        return (
            <Blogpostcard key={blogs.key} 
                blogimage={blogs.featured_image} 
                title={blogs.title.rendered}
                content={blogs.content.rendered}
            />)
    }
    return(
        <div>
            <div style={{ width:'100%', height:'390px', color:'white'}} className='tc head'>

                <h1 className='pa5 ma3'>E-POWER Blog</h1>
                <p style={{color:'rgba(255,255,255,.5)', paddingRight:'70px', paddingLeft:'70px'}} className='pa1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <Button style={{background: 'linear-gradient(105.33deg, #F41313 -28.55%, #F90178 125.13%)'}} className='dim ph3 pv2 br2 bw0 ma3' type="submit"><span style={{color:'rgba(255,255,255,.5)'}}>PREVIOUS</span></Button>
                <Button style={{background: 'linear-gradient(105.33deg, #F41313 -28.55%, #F90178 125.13%)'}} className='dim ph3 pv2 br2 bw0 ma3' type="submit"><span style={{color:'rgba(255,255,255,.5)'}}>NEXT</span></Button>
            </div>
            <div>
                {cardComponent}
            </div>
        </div>
    )
}

export default Blog;