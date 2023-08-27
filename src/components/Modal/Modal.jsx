// import PropTypes from 'prop-types';

export const Modal = ({ largeImageURL, tags }) => {

  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};
