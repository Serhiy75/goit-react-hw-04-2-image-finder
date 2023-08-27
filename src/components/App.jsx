import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { getImages } from '../FetchApi/FetchApi.jsx';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    hits: [],
    q: '',
    page: 1,
    isLoading: false,
    isEmpty: false,
    showBtn: false,
  };

  componentDidUpdate(_, prevState) {
    const { q, page } = this.state;
    if (q !== prevState.q || page !== prevState.page) {
      getImages(q, page)
        .then(({ hits, totalHits }) => {
          if (!totalHits) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            isLoading: false,
            hits: [...prevState.hits, ...hits],
            showBtn: page < Math.ceil(totalHits / 12),
          }));
        })
        .catch(error => {
          this.setState({ isError: error.message, isLoading: false });
        });
    }
  }

  handleChangePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  hendleChengQuery = query => {
    this.setState({
      q: query,
      page: 1,
      hits: [],
      isEmpty: false,
      isLoading: true,
    });
  };

  render() {
    const { isEmpty, showBtn, isError, isLoading } = this.state;
    return (
      <>
        <header className="App">
          <Searchbar onChangeQuery={this.hendleChengQuery} />
        </header>

        {isLoading && <Loader />}
        {this.state.hits.length > 0 && <ImageGallery hits={this.state.hits} />}
        {showBtn && <Button handleClick={this.handleChangePage} />}
        {isEmpty && <p className="Paragraf">Sorry we nothing find...</p>}
        {isError && <p className="Error"> {isError} Something is wrong</p>}
      </>
    );
  }
}
