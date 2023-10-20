
// assume strict mode
1. method invocation: this is the object that the method is called on
    * someObj.someMethod() ... this within someMethod == someObj
2. regular function call: this is undefined
    * f() { console.log(this) } // undefined if called f()
3. set this explicitly:
    * call, apply ... invoke function immediately, set this using first arg
        * other args... will be passed on as args to original
    * bind... will return new function with this bound, and potentially args bound (reducing num of args)
4. arrow function: this is whatever this was when func was created
5. constructor invocation: new f() ... this is new blank instance ({})
