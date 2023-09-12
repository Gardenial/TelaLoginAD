// Config object to be passed to Msal on creation
const msalConfig = {
    auth: {
      clientId: "Enter_the_Application_Id_Here",
      authority: "Enter_the_Cloud_Instance_Id_Here/Enter_the_Tenant_Info_Here",
      redirectUri: "Enter_the_Redirect_Uri_Here",
    },
    cache: {
      cacheLocation: "sessionStorage", // Aonde o Cache vai ser armazenado
      storeAuthStateInCookie: false, // Se tiver dando problema, mude para True
    }
  };