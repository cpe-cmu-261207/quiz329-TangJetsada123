import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";
function App() {
  //add useState for all state variables
  

  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    return items;
    // ...
  }, []);
  
  useState(() =>{
    console.log("Ok ");
    
      
  })
  

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"
            //update related state based on event
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select className="input" type="text" placeholder="Please select ..">
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input className="input" type="number" placeholder="e.q 30" onChange={()=>this.useEffect}></input>
        </div>

        <button className="button is-primary is-fullwidth" onClick={()=>this.useState}>Submit</button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}
        <ItemTable name={"Bob"} gender={"Male"} age={"50"} />
        
        
        <p>Jetsada Jinaka 620612144</p>
      </div>
    </div>
  );
}

export default App;
