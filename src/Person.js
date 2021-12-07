import React ,{useContext} from 'react'
import { Button,TextField } from '@material-ui/core';

import { AppContext } from './Context'

function Person({first_name , last_name , id,email,avatar}) {

    const {ondelete} = useContext(AppContext);

    const styles={height:'30px',width:'30px',"border-radius":'50%'}
    const divstyles={
        height:'10vh',
        width:'100vh',
        display:'flex',
        'justify-content':'space-around',
        'align-items':'center',
        border:'1px solid grey'
    }

    console.log(first_name);
    
    return (
        <div>
           
            

            <div style={divstyles}> <img style={styles} src={avatar}/>  <div>{first_name} {last_name}</div> <p>{email}</p></div>
           

            <Button onClick={()=>ondelete(id)} color="primary">Delete</Button>


            
            
        </div>
    )
}

export default Person
