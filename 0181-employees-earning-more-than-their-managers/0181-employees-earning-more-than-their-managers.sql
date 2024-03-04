# Write your MySQL query statement below
SELECT emp.name AS Employee
FROM Employee emp
    INNER JOIN Employee man ON (emp.managerId = man.id)
WHERE emp.salary > man.salary
