# Write your MySQL query statement below
WITH EXCL_IDS AS (
select DISTINCT main.pid
from Insurance main
    INNER JOIN Insurance sec ON (main.lat = sec.lat AND main.lon = sec.lon)
WHERE main.pid != sec.pid
), INCL_IDS AS (
SELECT DISTINCT main.pid
FROM Insurance main
    INNER JOIN Insurance sec ON (main.tiv_2015 = sec.tiv_2015 AND main.pid != sec.pid)
)
SELECT ROUND(SUM(tiv_2016),2) AS tiv_2016
FROM Insurance
WHERE pid NOT IN (SELECT pid FROM EXCL_IDS)
    AND pid IN (SELECT pid from INCL_IDS)