# Write your MySQL query statement below
WITH REQUESTS AS (
SELECT requester_id as id,
    COUNT(requester_id) as requests
FROM RequestAccepted
GROUP BY requester_id
), ACCEPTS AS (
SELECT accepter_id as id,
    COUNT(accepter_id) as accepts
FROM RequestAccepted
GROUP BY accepter_id
)
SELECT ids.id,
    (CASE WHEN requests is null THEN 0 else requests END + CASE WHEN accepts is null then 0 else accepts END) as num
FROM (
    SELECT requester_id as id
    FROM RequestAccepted
    UNION
    SELECT accepter_id as id
    FROM RequestAccepted
    ) ids
    LEFT JOIN REQUESTS r ON (ids.id = r.id)
    LEFT JOIN ACCEPTS  a ON (ids.id = a.id)
ORDER by num DESC
LIMIT 1


