import React from 'react'
import jwt_decode from "jwt-decode";
const GetUserFromJWT = (jwt)=>{
    const decodedJwt = jwt_decode(jwt);
    console.log(decodedJwt);
    return{
            email:decodedJwt["email"],
            firstName:decodedJwt["given_name"],
            lastName:decodedJwt["family_name"],
            emailVerified:decodedJwt["email_verified"],
            keycloakId:decodedJwt["sid"],
            roles:decodedJwt["realm_access"]["roles"]
        }
}

export default GetUserFromJWT
