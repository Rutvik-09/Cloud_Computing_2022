import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_EcXGNBfjb",
  ClientId: "5k5d1gl0sr1jd2l9osl03ssiic",
};

export default new CognitoUserPool(poolData);
