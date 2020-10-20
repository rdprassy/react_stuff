import React from "react";

const ImageList = (props) => {

    // const images = props.images.map((image) => <img alt={image.description} key={image.id} src={image.urls.regular} />)


    // shorter way

    const images = props.images.map(({description, id, urls }) => <img alt={description} key={id} src={urls.regular} />)

    console.log(props.images)
    return <div>{images}</div>
};


export default ImageList;
