import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    isModalShow: false,
    largeImageURL: '',
    tags: '',
  };

  handleToggle = (largeImageURL, tags) => {
    this.setState(prevState => ({
      isModalShow: !prevState.isModalShow,
    }));

    this.largeImageURL = largeImageURL;
    this.tags = tags;
  };

  render() {
    const { hits } = this.props;
    return (
      <>
        <ul className="ImageGallery">
          {hits.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              onClick={() => this.handleToggle(largeImageURL, tags)}
              webformatURL={webformatURL}
              tags={tags}
              key={id}
            />
          ))}
        </ul>
        {this.state.isModalShow && (
          <Modal
            largeImageURL={this.largeImageURL}
            tags={this.tags}
            closeModal={this.handleToggle}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
};
