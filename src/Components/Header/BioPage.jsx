import "./BioPage.css"
function BioPage() {


  return (
    <div>
        <div className='head'>
<b>Bio Generator</b>
    </div>
    <div className="middle">
      <div className="options">
      <h1>Options</h1>
      </div>
      <div className="option">
      <span>
        <span>Name<input></input> </span>
        <span>Gender<select><option>Male</option> <option>Female</option></select></span>
        <span><button className="random">Random Name</button></span>
        </span>
      </div>
      <div className="option">
      <span>
        <span><input type="checkbox"></input></span>
        <span>Location<input></input> </span>
        <span><button className="random">Random location</button></span>
        </span>
      </div>
      <div className="option">
      <span>
        <span><input type="checkbox"></input></span>
        <span>School<input></input> </span>
        <span><button className="random">Random School</button></span>
        </span>     
        <span>
        <span><input type="checkbox"></input></span>
        <br></br>
        <span>Major<input></input> </span>
        <span><button className="random">Random Major</button></span>
        </span>     

        </div>
      <div className="option">
      <span>
        <span><input type="checkbox"></input></span>
        <span>Occupation<input></input> </span>
        <span><button className="random">Random Occu.</button></span>
        </span>      
        </div>
      <div className="roption">
      <span>
        <span><input type="checkbox"></input></span>
        <span>Religious Background<textarea  rows = "5" cols = "60" name = "description">
        believing in God but only attends church with her grandma
         </textarea> </span>
        <span><button className="random">Random Religion</button></span>
        </span>
                </div>
      <div className="roption">
      <span>
        <span><input type="checkbox"></input></span>
        <span>Reason for meeting with Missionaries<textarea placeholder="" rows = "5" cols = "60" name = "description">
        believes in being a good person and wants to have God more in [PossessivePronoun] life but isn't sure organized religion is what [SubjectPronoun] wants
         </textarea> </span>
        <span><button className="random">Random Reason</button></span>
        </span>
      </div>
    </div>
    </div>
  
  )
}

export default BioPage
