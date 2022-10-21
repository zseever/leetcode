/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a,b) => a-b)
    console.log(salary)
    salary.shift()
    salary.pop()
    let totalSalary = 0
    salary.forEach(empSalary => {
        totalSalary += empSalary
    })
    let avgSalary = totalSalary/salary.length
    return avgSalary
};