# Write your MySQL query statement below
SELECT name,
    SUM(CASE WHEN distance is null then 0 else distance end) as travelled_distance 
FROM Users u
    LEFT JOIN Rides r ON (u.id = r.user_id)
GROUP BY name, u.id
ORDER BY travelled_distance DESC, name ASC