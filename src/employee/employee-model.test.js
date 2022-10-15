const Employee = require('./employee-model')

describe('Employee', () => {
  describe('_extractEmployeeName', () => {
    test('Should return EDUARDO', () => {
      const employee = new Employee(
        'EDUARDO=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00'
      )
      expect(employee.name).toBe('EDUARDO')
    })
    test('Should return KAREN', () => {
      const employee = new Employee(
        'KAREN=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'
      )
      expect(employee.name).toBe('KAREN')
    })
  })
  
  describe('_extractEmployeeWorkedSchedule', () => {
    test('Should return array with objects containing the day and the start and end hour and minute', () => {
      const employee = new Employee(
        'EDUARDO=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00'
      )
      expect(employee.workedSchedule).toEqual([
        {
          day: 'MO',
          startHour: 10,
          startMinute: 15,
          endHour: 12,
          endMinute: 0,
        },
        {
          day: 'TU',
          startHour: 10,
          startMinute: 0,
          endHour: 12,
          endMinute: 0,
        },
        {
          day: 'TH',
          startHour: 13,
          startMinute: 0,
          endHour: 13,
          endMinute: 15,
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
      ])
    })
    test('Should return array with objects containing the day and the start and end hour and minute', () => {
      const employee = new Employee(
        'KAREN=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'
      )
      expect(employee.workedSchedule).toEqual([
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
      ])
    })
  })
})
