const fs = require('fs')

const {
  getEmployeesMatchesAtWork,
} = require('./schedule/get-employees-matches-at-work')

const { readFileSync } = fs

const path = 'data.txt'

const employeesAndScheduleString = readFileSync(path, 'utf8')
console.log('INPUT:');
console.log(employeesAndScheduleString);
const employeesMatchesAtWork = getEmployeesMatchesAtWork(
  employeesAndScheduleString
)
console.log('\nOUTPUT:');
console.log(employeesMatchesAtWork);
