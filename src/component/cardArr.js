import React from 'react';
import Card from './card';
import './cardArr.css'

const CardArr = ({user}) =>{
	console.log('CardArr',user);
	let CardList = user.map((u,i)=>{
		return <Card key={i} id={u.id} name={u.name} email={u.email} />

	});

	return(
		<div className='hero br4'>
			{CardList}
		</div>

		);

}

export default CardArr;