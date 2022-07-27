import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Accounts";

export default () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setStatus(true);
    });
  }, []);

  return (
    <div>
      {status ? (
        <div>
          <h3>You are logged in!!</h3>
          <Button onClick={logout}>Logout</Button>
        </div>
      ) : (
        "Please login first"
      )}
    </div>
  );
};
