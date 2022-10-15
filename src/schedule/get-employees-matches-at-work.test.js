const {
  getEmployeesMatchesAtWork,
  getEmployeesAndScheduleArrayOfStrings,
  isMatchInTimes,
  getCountOfMatches,
  getAllEmployeesCombinationsWithNumberOfMatches,
} = require('./get-employees-matches-at-work')
const Employee = require('../employee/employee-model')

describe('getEmployeesMatchesAtWork', () => {
  test('Should return RENE-ASTRID: 2 RENE-ANDRES: 3 ASTRID-ANDRES: 2', () => {
    const employeesAndScheduleString = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
    ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
    ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

    expect(getEmployeesMatchesAtWork(employeesAndScheduleString)).toBe(
      `RENE-ASTRID: 2\nRENE-ANDRES: 2\nASTRID-ANDRES: 3`
    )
  })

  test('Should return RENE-ASTRID: 3', () => {
    const employeesAndScheduleString = `RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00
    ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

    expect(getEmployeesMatchesAtWork(employeesAndScheduleString)).toBe(
      `RENE-ASTRID: 3`
    )
  })
})

describe('getEmployeesAndScheduleArrayOfStrings', () => {
  test('Should return array with strings of employees and schedule', () => {
    expect(
      getEmployeesAndScheduleArrayOfStrings(`RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
    ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
    ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`)
    ).toEqual([
      'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00',
      'ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00',
      'ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00',
    ])
  })
})

describe('getAllEmployeesCombinationsWithNumberOfMatches', () => {
  test("Should return array ['RENE-ASTRID: 2', 'RENE-ANDRES: 2', 'ASTRID-ANDRES: 3']", () => {
    const employeesAndSchedule = [
      new Employee(
        'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00'
      ),
      new Employee('ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'),
      new Employee('ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'),
    ]
    expect(
      getAllEmployeesCombinationsWithNumberOfMatches(employeesAndSchedule)
    ).toEqual(['RENE-ASTRID: 2', 'RENE-ANDRES: 2', 'ASTRID-ANDRES: 3'])
  })
})

describe('getCountOfMatches', () => {
  test('Should return 3', () => {
    expect(
      getCountOfMatches(
        [
          {
            day: 'MO',
            startHour: 10,
            startMinute: 0,
            endHour: 12,
            endMinute: 0,
          },
          {
            day: 'TH',
            startHour: 12,
            startMinute: 0,
            endHour: 14,
            endMinute: 0,
          },
          {
            day: 'SU',
            startHour: 20,
            startMinute: 0,
            endHour: 21,
            endMinute: 0,
          },
        ],
        [
          {
            day: 'MO',
            startHour: 10,
            startMinute: 0,
            endHour: 12,
            endMinute: 0,
          },
          {
            day: 'TH',
            startHour: 12,
            startMinute: 0,
            endHour: 14,
            endMinute: 0,
          },
          {
            day: 'SU',
            startHour: 20,
            startMinute: 0,
            endHour: 21,
            endMinute: 0,
          },
        ]
      )
    ).toBe(3)
  })
  test('Should return 0', () => {
    expect(
      getCountOfMatches(
        [
          {
            day: 'MO',
            startHour: 10,
            startMinute: 0,
            endHour: 12,
            endMinute: 0,
          },
        ],
        [
          {
            day: 'MO',
            startHour: 13,
            startMinute: 0,
            endHour: 17,
            endMinute: 0,
          },
        ]
      )
    ).toBe(0)
  })
  test('Should return 1', () => {
    expect(
      getCountOfMatches(
        [
          {
            day: 'TU',
            startHour: 10,
            startMinute: 0,
            endHour: 12,
            endMinute: 0,
          },
          {
            day: 'TH',
            startHour: 1,
            startMinute: 0,
            endHour: 3,
            endMinute: 0,
          },
          {
            day: 'SA',
            startHour: 14,
            startMinute: 0,
            endHour: 18,
            endMinute: 0,
          },
          {
            day: 'SU',
            startHour: 20,
            startMinute: 0,
            endHour: 21,
            endMinute: 0,
          },
        ],
        [
          {
            day: 'TH',
            startHour: 12,
            startMinute: 0,
            endHour: 14,
            endMinute: 0,
          },
          {
            day: 'SU',
            startHour: 19,
            startMinute: 0,
            endHour: 21,
            endMinute: 0,
          },
        ]
      )
    ).toBe(1)
  })
})

describe('isMatchInTimes', () => {
  test('Should return true', () => {
    expect(
      isMatchInTimes(
        { startHour: 10, startMinute: 0, endHour: 12, endMinute: 0 },
        { startHour: 11, startMinute: 0, endHour: 13, endMinute: 0 }
      )
    ).toBe(true)
  })
  test('Should return true', () => {
    expect(
      isMatchInTimes(
        { startHour: 10, startMinute: 0, endHour: 12, endMinute: 0 },
        { startHour: 7, startMinute: 0, endHour: 11, endMinute: 0 }
      )
    ).toBe(true)
  })
  test('Should return true', () => {
    expect(
      isMatchInTimes(
        { startHour: 9, startMinute: 0, endHour: 10, endMinute: 0 },
        { startHour: 8, startMinute: 0, endHour: 15, endMinute: 0 }
      )
    ).toBe(true)
  })
  test('Should return true', () => {
    expect(
      isMatchInTimes(
        { startHour: 12, startMinute: 0, endHour: 18, endMinute: 0 },
        { startHour: 14, startMinute: 0, endHour: 15, endMinute: 0 }
      )
    ).toBe(true)
  })
  test('Should return false', () => {
    expect(
      isMatchInTimes(
        { startHour: 10, startMinute: 0, endHour: 14, endMinute: 0 },
        { startHour: 15, startMinute: 0, endHour: 18, endMinute: 0 }
      )
    ).toBe(false)
  })
  test('Should return false', () => {
    expect(
      isMatchInTimes(
        { startHour: 14, startMinute: 0, endHour: 16, endMinute: 0 },
        { startHour: 1, startMinute: 0, endHour: 2, endMinute: 0 }
      )
    ).toBe(false)
  })
  test('Should return false', () => {
    expect(
      isMatchInTimes(
        { startHour: 14, startMinute: 15, endHour: 16, endMinute: 15 },
        { startHour: 16, startMinute: 30, endHour: 18, endMinute: 20 }
      )
    ).toBe(false)
  })
  test('Should return false', () => {
    expect(
      isMatchInTimes(
        { startHour: 8, startMinute: 45, endHour: 16, endMinute: 0 },
        { startHour: 2, startMinute: 10, endHour: 8, endMinute: 0 }
      )
    ).toBe(false)
  })
  test('Should return true', () => {
    expect(
      isMatchInTimes(
        { startHour: 14, startMinute: 0, endHour: 16, endMinute: 40 },
        { startHour: 16, startMinute: 30, endHour: 18, endMinute: 0 }
      )
    ).toBe(true)
  })
  test('Should return true', () => {
    expect(
      isMatchInTimes(
        { startHour: 14, startMinute: 20, endHour: 16, endMinute: 40 },
        { startHour: 8, startMinute: 30, endHour: 14, endMinute: 50 }
      )
    ).toBe(true)
  })
  test('Should return true', () => {
    expect(
      isMatchInTimes(
        { startHour: 14, startMinute: 20, endHour: 16, endMinute: 40 },
        { startHour: 14, startMinute: 20, endHour: 16, endMinute: 40 }
      )
    ).toBe(true)
  })
  test('Should return true', () => {
    expect(
      isMatchInTimes(
        { startHour: 14, startMinute: 20, endHour: 14, endMinute: 50 },
        { startHour: 14, startMinute: 10, endHour: 14, endMinute: 30 }
      )
    ).toBe(true)
  })
  test('Should return false', () => {
    expect(
      isMatchInTimes(
        { startHour: 14, startMinute: 10, endHour: 14, endMinute: 20 },
        { startHour: 14, startMinute: 30, endHour: 14, endMinute: 50 }
      )
    ).toBe(false)
  })
})
