import { createContext, useState, useEffect } from "react";
const AppContext = createContext();

const peopleFromLocalStorage = JSON.parse(localStorage.getItem('persons'));

const AppProvider = ({ children }) => {


  


  const [values, setvalues] = useState(peopleFromLocalStorage)
  let localdata=values;
  

  const url = 'https://reqres.in/api/users?page=1'
    const fetchData = async () => {
      let response = await fetch(url);
      let items = await response.json();

      let data = items.data;
      setvalues(data);
      localStorage.setItem('persons', JSON.stringify(values))
    }
  useEffect(() => {

    localStorage.setItem('persons', JSON.stringify(localdata))
}, [values]);

 

 const onref=()=>{

  fetchData();
  
 }



  

  const ondelete=(id)=>{
    let data=values.filter(item=>item.id !==id)
    setvalues(data)
   
  }
  return <AppContext.Provider value={
    {
      values,
      ondelete,
      onref
    }} >{children}</AppContext.Provider>


}

export { AppContext, AppProvider }

