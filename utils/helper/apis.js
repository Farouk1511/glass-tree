 
 const API = "/api/"
 
 
 const signupMongoDb = async(user) => {
    const response = await fetch(`${API}/user/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      return  response.json()
 } 

 export {signupMongoDb}