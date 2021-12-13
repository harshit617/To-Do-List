import React, { useState,useRef, useContext, useEffect } from "react";
import { AppContext } from "./NewList";
import './style.css'


function ShowList() {
    const {list, setlist} = useContext(AppContext);
    const[searchTerm, setSearchTerm]= useState("");
    const[tempList, settempList] = useState([]);
    const[addNew, setaddNew] = useState(0);
    
    const searchRef= useRef("");
    useEffect(() => {
     
        console.log(list);
    },[]);


    function deletelist(){
        setlist([]);
        
    }


    function done(e,index) {
      e.preventDefault();
      
       let listmapped = list.map(task=> {
           return task.id === index ? {...task, completed: !task.completed} : {...task};
       });
    
       setlist(listmapped);
     
    }


    function removetask(e,index) {
        e.preventDefault();
        let alteredlist = list.filter((task) => {
            return task.id!== index;
        })
        setlist(alteredlist);
        
        
    }
  
    function handleSearch(event){
      event.preventDefault();
        let temp=event.target.value;
        
        console.log(temp);
        setSearchTerm(temp);
        if(temp!==""){
             let searchlist = list.filter((tasks) => { return tasks.task.toLowerCase().includes(temp.toLowerCase())
            });
            console.log(searchlist)
            settempList(searchlist)
            console.log(tempList);
            if(tempList.length===0){
                setaddNew(1);
            }
            else{
                setaddNew(0);
            }
           
        }
        else {
            settempList(list);
        }
        
        
    }

    function addNewItem() {
        let str= searchRef.current.value;
        console.log(str);
        setlist(list => [...list,{id:list.length, task:str, completed:false}]);
        console.log(list);
       
        setaddNew(0);
       setSearchTerm("");
       

    }

    function deleteCompleted(){
        let filtered = list.filter(task => {
            return !task.completed;
        });
        setlist(filtered);
        
    }


        return(<div>
            <h3>List Items</h3>
                <input className="input2" type="text" placeholder="search in list" value={searchTerm} onChange={handleSearch} ref={searchRef}/>
                {searchTerm ==="" ? 
                     <div className="listtype">
                         <br></br>
                     {list.map(item => {
                        return ( 
                        <ul>
                        <li key={item.index} ><input type= "checkbox"  onClick={(e) => done(e,item.id)}/>
                                      <span className={item.completed ? "strike":""}>  {item.task} </span>
                                       <button className="x" onClick={(e) => removetask(e,item.id)}>x</button></li>
                        </ul>
                        )
                     })}
                     </div>
                 : 
                 <div> 
                     {addNew===1 ? <button className="button3" onClick={ addNewItem}>Add this item</button>
                     :
                     <div className="listtype">
                    {tempList.map(item => {
                   return <ul>
                    <li key={item.index} ><input type= "checkbox" onClick={(e) => done(e,item.id)}/>
                                 <span className={item.completed ? "strike":""}>  {item.task} </span> <button className="x" onClick={(e) => removetask(e,item.id)}>x</button></li>
                    </ul>
                })}
                </div>
            }
                 </div> 
                   
                 }
            
                <br></br><br></br>
                <button className="button3" onClick={deleteCompleted}>Clear completed tasks</button> &nbsp; &nbsp;&nbsp;&nbsp; 
                <button className="button3" onClick={deletelist}>Clear List</button>
                 
          
        </div>
        )
}

export default ShowList;

