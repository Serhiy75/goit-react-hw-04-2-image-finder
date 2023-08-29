import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
// import { Component, useEffect, useState } from 'react';
import { Loader } from './Loader/Loader';
import { useEffect, useState } from 'react';
import { getImages } from '../FetchApi/FetchApi.jsx';

// export class App extends Component {
//   state = {
//     hits: [],
//     q: '',
//     page: 1,
//     isLoading: false,
//     isEmpty: false,
//     showBtn: false,
//   };
export const App = () => {
  const [hits, setHits] = useState([]);
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getImages(q, page)
      .then(({ hits, totalHits }) => {
        if (!totalHits) {
          setIsEmpty(true);
          return;
        }
        setIsLoading(false);
        setHits(prevState => [...prevState, ...hits]);
        setShowBtn(page < Math.ceil(totalHits / 12));
      })
      .catch(error => {
        setIsError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, q]);

  const handleChangePage = () => {
    setPage(prevState => prevState + 1);
    setIsLoading(true);
  };

  const hendleChengQuery = q => {
    setQ(q);
    setHits([]);
    setPage(1);
    setIsError('');
    setIsEmpty(false);
    setShowBtn(false);
  };
  // componentDidUpdate(_, prevState) {
  //   const { q, page } = this.state;
  //   if (q !== prevState.q || page !== prevState.page) {
  //     getImages(q, page)
  //       .then(({ hits, totalHits }) => {
  //         if (!totalHits) {
  //           this.setState({ isEmpty: true });
  //           return;
  //         }
  //         this.setState(prevState => ({
  //           isLoading: false,
  //           hits: [...prevState.hits, ...hits],
  //           showBtn: page < Math.ceil(totalHits / 12),
  //         }));
  //       })
  //       .catch(error => {
  //         this.setState({ isError: error.message, isLoading: false });
  //       });
  //   }
  // }

  // handleChangePage = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //     isLoading: true,
  //   }));
  // };

  // hendleChengQuery = query => {
  //   this.setState({
  //     q: query,
  //     page: 1,
  //     hits: [],
  //     isEmpty: false,
  //     isLoading: true,
  //   });
  // };

  // render() {
  //   const { isEmpty, showBtn, isError, isLoading } = this.state;
  return (
    <>
      <header className="App">
        <Searchbar onChangeQuery={hendleChengQuery} />
      </header>

      {isLoading && <Loader />}
      {hits.length > 0 && <ImageGallery hits={hits} />}
      {/* {this.state.hits.length > 0 && <ImageGallery hits={this.state.hits} />} */}
      {showBtn && <Button handleClick={handleChangePage} />}
      {isEmpty && <p className="Paragraf">Sorry we nothing find...</p>}
      {isError && <p className="Error"> {isError} Something is wrong</p>}
    </>
  );
};
