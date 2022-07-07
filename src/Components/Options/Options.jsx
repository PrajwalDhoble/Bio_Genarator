import "./Options.css"



function Options() {

  return (
    <div className="ohead">
      <div className="oheading">
           <h1>Options</h1>
      </div>
      <div  className="fbox">
        <span>
        <span>Name<input></input> </span>
        <span>Gender<select><option>Male</option> <option>Female</option></select></span>
        </span>
      </div>
    </div>
  )
}

export default Options
