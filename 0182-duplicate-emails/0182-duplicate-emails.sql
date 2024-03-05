# Write your MySQL query statement below
WITH SUMTABLE AS (
SELECT DISTINCT email,
 COUNT(email) AS occurence
FROM Person
GROUP BY email
)
SELECT email
FROM SUMTABLE
WHERE occurence > 1