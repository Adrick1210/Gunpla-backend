# Gunpla Galaxy

### Christian Alexander

## Description
This is the backend that will store all the items, inventory, and user data.

## Links
Trello Board
- https://trello.com/b/oQuGD0QS/gunpla-galaxy?openListComposer=true

Render Deploy

## Schema
![Product](./images/schema2.png)

## ERD
![ERD](./images/erd3.png)

## Route Map

### User Capability
| Route name  | endpoint | method | Description                 |
| ----------- | -------- | ------ | --------------------------- |
| Index | /products   | GET    | Renders all products |
| Show | /products/:id   | GET    | Renders a product based on id |

### Admin Capability
| Route name  | endpoint | method | Description                 |
| ----------- | -------- | ------ | --------------------------- |
| Index | admin/products   | GET    | Renders all products |
| Create | admin/products  | POST    | Adds a product to the database |
| Update | admin/products/:id   |  PUT   | Updates a product based on id |
| Delete | admin/products/:id   | DELETE   | Removes a product from the database |