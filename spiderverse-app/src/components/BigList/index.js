import React from "react";

export default function BigList(props){



const list = props.listData;
const images = list.map(image => {
  const path = image.thumbnail.path;
  const ext = image.thumbnail.extension;
  return (
    <div key= {image.id}>
      <h2>{image.name}</h2>
      <img className = "listImg" src={`${path}.${ext}`} />
      {/* <h3>First Appearence:{image.name}</h3>*/}
    </div>
      )
})
return (
  <div>
  {images}
  </div>
)


}
