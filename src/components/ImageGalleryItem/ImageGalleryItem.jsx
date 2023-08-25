export const ImageGalleryItem = ({ webformatURL, tags, onClick }) => {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img width="250px" src={webformatURL} alt={tags} />
    </li>
  );
};
