import PropTypes from 'prop-types';
// import { Component } from 'react';

import { useEffect } from 'react';

export const Modal = ({ closeModal, tags, largeImageURL }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        closeModal({ src: '', alt: '' });
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeModal]);

  // export class Modal extends Component {
  //   componentDidMount() {
  //     window.addEventListener('keydown', this.handleEscape);
  //   }

  //   componentWillUnmount() {
  //     window.removeEventListener('keydown', this.handleEscape);
  //   }
  //   handleEscape = e => {
  //     if (e.key === 'Escape') {
  //       this.props.closeModal({ src: '', alt: '' });
  //     }
  //   };
  // render() {
  return (
    <div
      className="Overlay"
      onClick={evt => {
        if (evt.target === evt.currentTarget) closeModal();
      }}
    >
      <div className="Modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
