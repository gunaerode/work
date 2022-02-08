### MongoDB Task 1

---

#### Questions

```
Find all the information about each products
Find the product price which are between 400 to 800
Find the product price which are not between 400 to 600
List the four product which are grater than 500 in price
Find the product name and product material of each products
Find the product with a row id of 10
Find only the product name and product material
Find all products which contain the value of soft in product material
Find products which contain product color indigo  and product price 492.00
Delete the products which product price value are same
```

---

#### Answers

---

- Find all the information about each products

  ```
    db.products.find();
  ```

- Find the product price which are between 400 to 800

  ```
    db.products.find({$and: [{product_price: {$gt: 400}}, {product_price: {$lt: 800}}]});
  ```

- Find the product price which are not between 400 to 600

  ```
    db.products.find({$or: [{product_price: {$lt: 400}}, {product_price: {$gt: 600}}]});
  ```

- List the four product which are grater than 500 in price

  ```
    db.products.find({product_price: {$gt: 500}}).limit(4)
  ```

- Find the product name and product material of each products

  ```
    db.products.find({$and: [{product_name: {$exists: true}}, {product_material: {$exists: true}}]}, {product_name: 1, product_material: 1, _id: 0});
  ```

- Find the product with a row id of 10

  ```
    db.products.find({id: '10'});
  ```

- Find only the product name and product material

  ```
    db.products.find({$and: [{product_name: 'Generic Wooden Pizza'}, {product_material: 'Frozen'}]}, {product_name: 1, product_material: 1, _id: 0});
  ```

- Find all products which contain the value of soft in product material

  ```
    db.products.find({product_material: /.*soft.*/i});
  ```

- Find products which contain product color indigo and product price 492.00

  ```
    db.products.find({$and: [{product_color: {$eq: 'indigo'}}, {product_price: {$eq:  492.00}}]});
  ```

- Delete the products which product price value are same

  ```
    db.products.deleteMany({product_price: 492});
  ```
