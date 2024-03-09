# Write your MySQL query statement below
SELECT score,
    dense_rank() OVER (ORDER by score DESC) as 'rank'
FROM Scores
ORDER BY score desc