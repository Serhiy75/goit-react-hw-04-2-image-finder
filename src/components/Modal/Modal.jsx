import PropTypes from 'prop-types';
import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }
  handleEscape = e => {
    if (e.key === 'Escape') {
      this.props.closeModal({ src: '', alt: '' });
    }
  };
  render() {
    return (
      <div
        className="Overlay"
        onClick={evt => {
          if (evt.target === evt.currentTarget) this.props.closeModal();
        }}
      >
        <div className="Modal">
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
