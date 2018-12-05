import React from "react";

const UserSetting = props => {
  console.log(props.userinfo);
  const user = props.userinfo;
  return (
    <ul key={user._id}>
      <li ><strong>{user.name}</strong></li>
      <li ><strong>{user.contactName}</strong></li>
      <li ><strong>{user.contactNumber}</strong></li>
      <li ><strong>{user.imageLink}</strong></li>
      <li ><strong>{user.website}</strong></li>
      <li ><strong>{user.description}</strong></li>
      
    </ul>
  );
};
export default UserSetting;
