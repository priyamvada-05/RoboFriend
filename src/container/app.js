import React, { Component } from 'react';
import CardArr from '../component/cardArr';
import SearchBox from '../component/searchBox';
import './app.css';
import Scroll from '../component/scroll';

class App extends Component {

	constructor(){
		super()
		this.state={
			robot:[],
			searchRobo:''
		}
		this.robo=[];
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response=>{
			return response.json();
		})
		.then(user=>{
			this.setState({robot : user});
		})
	}


	search=(event)=>{
		this.setState({searchRobo:event.target.value});

			}


	render(){

		this.robo=this.state.robot.filter(r=>{
				return r.name.toLowerCase().includes(this.state.searchRobo.toLowerCase())
		})
		return(
			<div className="tc new1">
			<h1 className='font-face'>RoboFriend</h1>
			<SearchBox searchfield={this.search}/>
			<div className='new'>
			<Scroll>
			<CardArr user={ this.robo } />
			</Scroll>	
			</div>
			</div>
			);
	}
}

export default App;