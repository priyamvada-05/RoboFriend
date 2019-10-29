import React from 'react';

const Scroll=(prop)=>{

	return(
		<div style={{overflow:'auto', border:'1px solid black', height:'800px'}}>
			{prop.children}

		</div>

		)
			}

export default Scroll