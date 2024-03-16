# Write your MySQL query statement below
SELECT user_id as 'buyer_id',
    join_date,
    CASE 
        WHEN (COUNT(order_id) > 0) 
        THEN COUNT(order_id) 
        ELSE 0 
        END AS orders_in_2019
FROM Users u
    LEFT JOIN Orders o ON (u.user_id = o.buyer_id AND YEAR(o.order_date) = 2019)
GROUP BY user_id, join_date

