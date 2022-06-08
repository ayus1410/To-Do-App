import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  
    const initialarr = localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):
    [];
    const [task , settask] = useState(initialarr);
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    console.log(title);

    const submithandler = (e) => {
        e.preventDefault();
        settask([...task , { title , description}]);
    }

    const deletetask = (index) => {
        const filteredarr = task.filter((val , i) => {
            return (i !== index);
        })
        settask(filteredarr);
    };

    useEffect(() => {
        localStorage.setItem("task" , JSON.stringify(task));
    } , [task]);

    return(
        <div className="container">
            <h1>To Do</h1>
            <form onSubmit={submithandler}>
                <input 
                type="text" 
                placeholder="Title" 
                value = {title}  
                onChange = {(e) => setTitle(e.target.value)}
                />
                <textarea 
                placeholder="Description" 
                value = {description} 
                onChange = {(e) => setDescription(e.target.value)}
                ></textarea>
                <button type="submit">ADD</button>
            </form>
            {task.map((item , index) =>(
                <Task key={index} title={item.title} 
                description={item.description} 
                deletetask = {deletetask}
                index = {index}
                />
            ))}
        </div>
    );
}

export default Home;