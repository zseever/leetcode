# Write your MySQL query statement below

WITH classes AS (
SELECT class,
    COUNT(DISTINCT student) as students
FROM Courses
GROUP BY class
)
SELECT class
FROM classes
WHERE students >= 5