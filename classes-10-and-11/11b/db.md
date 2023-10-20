
# relational db

## representation

* tables (entities)
* rows and cols
    * rows (tuples, instances)
* intersection has value

## characteristics

* rigid
    * define columns, their types
    * also relationships between tables
    * before u insert any data
* transactions that have certain props:
    * a bunch of ops taken taken together as whole
    * atomic - if a part fails, then whole xact fails
    * consistent - db is in valid state after transaction
    * isolated - if another xact fails, then it will not affect other xacts
    * durable - if server is restarted... db remains in valid state
    * ACID compliance
* query language is STANDARD!
    * different dialect
    * main statements are same

## examples

* MySQL / MariaDB
* Oracle
* SQL Server
* postgres
* sqlite

## use cases

* general application data storage
* web app persistent storage

# document store

## representation

* a document
    * json
    * xml
* hierarchical

## characteristics

* flexible
    * u don't have to define fields and their types before using
    * perhaps docs don't have to adhere to schema
* easier to scale to horizontally

## examples

* couchdb
* mongodb
* amazon's dynamodb

## use cases

* rapid prototyping
* when u know ur data is changing
* when u know data will not adhere to fields and types
* parent-child relationship
* web application dev



# Other NoSQL

## Object database
## Graph database
## Columnar store
## Key Value


* Google Spanner
* fauna
* vector store

# MongoDB

## Why?

* it's easy to use
* query language is JavaScript
* a lot of support for node (mongodb module, mongoose, ... prisma)
* generally, easy install
    * cloud services that are free (mongdb atlas)
* mongodb + express + react + node (MERN)

## About

characteristics

* JSON (BSON)
    * strings, booleans
    * int, floats
    * object id (unique id)
* fields and values (key / value pairs)
* multiple keys and values ---> document
* multiple documents ---> collection
    * in a collection
    * docs don't have to have same fields and types of fields
* multiple collection ---> database
* multiple databases ---> mongodb dbms

usage

* client server model
* must have mongodb server running
* client can connect to server
    * cli client (mongosh... typically comes w/ installation)
    * gui client(s) ... mongodb compass, data grip, ...others
    * modules ... mongodb, mongoose, prisma
* mongosh
    * `show databases`
    * `show collections`
    * `db.collectionName.find()`: search (also `findOne`)
    * `db.collectionName.insertOne()`: add doc (also `insertMany`)
    * to start `mongosh`
        * no authentication
        * it should autoconnect to localhost
        * u can add args to connect to other server 






    


















    





