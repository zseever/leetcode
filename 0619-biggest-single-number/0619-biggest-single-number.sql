# Write your MySQL query statement below
WITH NUMTABLE AS (
SELECT num,
    COUNT(num) as cnt,
    case when (COUNT(num) > 1) THEN null
        else num
        end as result
FROM MyNumbers
GROUP BY NUM
ORDER BY cnt ASC, num DESC
)
SELECT result as num
FROM NUMTABLE
LIMIT 1