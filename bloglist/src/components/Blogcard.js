import React from 'react';
import {Button} from 'react-bootstrap';


const Blogcard = ({blogimage, title, excerpt}) => {
    return(
        <div>

            <div>
                    <div style={{ width:'300px', fontSize:'1rem'}} className= 'tc dib br3 pa3 ma2 grow shadow-2 card'>
                        <div>
                            <img alt='blog' src={blogimage} width='100%' height='200px'/>
                            <div style={{ paddingBottom:'20px'}}>
                                <Button style={{background: 'linear-gradient(105.33deg, #F41313 -28.55%, #F90178 125.13%)', width:'100%'}} 
                                className='dim ph4 br2 bw0' type="submit">{`${title}`}</Button>
                            </div>
                        </div>
                        <td dangerouslySetInnerHTML={{__html: excerpt}} />
                            
                </div>
            </div>

        </div>
    )
}


export default Blogcard;