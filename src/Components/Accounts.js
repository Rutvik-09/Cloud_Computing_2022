import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import React, { createContext } from "react";
import UserPool from "./UserPool";
import { useNavigate } from "react-router-dom";

const AccountContext = createContext();

const Account = (props) => {
  const getSession = async () => {
    await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject();
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });
  };

  const authenticate = async (Username, Password) =>
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username,
        Pool: UserPool,
      });

      const authDetails = new AuthenticationDetails({
        Username,
        Password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("onSucess: ", data);
          resolve(data);
        },

        onFailure: (err) => {
          console.log("onFailure: ", err);
          reject(err);
        },

        newPasswordRequired: (data) => {
          console.log("newPasswordRequired: ", data);
          resolve(data);
        },
      });
    });

  const navigate = useNavigate();

  const logout = () => {
    const user = UserPool.getCurrentUser();
    if (user) {
      user.signOut();
      navigate("/login", { replace: true });
    }
  };

  return (
    <AccountContext.Provider
      value={{
        authenticate,
        getSession,
        logout,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
