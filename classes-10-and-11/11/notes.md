# AGENDA

* databases in general
* mongodb
    * overview wat is it
    * cli client
* async and await / promises
* working with libs
    * using libraries... use basic mongodb lib
    * mongoose
* integrating w/ express




* possible to store in files using some well known format (json, xml, csv)
* store on file system, but w/ format and file system abstracted - maybe using a database!
^^^^^^^^
* cloud - firebase, dynamodb


categories

1. relational (tables)
2. nosql (not relational)
(3.) hybrid

nosql

* document <---------
* key/value
* graph database
* object
* columnar

## relational

relation == table
stores data in tables
tables may link to each other ... to form relationships between tables


* rows and cols
* intersection of rows and cols are value
* table --> collection of rows (tuple or an instance)
* maybe table is type????
* rigid in terms of creating tables, querying, etc.
* define columns, types of columns, any other constraints (relationships) before you can add any data at all

* mysql / mariadb
* sqlite
* postgres
* sql server
* oracle

joe
v
251 mercer
ny
ny



first last address      city state
joe   v    251 mercer   ny   ny
asdf  a    251 mercer   ny   ny
foo   g    123 1stave   ny   ny

person          location
=====           ====
first last   loc_id| loc_id address      city state
joe   v      1     | 1      251 mercer   ny   ny
asdf  a      1     | 
foo   g      2     | 2       123 1st ave   ny   ny

pk - unique id for a row
fk - references a row in another table by a value in a col

transaction

* set of ops taken as one
* transactions for relational db
    * atomic --> all or nothing
    * consistent --> once a transaction finishes db will still be in a valid state
    * isolated --> if one transaction fails, other transacts aren't affected
    * durable --> will persist through on off cycles
ACID transactions

use case

* web application
* general purpose data stores (browser uses sqlite)

query lang: SQL, but dialects


document

* data stored in documents (xml, json, etc.)
    * data is nested
    * hierarchical
* do not require u to define fields and types of values in those fields
* flexible
* more easily scalable horizontally
* usually document stores are not acid compliant / only fulfill some of those props

examples

* mongodb
* couchdb
* dynamo (amazon's cloud doc store)

use cases

* rapid prototyping
* when u know ur data will change
* json is good model for your data


## k/v store

redis
memcache

caching
session stores

## graph db

data stored in nodes and edges of a graph

neo4j

any data where graph is the appropriate model

google spanner - scalability of nosql + acid compliance
fauna
vector store


which one? mongodb

1. mern (part of stack of techs)
2. query lang is js
3. much support for js integration
4. easy to use <----

mongodb

* document store
* json (bson... binary format for json data)
    * data is in field / key and value pairs
    * collection of k/v pairs is a document (object)
    * multiple documents can be stored in a collection
        * docs w/ diff fields and types can go in same collection
    * multiple collections in a database
    * multiple databases in mongodb
mongodb --> databases --> collection --> docs --> k/v
* a lot like js object literals
* there _are_ types
    * types are inferred
    * strings, integers
    * ObjectID <----- unique id for each document
    * `_id`
* mongodb is flexible
    * e.g. u can insert data where collection doesn't exist
    * doesn't even have auth by default

mongodb follows server client arch

* a running instance of mongodb as your server
* client that connects to server
    1. `mongosh` - cli client
    2. mongodb compass, datagrip - graphical client
    3. make ur own using a library (if u want to have mongodb as a db in your web app)
        * `mongodb` - module direct from MongoDB, simple interface to db (looks like the cli client)
        * `mongoose` - ... create class like constructor for your documents... that automatically checks for onstraints ... ODM (object document mapper)



    
























































