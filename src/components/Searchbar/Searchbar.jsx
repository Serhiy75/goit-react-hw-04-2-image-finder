import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  SearchHeader,
  SearchForm,
  SearchButton,
  SearchLabel,
  SearchFormInput,
} from './Searchbar.styled';

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
      <SearchHeader>
        <SearchForm onSubmit={this.hendleSubmit}>
          <SearchButton type="submit">
            <BsSearch />
          </SearchButton>
          <SearchLabel>
            <span>Search</span>
          </SearchLabel>
          <SearchFormInput
            type="text"
            value={this.state.text}
            placeholder="Search images"
            onChange={this.hendleChange}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}
