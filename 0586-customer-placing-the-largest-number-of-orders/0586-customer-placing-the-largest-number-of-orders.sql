# Write your MySQL query statement below

WITH customer_data AS (
SELECT customer_number,
    count(DISTINCT order_number) AS orders
FROM Orders
GROUP BY customer_number
)
SELECT customer_number
FROM customer_data
ORDER BY orders DESC
LIMIT 1