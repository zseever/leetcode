# Write your MySQL query statement below
WITH RANKDATA AS (
select d.name as Department, e.name as Employee, salary as Salary,
    dense_rank() OVER (PARTITION by e.departmentId ORDER BY Salary DESC) as 'rank'
from employee e
    inner join department d ON (e.departmentId = d.id)
)
SELECT Department, Employee, Salary
FROM RANKDATA
WHERE RANKDATA.rank = 1