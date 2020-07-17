import React from 'react';

const Blogpostcard = ({blogimage, title, content}) => {
    return(
        <div>

            <div>
                    <div style={{width:'80%', fontSize:'1rem'}} className= 'dib br3 pa3 ma2 grow shadow-2 card'>
                        <div>
                            <img alt='blog' src={blogimage} width='50%'/>
                            <div style={{ paddingTop:'20px', paddingBottom:'20px'}}>
                                <h2 style={{background: 'linear-gradient(105.33deg, #F41313 -28.55%, #F90178 125.13%)', width:'100%'}} 
                                className='ph4 br2 bw0'>{title}</h2>
                            </div>
                        </div>
                        <div>
                        <td dangerouslySetInnerHTML={{__html: content}} />
                        </div>
                            
                </div>
            </div>

        </div>
    )
}

export default Blogpostcard