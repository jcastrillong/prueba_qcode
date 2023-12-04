// Informacion de la api de referencia
const sites = [
  {
    "Day": "lunes",
    "Hour": "09:15",
    "Duration": "60"
  },
  {
    "Day": "lunes",
    "Hour": "10:30",
    "Duration": "45"
  },
  {
    "Day": "lunes",
    "Hour": "12:00",
    "Duration": "90"
  },
  {
    "Day": "lunes",
    "Hour": "16:15",
    "Duration": "30"
  },
  {
    "Day": "martes",
    "Hour": "09:00",
    "Duration": "45"
  },
  {
    "Day": "martes",
    "Hour": "10:00",
    "Duration": "45"
  },
  {
    "Day": "martes",
    "Hour": "11:00",
    "Duration": "45"
  },
  {
    "Day": "martes",
    "Hour": "12:00",
    "Duration": "45"
  },
  {
    "Day": "martes",
    "Hour": "13:00",
    "Duration": "45"
  },
  {
    "Day": "martes",
    "Hour": "14:00",
    "Duration": "45"
  },
  {
    "Day": "martes",
    "Hour": "15:00",
    "Duration": "45"
  },
  {
    "Day": "martes",
    "Hour": "18:00",
    "Duration": "45"
  },
  {
    "Day": "miércoles",
    "Hour": "09:00",
    "Duration": "30"
  },
  {
    "Day": "miércoles",
    "Hour": "10:30",
    "Duration": "60"
  },
  {
    "Day": "miércoles",
    "Hour": "12:00",
    "Duration": "45"
  },
  {
    "Day": "miércoles",
    "Hour": "14:00",
    "Duration": "60"
  },
  {
    "Day": "jueves",
    "Hour": "09:00",
    "Duration": "45"
  },
  {
    "Day": "jueves",
    "Hour": "10:30",
    "Duration": "90"
  },
  {
    "Day": "jueves",
    "Hour": "12:00",
    "Duration": "30"
  },
  {
    "Day": "jueves",
    "Hour": "14:00",
    "Duration": "60"
  },
  {
    "Day": "viernes",
    "Hour": "09:00",
    "Duration": "60"
  },
  {
    "Day": "viernes",
    "Hour": "10:30",
    "Duration": "30"
  },
  {
    "Day": "viernes",
    "Hour": "12:00",
    "Duration": "60"
  },
  {
    "Day": "viernes",
    "Hour": "14:00",
    "Duration": "45"
  }
]

/* 
método que tome como parámetro el día de la semana que se desea consultar 
y devuelva el cálculo del total de espacios disponibles para ese día, teniendo 
en cuenta que la duración mínima de una cita es de 30 minutos. 
*/

const INIT_TIME = new Date('2023-01-01T09:00:00');
const FINAL_TIME = new Date('2023-01-01T17:00:00');
const MIN_DURATION = 30 * 60000;

const getAvailableSites = (day) => {
  let sitesAvailable = 0;
  let currentTime = INIT_TIME.getTime();
  let appointments = sites.filter((appointment) => appointment.Day === day);

  appointments.map((appointment) => {
    const appointmentTime = new Date(`2023-01-01T${appointment.Hour}`);
    const appointmentDuration = parseInt(appointment.Duration) * 60000;

    if (appointmentTime.getTime() <= FINAL_TIME.getTime()) {
      if (currentTime + MIN_DURATION <= appointmentTime.getTime()) {
        sitesAvailable += Math.floor((appointmentTime.getTime() - currentTime) / MIN_DURATION);
      }
      currentTime = appointmentTime.getTime() + appointmentDuration;
    }
  })

  if (currentTime + MIN_DURATION <= FINAL_TIME.getTime()) {
    sitesAvailable += Math.floor((FINAL_TIME.getTime() - currentTime) / MIN_DURATION);
  }

  return sitesAvailable;
}

/*
lunes: 6
martes: 2
miércoles: 9
jueves: 8
viernes: 9
*/

console.log("Lunes: ", getAvailableSites("lunes"))
console.log("Martes: ", getAvailableSites("martes"))
console.log("Miércoles: ", getAvailableSites("miércoles"))
console.log("Jueves: ", getAvailableSites("jueves"))
console.log("Viernes: ", getAvailableSites("viernes"))
