import React from 'react';
import './card.css'

const Card = (obj)=>{

	return(
	<div className='bg-light-blue br4 pa2 tc rotate-center bw2 shadow-5 hero1'>
	 	<div className='inner1'>
	 	<img src={`https://robohash.org/${obj.id}?200x200`}  alt="Robo" />
		<div>
			<h2>{obj.name}</h2>
			<p>{obj.email}</p>
		</div>
		</div>
    </div>
    );
}
export default Card;