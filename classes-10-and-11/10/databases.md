2 broad categories

1. relational (tables)
2. nosql (documents that are hierarchical, tree / graph based databases, vectori, k v pairs)
(3) y not have both

relational databases

* MariaDB
* MySQL
* SQLite
* Postgres
* Oracle
* MS SQL Server

tabular data is somewhat intuitive
rigid in terms of constraints
allows for relationships between tables (constraints that enforce these relationships)

person
====
first name
last name
address_id ---> must exist in the location table


location
====
address_id
street
city
state


non-relational

* document
    * MongoDB ---> but in some sort of doc (xml, json in mongodb's case)
    * DynamoDB
    * Couch...
* graph
* columnar

1. ---->>>>>mongodb + express + react + node
2. query lang is javascript

movement back to relational (prisma sqlize ... to interface w/ relational db)












