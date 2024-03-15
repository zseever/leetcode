# Write your MySQL query statement below

WITH TEMP AS (
SELECT DISTINCT c.visited_on,
    (SELECT SUM(amount) 
     FROM Customer cs 
     WHERE cs.visited_on between DATE_ADD(c.visited_on, INTERVAL -6 DAY) AND c.visited_on) AS               'amount'
FROM Customer c
WHERE c.visited_on >= DATE_ADD((SELECT MIN(visited_on) from Customer), INTERVAL 6 DAY)
)
SELECT visited_on,
    amount,
    round(amount/7,2) as 'average_amount'
FROM TEMP
