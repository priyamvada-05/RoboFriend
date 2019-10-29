import React from 'react';

const SearchBox = ( {searchfield} )=>{
	return(
		<input 
		type='search' 
		placeholder="Enter the Robot Name" 
		className="bg-lightest-blue pa3 ba b--green grow" 
		onChange={searchfield}
		/>
		);

}

export default SearchBox;