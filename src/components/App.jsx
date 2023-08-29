import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { useEffect, useState } from 'react';
import { getImages } from '../FetchApi/FetchApi.jsx';

export const App = () => {
  const [hits, setHits] = useState([]);
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    if (q === '') return;
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

  return (
    <>
      <header className="App">
        <Searchbar onChangeQuery={hendleChengQuery} />
      </header>

      {isLoading && <Loader />}
      {hits.length > 0 && <ImageGallery hits={hits} />}
      {showBtn && <Button handleClick={handleChangePage} />}
      {isEmpty && <p className="Paragraf">Sorry we nothing find...</p>}
      {isError && <p className="Error"> {isError} Something is wrong</p>}
    </>
  );
};
