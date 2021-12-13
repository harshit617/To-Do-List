import React, { useState, useRef, useEffect, createContext } from "react";
import ShowList from "./ShowList";
import './style.css';
export const AppContext = createContext(null);

function NewList() {
    
    

    const [list,setlist] = useState([])

    const inputRef= useRef(null);

    useEffect(() => {
        inputRef.current.value = "";
        inputRef.current.focus();
        console.log(list);
    },[list]);

    const additem= () => {
        
        const item = inputRef.current.value;
        setlist(list => [...list,{id:list.length, task:item, completed:false}]);
    }


        return( 
        <div className="wrapper">
            <header>TO-Do-List APP</header>
            <div>
                <input className="inputField" type="text" placeholder="Add new item" name="item" ref={inputRef}/>
                <button className="addbutton" onClick={ additem}>+</button><br></br>
                {list.length===0 ? <div><h3>No items in the list</h3></div> : 
                <AppContext.Provider value={{list, setlist}}>
                <ShowList />
                </AppContext.Provider>
}
            </div>
     
        </div>
        )
}

export default NewList;