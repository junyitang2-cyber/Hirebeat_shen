import { CognitoUserPool } from "amazon-cognito-identity-js";


AWS.config.region = 'us-west-2'; // 区域
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-west-2:1500c663-49ea-4f0d-aa7d-d2a5403379db',
});
