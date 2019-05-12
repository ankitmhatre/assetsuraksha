# Assetsuraksha

[React on Static hosting](https://medium.com/@serverlessguru/deploy-reactjs-app-with-s3-static-hosting-f640cb49d7e6)

## user/login POST
##### Request 

* Header 
1. Content-Type:application/json
* Body  {
"email" : ..email..,
"password" : ..password..
}

##### Response

* Body {"token" : ..token.., "message": ..message.., "code": ..code..}


## user/signup POST
##### Request 

* Header 
1. Content-Type:application/json
* Body  {
"email" : ..email..,
"password" : ..password..
}

##### Response

* Body {"token" : ..token.., "message": ..message.., "code": ..code..}