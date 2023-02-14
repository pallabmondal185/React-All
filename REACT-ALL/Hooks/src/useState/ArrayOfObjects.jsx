import React, { useState } from 'react';

const ArrayOfObjects = () => {

  const student = [
    { id: 1, name: 'ram', age: 45, phone: 8974125634 },
    { id: 2, name: 'kamal', age: 28, phone: 5423478912 },
    { id: 3, name: 'suresh', age: 31, phone: 3248712593 },
    { id: 4, name: 'sam', age: 15, phone: 9412375429 }
  ];

  const [user, setUser] = useState(student);

  const handleClick = () => {
    // setUser([
    //     {...user[0], id:5, name:'pallab'},
    //     {...user[1]},
    //     {...user[2]},     
    //     {...user[3]}    
    // ]);

    setUser((item) => {
      item[0].age = 33;
      item[1].name = 'BIMAL'
      return [...item];
    });
  }

  return (
    <>
      {/* <h3>{user[0].id},  {user[0].name},  {user[0].age},  {user[0].phone}</h3>
      <h3>{user[1].id},  {user[1].name},  {user[1].age},  {user[1].phone}</h3>
      <h3>{user[2].id},  {user[2].name},  {user[2].age},  {user[2].phone}</h3>
      <h3>{user[3].id},  {user[3].name},  {user[3].age},  {user[3].phone}</h3> */}

      {
        user.map((item) =>
          <div key={item.id} >
            <h5>{item.id} {item.name} {item.age} {item.phone}</h5>
            <hr />
          </div>
        )
      }

      <button onClick={handleClick} > change </button>
    </>
  )
}

export default ArrayOfObjects;
