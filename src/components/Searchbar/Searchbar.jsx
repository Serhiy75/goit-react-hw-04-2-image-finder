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
      <header className="searchbar">
        <form className="form" onSubmit={this.hendleSubmit}>
          <input
            className="input"
            value={this.state.text}
            type="text"
            onChange={this.hendleChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
