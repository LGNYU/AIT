# AGENDA

* either review form handling
* sessions
* maybe discuss mongodb
* last 15 minutes is quiz

http is stateless

state

* maintaining authentication w/ out having to relogin
* recognizing that a client has come back
    * shopping cart
    * user analytics


// server
{
    23: {shoppingCart: ...., username: ....}
    32r235235: ....
}
^
| sessid will be included in every request to same server
|
// client

cookies smol data on the client
Cookie header ---> all cookies will be sent via this header on every request to the server that set the cookies on the client

sessid=23


GET /foo HTTP/1.1
Cookie: sessid=23;asdfasdf=asdfasdf;foo=bar




cookie

* smol piece of data stored on client
* server tells the client to store some data (that's how cookie is created)
* every subsequent req to that server will have those cookies
* all done through headers

HTTP response

* Set-Cookie
* multiple set cookie headers allowed
* Set-Cookie: sessid=123123;option1;option2

options

* httpOnly <--- access to cookie data is not allowed via frontend js
* secure <--- only send cookies if on https (encrypted tls/ssl)
* sameSite <---- specifies when cookies should be sent (clicking on link, maybe yes! ...background request like fetch or xhr, maybe no)
* expires
* domain
* path



HTTP response

* Cookie: foo=bar;baz=qux














1. data on server
2. key will access data for specific client
3. key will be on client
4. every request that the client makes will have that key or id

















