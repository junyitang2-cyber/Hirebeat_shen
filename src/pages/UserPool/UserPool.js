import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-west-2_7uIxcYCEz",
  ClientId: "61oea52b20g5d19tb8idg09v21"
}

export default new CognitoUserPool(poolData)
