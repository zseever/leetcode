# Write your MySQL query statement below
# SET @products := (SELECT COUNT(DISTINCT product_key) from Product);

WITH TABLEDATA AS (
SELECT customer_id,
    count(DISTINCT product_key) cust_products,
    (SELECT COUNT(DISTINCT product_key) from Product) as total_products
    # @products as product_count,
    # CASE WHEN cust_products = product_count THEN 1 ELSE 0 END as bought_all
from Customer
GROUP BY customer_id
)
SELECT customer_id
FROM TABLEDATA
WHERE cust_products = total_products
    