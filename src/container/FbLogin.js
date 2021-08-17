import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const FbLogin = () => {
  const [accessToken, setAccessToken] = useState("");
  const responseFacebook = (res) => {
    console.log(res);
    setAccessToken(res.accessToken);
  };
  return (
    <div>
      {accessToken}
      <FacebookLogin
        appId="1721875691274671"
        autoLoad={false}
        fields="name,email,pyicture"
        callback={responseFacebook}
      />
    </div>
  );
};

export default FbLogin;
