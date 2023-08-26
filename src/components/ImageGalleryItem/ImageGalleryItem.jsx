export const ImageGalleryItem = ({ webformatURL, tags, onClick }) => {
  return (
    <li className="ImageGalleryItemimage " onClick={onClick}>
      <img
        className="ImageGalleryItemimage "
        // width="250px"
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};
