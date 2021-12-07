import React ,{useContext} from 'react'
import './App.css';
import Person from './Person';

import { AppContext } from './Context'

function App() {

  const {values,onref} = useContext(AppContext);
  
  return (
    <div className="App">
      <h2>All people</h2>
      {values.map(item=>{
        return(
        <Person key={item.id} {...item} />
        )
      })}

      {values.length===0 ? <div>No people left . Please Refresh</div> : <></>}

<button onClick={onref} >Refresh</button>
    </div>
  );
}

export default App;
