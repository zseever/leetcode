# Write your MySQL query statement below
WITH weight as (
SELECT *,
    SUM(weight) OVER (ORDER BY turn asc) as total_weight
FROM Queue
ORDER BY turn asc
)
SELECT person_name
FROM weight
WHERE total_weight <= 1000
ORDER BY turn desc
LIMIT 1