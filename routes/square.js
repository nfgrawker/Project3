// Import square-connect 
const SquareConnect = require('square-connect');
const defaultClient = SquareConnect.ApiClient.instance;
// Configure Oauth2 access token for Authorizationconst 
oauth2 = defaultClient.authentications.oauth2;
oauth2.accessToken = 'sandbox-sq0atb-IMdAYGckm5q2USpFppz2Sg';