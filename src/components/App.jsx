import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { getImages } from '../FetchApi/FetchApi.jsx';
export class App extends Component {
  state = {
    hits: [],
    q: '',
    page: 1,
  };

  canLoadMore = false;

  componentDidUpdate(_, prevState) {
    const { q, page } = this.state;
    if (q !== prevState.q || page !== prevState.page) {
      getImages(q, page).then(({ hits, totalHits }) => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
        }));
        this.canLoadMore = Math.ceil(totalHits / 12) > page;
      });
    }
  }
  handleChangePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  hendleChengQuery = query => {
    this.setState({ q: query, page: 1, hits: [] });
  };

  render() {
    return (
      <>
        <header className="searchbar">
          <Searchbar onChangeQuery={this.hendleChengQuery} />
        </header>

        <ImageGallery hits={this.state.hits} />
        {this.canLoadMore && <Button handleClick={this.handleChangePage} />}
      </>
    );
  }
}
