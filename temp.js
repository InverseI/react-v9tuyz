import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

import './style.css';

function TumblerButton(props) {
	return <button onClick={props.action}>{props.title}</button>
}

class SearchOptions extends React.Component {
  constructor() {
	  super();
  	this.state = {
			options: ["Title", "Genre"],
			indexSelected: 0
		}

    this.handleSelectOption = this.handleSelectOption.bind(this);
  }

  handleSelectOption(index){
    this.setState({
      indexSelected: index
    });
  }

	render() {
		return (
		  <div>
	      <div>Search by </div>
        {this.state.options.map((elem, index) => <TumblerButton action={()=>{this.handleSelectOption(index)}} title={elem} />)}
				<div>{this.state.indexSelected}</div>
			</div>
		);
  };
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <SearchOptions /> 
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));


