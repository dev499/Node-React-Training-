import React from "react";

const Imagelist = (props) => {
  console.log(props);
  const Image = props.Image.map((images) => {
    return (
      <div>
        <img src={images.webformatURL} alt="images" />
        <li key={images.id}>image-{images.id}</li>
      </div>
    );
  });     
  return <div>{Image}</div>;
};

export default Imagelist;
