import { readFileSync } from 'fs'

const path = 'data.txt'

const employeesAndSchedule = readFileSync(path, 'utf8')
console.log(employeesAndSchedule)
