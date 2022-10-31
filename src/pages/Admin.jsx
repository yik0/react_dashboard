import React, { useState, useEffect } from 'react';
import { Header } from '../components';
import axios from 'axios';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const jsonURL= 'https://jsonplaceholder.typicode.com/users';

   useEffect(()=>{
       const fetchData = async ()=>{
           const users_data = await axios(`${jsonURL}`);
           setUsers(users_data);
           console.log(users_data.data);
       };
       fetchData();
    },[setUsers])

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Dashboard" title="Admin Page" />

      <ul>      
      {(users.length !== 0)
        ?
        users.data.map(item => (
          <li key={item.id}>
          <span>{item.name}</span>
          </li>
          ))
          
          : <h1>Sorry info not found</h1>
        }
        </ul>
    </div>
  )
}

export default Admin