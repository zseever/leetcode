# Write your MySQL query statement below
WITH TEMP AS (
SELECT l1.id,
    l1.num,
    count(l2.id) as 'count_nums'
FROM Logs l1
    INNER JOIN Logs l2 ON (l1.num = l2.num)
WHERE l2.id >= l1.id
    AND l1.id + 3 > l2.id
GROUP BY l1.id, l1.num
)
SELECT DISTINCT num as ConsecutiveNums
FROM TEMP
WHERE count_nums >= 3