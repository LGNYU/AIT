http is stateless

it's useful to maintain state between requests and response

* good to remember that u logged in already
* persist ur shopping cart after consecutive visits
* tracking / analytics 

one way to identify repeat clients AND associate some state / data with them is to use sessions

maybe data is stored on server
on client... id (key) to unlock that data on server for that client


server
=========
session_store = {
    123: {cart: [....]},
    9: {cart: [....]},
    200: {cart: [....]}
}

client
=========
sid=123

when client makes request, go ahead and send sid


client will send this through Cookie header


HTTP/1.1 200 OK 
Set-Cookie: sid=123;option1;option2
Set-Cookie: color=blue

Cookie options

* HttpOnly --> can't read cookies w/ client side js
* Secure ---> don't send cookies unless encrypted connection (tls/ssl https)
* SameSite --> dictates when 2 send cookies when going to different site
    * strict --> only send cookies on same site
    * lax --> (default) user navigation, send cookies
    * none --> cookies are sent even on background requests (xhr, fetch)
* Expires, Max-Age ... how long will cookie last
* domain/path



GET /index.html HTTP/1.1
Cookie: sid=123


server will send Set-Cookie headers
browser will most of the time send back cookies to site that set them using the Cookie header




























