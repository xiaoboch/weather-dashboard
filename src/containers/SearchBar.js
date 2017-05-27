import React, {Component} from 'react'


class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state ={term: ''}
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
    console.log(event)
  }

  render() {

      return (
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input placeholder="give a five day forecase in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={(event) => this.onInputChange(event)}/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
        </form>
      );
  }
}

export default SearchBar;
