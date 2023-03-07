import './App.css';
import { useState } from 'react';
import uuid from 'react-uuid';
function App() {
  const [lists,setLists]=useState([])
  const [list,setList]=useState('')

  const handleclick=value=>()=>{
     console.log(lists);
        
       setLists( lists.filter((item1)=>{if(item1.id!==value.id)
      {
        return item1
      }}))
       console.log(lists);
        
       
  }


  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
   

    <div className="input">
      <input type="text" placeholder="🖊️ Add item..." value={list} onChange={(e)=>setList(e.target.value,console.log(e.target.value))} />
      <i onClick={()=>setLists([...lists,{id:uuid(),text:list,status:false}])} className="fas fa-plus">

      </i>
    </div>
    <div className="todos">
     {
      lists.map((item)=>(
        <div className="todo">

        <div className="left">
          <input type="checkbox"   name="" id="" value={item.status} onChange={(e)=>{
            console.log(e.target.checked)
            console.log(item)
            setLists(lists.filter((item1)=>{
              if(item1.id==item.id)
              {
                item1.status=e.target.checked
              }
              return item1
            }))
          }} />
        {item.status ?  <p style={{color:"red",textDecoration:"line-through"}}>{item.text}</p>: <p style={{color:"green"}}>{item.text}</p>}
        </div>
        <div className="right">
          <i  onClick={handleclick(item)} className="fas fa-times"></i>
        </div>
        
      </div>
      )
      )
     }
    </div>
  </div>
  );
}

export default App;
