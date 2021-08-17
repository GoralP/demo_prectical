import React from "react";
import GoogleLogin from "react-google-login";

const Glogin = () => {
  return (
    <div>
      <GoogleLogin
        clientId="570994484809-68tfn841n71kmq07l0im0r2t61vo6vkv.apps.googleusercontent.com"
        buttonText="Login with Google"
        // onSuccess={responseGoogle}
        // onFailure={responseGoogle}
        // cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Glogin;
