# Write your MySQL query statement below

WITH TABLEDATA AS (
SELECT customer_id,
    count(DISTINCT product_key) cust_products,
    (SELECT COUNT(DISTINCT product_key) from Product) as total_products
from Customer
GROUP BY customer_id
)
SELECT customer_id
FROM TABLEDATA
WHERE cust_products = total_products
    