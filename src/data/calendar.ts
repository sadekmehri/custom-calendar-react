export type TCalendarData = {
  id: number
  startDate: Date
  events: CalendarEvent[]
}

type CalendarEvent = {
  id: string
  title: string
  color: string
}

export const calendarData: TCalendarData[] = [
  {
    id: 1,
    startDate: new Date('2023-10-12T09:00:00'),
    events: [
      { id: 'event-1', title: 'Meeting', color: '#FF5733' },
      { id: 'event-2', title: 'Lunch', color: '#33FF57' },
      { id: 'event-3', title: 'Presentation', color: '#5733FF' },
      { id: 'event-4', title: 'Conference Call', color: '#FF33E6' },
    ],
  },
  {
    id: 2,
    startDate: new Date('2023-10-13T14:30:00'),
    events: [{ id: 'event-5', title: 'Presentation', color: '#5733FF' }],
  },
  {
    id: 3,
    startDate: new Date('2023-10-14T10:00:00'),
    events: [
      { id: 'event-6', title: 'Conference Call', color: '#FF33E6' },
      { id: 'event-7', title: 'Workshop', color: '#33E6FF' },
      { id: 'event-8', title: 'Meeting', color: '#FF5733' },
      { id: 'event-9', title: 'Lunch', color: '#33FF57' },
    ],
  },
  {
    id: 4,
    startDate: new Date('2023-10-15T16:00:00'),
    events: [{ id: 'event-10', title: 'Interview', color: '#FF5733' }],
  },
  {
    id: 5,
    startDate: new Date('2023-10-16T12:00:00'),
    events: [
      { id: 'event-11', title: 'Meeting', color: '#FF5733' },
      { id: 'event-12', title: 'Lunch', color: '#33FF57' },
      { id: 'event-13', title: 'Presentation', color: '#5733FF' },
      { id: 'event-14', title: 'Conference Call', color: '#FF33E6' },
    ],
  },
  {
    id: 6,
    startDate: new Date('2023-10-17T09:00:00'),
    events: [
      { id: 'event-15', title: 'Meeting', color: '#FF5733' },
      { id: 'event-16', title: 'Lunch', color: '#33FF57' },
    ],
  },
  {
    id: 7,
    startDate: new Date('2023-10-18T14:30:00'),
    events: [{ id: 'event-17', title: 'Presentation', color: '#5733FF' }],
  },
  {
    id: 8,
    startDate: new Date('2023-10-19T10:00:00'),
    events: [
      { id: 'event-18', title: 'Conference Call', color: '#FF33E6' },
      { id: 'event-19', title: 'Workshop', color: '#33E6FF' },
      { id: 'event-20', title: 'Meeting', color: '#FF5733' },
      { id: 'event-21', title: 'Lunch', color: '#33FF57' },
    ],
  },
  {
    id: 9,
    startDate: new Date('2023-10-20T16:00:00'),
    events: [{ id: 'event-22', title: 'Interview', color: '#FF5733' }],
  },
  {
    id: 10,
    startDate: new Date('2023-10-21T12:00:00'),
    events: [
      { id: 'event-23', title: 'Meeting', color: '#FF5733' },
      { id: 'event-24', title: 'Lunch', color: '#33FF57' },
      { id: 'event-25', title: 'Presentation', color: '#5733FF' },
      { id: 'event-26', title: 'Conference Call', color: '#FF33E6' },
    ],
  },
  {
    id: 11,
    startDate: new Date('2023-10-22T09:00:00'),
    events: [
      { id: 'event-27', title: 'Meeting', color: '#FF5733' },
      { id: 'event-28', title: 'Lunch', color: '#33FF57' },
    ],
  },
  {
    id: 12,
    startDate: new Date('2023-10-23T14:30:00'),
    events: [{ id: 'event-29', title: 'Presentation', color: '#5733FF' }],
  },
  {
    id:13, 
    startDate: new Date('2023-10-24T10:00:00'),
    events:[
      { id: 'event-30', title: 'Conference Call', color: '#FF33E6' },
      { id: 'event-31', title: 'Workshop', color: '#33E6FF' },
      { id: 'event-32', title: 'Meeting', color: '#FF5733' },
      { id: 'event-33', title: 'Lunch', color: '#33FF57' },
    ]
  }
]
