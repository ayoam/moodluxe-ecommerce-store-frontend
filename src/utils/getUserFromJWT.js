import React from 'react'
import jwt_decode from "jwt-decode";
const GetUserFromJWT = (jwt)=>{
    const decodedJwt = jwt_decode(jwt);
    return{
            email:decodedJwt["email"],
            firstName:decodedJwt["given_name"],
            lastName:decodedJwt["family_name"],
            emailVerified:decodedJwt["email_verified"],
            keycloakId:decodedJwt["sid"]
        }
}

export default GetUserFromJWT
