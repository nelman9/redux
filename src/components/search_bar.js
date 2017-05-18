import React from 'react';



class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state={term:''}
  }


render() {

  return (
<div>
<input onChange={event =>this.setState({term:event.target.value})} />
<p>value is:{this.state.term}</p>
</div>
  );
   }
  }
export default SearchBar;
