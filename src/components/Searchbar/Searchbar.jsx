import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    text: '',
  };

  hendleChange = event => {
    this.setState({ text: event.target.value });
  };

  hendleSubmit = event => {
    event.preventDefault();
    const { text } = this.state;
    this.props.onChangeQuery(text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="Searchform" onSubmit={this.hendleSubmit}>
          <input
            className="SearchForminput"
            value={this.state.text}
            type="text"
            onChange={this.hendleChange}
            // autocomplete="off"
            // autofocus
            // placeholder="Search images and photos"
          />
          <button type="submit" className="SearchFormbutton ">
            <span className="SearchFormbutton-label ">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
