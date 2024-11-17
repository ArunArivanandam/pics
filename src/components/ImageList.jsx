import ImageShow from "./ImageShow";

function ImageList({ images }) {
  // console.log(images);
  return (
    <div>
      {images.map((image) => (
        <ImageShow key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageList;
