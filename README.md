# Node.js Task 

- Create application with Node and Express.js.
- The Application should request and take information about `/users`, their `/albumns` and `/photos` from JsonPlaceholder[^1] and place in your local Database.
- We prefer you to use Postgres as a DB, but you are free to use any relational or non-relational DB like MongoDB.
- On the other hand you must provide the `/users `REST enpoints on your backend, which will provide user list, included albumns and photos.
- Also there must be the REST endpoints for `/users`, which will accept 4 http methods:  `GET`, `POST`, `PUT`, `DELETE`
  - `GET` - must return the users list with included albumns and photos from your local DB
  - `POST` - must create the user without albumn and photo in your local DB
  - `PUT` - must update the user information depends on user id
  - `DELETE` - must remove the user from your local DB.
- Writing the code with Typescript will be a big plus. 
  
## Expectations
Document your coding process with Git and publish it on public repository in Github. At the end we will clone your code and run it on our local machines. The result in the repository must contain git history of your development process (a single commit with the complete application is not acceptable. We want to see multiple commits showing your progress), a README document on how to install and start your application, and a package.json with scripts to build and serve your application. Simple is better than complicated. Consider your application a proof-of-concept, quicker development using tools to achieve the result is better than hand crafting every line but taking 5x as long. You can use whatever resources or libraries open-source in addition (but not as a replacement) of the libraries previously mentioned. If you use a cli that writes 98% of your code, fine! If you have any questions do not hesitate to contact us. 

[^1]: https://jsonplaceholder.typicode.com/



## Notes
GET - /user?id={_id}

INSERT - /user

| Field | Value |
| - | - |
|id|3
|name|Leanne Graham
|username|Bret 3
|email|Sincere@april.biz
|address_street|Kulas Light
|address_suite|Apt. 556
|address_city|Gwenborough
|address_zipcode|92998-3874
|geo_lat|-37.3159
|geo_lng|81.1496
|phone|1-770-736-8031 x56442
|website|hildegard.org
|company_name|Romaguera-Crona
|company_catchPhrase|Multi-layered client-server neural-net
|company_bs|harness real-time e-markets

UPDATE - /user?id={_id}
  Same struct of data like INSERT, without ID

DELETE - /user?id={_id}