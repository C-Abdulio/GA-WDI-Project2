import React from "react";

export default function BigList(props){
  // const list = props.listData;
  // const path = list[0].thumbnail.path;
  // const ext = list[0].thumbnail.extension;
  // return(
  //   <div>
  //   {list.map(roster => (
  //     <div key ={roster.id} className="codec">
  //     <h2>{roster.name}</h2>
  //     <h3>{roster.path.ext}</h3>
  //     </div>
  //   ))}
  //   </div>
  // )

const list = props.listData;
const images = list.map(image => {
  const path = image.thumbnail.path;
  const ext = image.thumbnail.extension;
  return (
    <div key= {image.id}>
      <h3>{image.name}</h3>
      <img src={`${path}.${ext}`} />
        </div>
      )
})
return (
  <div>
  {images}
  </div>
)


}
