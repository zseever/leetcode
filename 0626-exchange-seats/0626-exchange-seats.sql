# Write your MySQL query statement below
SELECT 
    CASE
        WHEN id % 2 != 0 AND id = (select id FROM Seat ORDER BY id DESC LIMIT 1) THEN id
        WHEN id % 2 = 0 THEN id-1
        WHEN id % 2 != 0 THEN id+1
        END AS id,
    student
FROM Seat
ORDER BY id ASC