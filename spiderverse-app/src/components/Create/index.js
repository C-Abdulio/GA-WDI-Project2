import React from "react";

export default class CreateASpider extends Component{
  spiderCheck(value){
    if(option[value === "mango"]){
      return (
        <div label="hero" className="alt">
          <h2>SPIDER-{this.handleChange}</h2>
          <h3> of Earth - </h3>
          {/* <img src = {#} className="spiderPRIDE" /> */}
        </div>
      )}
      else if (option[value === "female"]){
        return(
          <div label="hero" className="female">
            <h2>SPIDER-{this.handleChange}</h2>
            <h3> of Earth - </h3>
            {/* <img src = {#} className="spiderWOMAN" /> */}
          </div>
        )}
        else{
          <div label="hero" className="male">
            <h2>SPIDER-{this.handleChange}</h2>
            <h3> of Earth - </h3>
            {/* <img src = {#} className="spiderMAN" /> */}
          </div>
        }
    }
  };


  render(){
    return(
    <form label="spiderForm" className = "spiderForm" >
      <input label = "Name" className = "spiderName" onSubmit = {this.handleChange} />
      <select type = "option" value = "gender">
        <option value = "male">Male</option>
        <option value = "female">Female</option>
        <option value = "mango">Alternative</option>
      </select>
    </form>
    )
  }
};
