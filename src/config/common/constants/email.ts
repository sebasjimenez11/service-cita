export const messageEmail = {
    reappointment: "Entendemos que los planes pueden cambiar. Tu cita ha sido reagendada según tu solicitud. Nos aseguraremos de que recibas la atención que necesitas en el nuevo horario. Gracias por tu comprensión.",
    confirmation: "¡Tu cita ha sido confirmada! Te esperamos en la fecha y hora programadas. Gracias por confiar en Sami para tu atención médica.",
    cancellation: "Lamentamos que hayas decidido cancelar tu cita. Si necesitas volver a programarla o si hay algo más en lo que podamos ayudarte, estamos aquí para ti.",
    medicationReminder: (userName: string, time: string) => `Hola ${userName}, este es un recordatorio para que tomes tu medicamento a las ${time}. Es importante seguir tu tratamiento para mejorar tu salud.`
}

export const buttonUrlValue = {
    reappointment: "https://sami.com/reagendar-cita",
    confirmation: "https://sami.com/confirmacion-cita",
    cancellation: "https://sami.com/reagendar-cita",
    medicationReminder: "https://sami.com/recordatorio-medicamento"
}

export const buttonTextValue = {
    reappointment: "Ver Cita Reagendada",
    confirmation: "Ver Cita Confirmada",
    cancellation: "Reagendar Cita",
    medicationReminder: "Ver Recordatorio"
}

export const titleValue = {
    reappointment: "Tu Cita Ha Sido Reagendada",
    confirmation: "¡Tu Cita Ha Sido Confirmada!",
    cancellation: "Tu Cita Ha Sido Cancelada",
    medicationReminder: "Recordatorio de Medicamento"
}

export const imgUrlValue = {
    reappointment: "Tu Cita Ha Sido Reagendada",
    confirmation: "¡Tu Cita Ha Sido Confirmada!",
    cancellation: "Tu Cita Ha Sido Cancelada",
    medicationReminder: "https://sami.com/img/recordatorio-medicamento"
}
