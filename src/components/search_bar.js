import React, {Component} from 'react';
// TODO '{Component}' is the same as writing const Component = React.Component

// TODO This is a functional component, the bottom is a Class component
// const SearchBar = () => {
//   return <input />;
// };

// TODO class components must have a render method and return jsx or there will be an error

class SearchBar extends Component {

  // ******* Functional components DO NOT have state, only Class components ***********
  constructor(props){
    super(props);
    this.state = {term:''}
  }

  render(){
    return (
      <div className='search-bar'>
        <input onChange={ event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

    // TODO the bottom is an example of a how to use es6 and create and call a function in one line.
    // return <input onChange={this.onInputChange}/>;

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // onInputChange(event){
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
