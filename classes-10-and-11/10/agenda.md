AGENDA

* implement our own session middleware
* express-session
* discuss high level db, mongodb



SERVER
in a database (redis), in memory data store
key = session id
when someone (client) comes back with the sess id, we can get them their data, only their data
{
    123: {name: 'joe', cart: [...]},
    900: {name: 'someone else', cart: [...]}
}

* if client does not send an sid or sid is not in session...
    * generating the sid
    * letting the client know they should resend it


CLIENT
sid=123;foo=bar;mode=darkmode is included in almost every request to server (depending on cookie options)

we can use cookies for this

HTTP response
server tells client to save this data
Set-Cookie: mode=darkmode;HttpOnly;Max-Age=....
Set-Cookie: sid=123;secure


HTTP request
(only one header)
Cookie: mode=darkmode;sid=123


request object

* version
* method
* path
* query
* body

req.session
// behind the scenes, it will figure out if same client returning
// by examining cookies (sid / session id cookie)

req.session.cart = []
req.session.cart.push('some stuff')


1. parse cookies
2. manage the session id and the session store


1. create middleware that does above ^^^^
2. have form that remembers ur name.... and returning to site, ur name will be displayed again










































































