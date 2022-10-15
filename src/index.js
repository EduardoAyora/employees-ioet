const fs = require('fs')
const { readFileSync } = fs

const path = 'data.txt'

const employeesAndScheduleString = readFileSync(path, 'utf8')
