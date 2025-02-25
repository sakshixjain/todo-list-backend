// import React, {useEffect, useState} from 'react'
// import axios from 'axios';
// function Page() {

//     const [getTodo, setGetTodo] = useState([]);

//     useEffect(()=>{
//         const fetchblog=async()=>{
//             try{
//               const response = await axios.get('http://localhost:8000/api/v1/getTodo/:id');
//                setGetTodo(response.data.data);
//               //  console.log(response.data.posts._id);
//               console.log(response.data);   
//             }catch(error){
//                 console.log(error);
//                 console.log("error aa gya");
//             }
//         }
//         fetchblog();
//     },[]);
//     // console.log(blogs.likes);


//   return (
//     <div>
//       <h1>hello jee</h1>
//       <div className="container">
//         <h2>Add To-Do</h2>
//         <input type="text" id="taskInput" placeholder="Enter a task"/>
//         <button >Add</button>
//     </div>
//     <br />
//     <br />
    
    
//     </div>
//   )
// }

// export default Page

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Page() {
    const [getTodo, setGetTodo] = useState([]);

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/getTodo');
                setGetTodo(response.data.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
                console.log("Error fetching data");
            }
        };
        fetchTodo();
    }, []);

    return (
        <div>
            <h1>To-Do List</h1>
            <div className="container">
                <h2>Add To-Do</h2>
                <input type="text" id="taskInput" placeholder="Enter a task" />
                <button>Add</button>
            </div>
            <br />
            <br />
            <div className="todo-list">
                <h2>Your To-Dos</h2>
                <ul>  
                        {getTodo.map((todo, index) => (
                         
                            <li key={index}>{todo.description}</li>
                        ))}
                    
                </ul>
            </div>
        </div>
    );
}

export default Page;