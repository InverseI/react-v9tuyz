import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

import './style.css';

const HelloWorld = (props) => (React.createElement("h1", null, "Hello World!"))

const TumblerButton = (props) =>  (<button onClick={props.action}>{props.title}</button>)

class SearchOptions extends React.PureComponent {
  state = {
			indexSelected: 0
  }

  handleSelectOption = (index) => {
    this.setState({
      indexSelected: index
    });
  }

	render() {
		return (
		  <div>
	      <div>Search by </div>
        {this.props.options.map((elem, index) => <TumblerButton action={()=>{this.handleSelectOption(index)}} title={elem} />)}
				<div>{this.state.indexSelected}</div>
			</div>
		);
  };
}

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <SearchOptions options={["Title", "Genre"]} /> 
      </div>
    );
  }
}

render(<App />, document.getElementById('root'), );
