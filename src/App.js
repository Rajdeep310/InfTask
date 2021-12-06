import React ,{useState,useEffect} from 'react'
import './App.css';
import Person from './Person';

function App() {
  const [values, setvalues] = useState([])
  useEffect(() => {
    const url='https://reqres.in/api/users?page=1'
    const fetchData=async()=>{
      let response= await fetch(url);
      let items=await response.json();

      let data=items.data;
      setvalues(data);

    }

    fetchData();
  }, [])
  return (
    <div className="App">
      {values.map(item=>{
        return(
        <Person key={item.id} {...item} />
        )
      })}
    </div>
  );
}

export default App;
