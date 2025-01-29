export const events = [
  {
    id: "1",
    title: "Cumpleaños del Jefe",
    notes: "Hay que comprar el pastel",
    start: new Date("2025-01-29 13:00:00"),
    end: new Date("2025-01-29 15:00:00"),
  },
  {
    id: "2",
    title: "Cumpleaños de Aarón",
    notes: "Pon alguna nota",
    start: new Date("2025-07-13 13:00:00"),
    end: new Date("2025-07-13 22:00:00"),
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
