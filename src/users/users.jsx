import React from "react";
import "./users.css";

function User({ user }) {
  return (
    
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
     
    )
  
}

export default User
