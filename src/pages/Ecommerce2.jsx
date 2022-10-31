import React, { useEffect } from 'react';

import { Header, Loading } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce2 = () => {
  const { users, setUsers } = useStateContext();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      setUsers(data);
      console.log(data);
    });
  },[setUsers]);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Dashboard" title="Test Dummy Data" />

      <div>
        <Loading />
      </div>
      
      <table className="table-auto">
        <thead>
          <tr>
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Contact</th>
            <th className="p-4 text-left">Website</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="p-4 text-left">{user.id}</td>
              <td className="p-4 text-left">{user.name}</td>
              <td className="p-4 text-left">{user.email}</td>
              <td className="p-4 text-left">{user.phone}</td>
              <td className="p-4 text-left">{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ecommerce2;