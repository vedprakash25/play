import { gapi } from "gapi-script";

const initAuth = () => {
  return gapi.auth2.init({
    client_id: "YOUR_CLIENT_ID", //paste your client ID here
    scope: "https://www.googleapis.com/auth/analytics.readonly",
  });
};
