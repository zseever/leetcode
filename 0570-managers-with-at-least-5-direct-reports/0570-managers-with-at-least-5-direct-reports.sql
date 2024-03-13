# Write your MySQL query statement below
WITH managers AS (
SELECT managerId
    # COUNT(managerId) as managed
From Employee
GROUP BY 1
HAVING COUNT(managerId) > 4
)
SELECT name
FROM Employee e
    INNER JOIN managers m ON (e.id = m.managerId)