import React from "react";

export default function createASpider(){
  return(
    <form label="spiderForm" className = "spiderForm" >
      <input label = "Name" className = "spiderName" onSubmit = {this.handleChange} />
      <select type = "option" value = "gender">
        <option>Male</option>
        <option>Female</option>
        <option>Alternative</option>
      </select>
    </form>
  )
}
