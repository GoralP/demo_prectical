// import React from "react";

// const ContextDemo = () => {
//   return <div>Context</div>;
// };

// export default ContextDemo;

import React, { useState } from "react";
import ContextHome from "./ContextHome";
import { UserContext } from "./Context";

const ContextDemo = () => {
  let userNameInput = React.createRef();

  const initUser = {
    isLoggedIn: false,
    userName: null,
  };

  const [user, setUser] = useState(initUser);

  const login = () => {
    setUser({
      isLoggedIn: true,
      userName: userNameInput.current.value,
      logout: logout,
    });
  };

  const logout = () => {
    setUser(initUser);
  };

  return (
    <div>
      {!user.isLoggedIn && (
        <div>
          <label>UserName:</label> <br></br>
          <input type="text" ref={userNameInput}></input>
          <br></br>
          <br></br>
          <input type="button" value="LOGIN" onClick={login}></input>
          <br></br>
        </div>
      )}
      <UserContext.Provider value={{ user: user }}>
        {user.isLoggedIn && <ContextHome />}
      </UserContext.Provider>
    </div>
  );
};

export default ContextDemo;
