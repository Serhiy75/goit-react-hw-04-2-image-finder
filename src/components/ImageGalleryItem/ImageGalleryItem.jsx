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
// getSearchedImages = async () => {
//         this.setState({ isLoading: true });
//         try {
//             const data = await fetchImages(this.props.query, this.state.page);
//             this.setState( prev => ({ images: [...prev.images, ...data.hits] }));
//             if (this.state.page * 12 < data.totalHits) {
//                 this.setState(() => ({ loadMore: true }));
//             } else {
//                 this.setState(() => ({ loadMore: false }));
//             }
//         } catch (error) {
//             this.setState({ error: error.message });
//         } finally {
//             this.setState({ isLoading: false });
//         }
