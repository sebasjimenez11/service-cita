import EmailDto from "../Dto/email/EmailDto";
import { messageEmail, buttonUrlValue, buttonTextValue, titleValue, imgUrlValue} from "../config/common/constants/email";

const creationEmail = (typeEmail: string, email: string, paciente?:string, time?:string) => {
    switch (typeEmail) {
        case "confirmation":
            return confirmationEmail(email);
        case "cancellation":
            return cancellationEmail(email);
        case "reappointment":
            return reappointmentEmail(email);
        case "medicationReminder":
            return medicationReminder(email, paciente, time)
        default:
            throw new Error(`Email type ${typeEmail} not supported`);
    }
};

const confirmationEmail = (email: string) => {
    const message: string = messageEmail.confirmation;
    const buttonUrl: string = buttonUrlValue.confirmation;
    const title: string = titleValue.confirmation;
    const recipients: string = email;
    const buttonText: string = buttonTextValue.confirmation;
    const img: string= imgUrlValue.confirmation;
    return new EmailDto(message, buttonUrl, title, recipients, buttonText, img);
};

const cancellationEmail = (email: string) => {
    const message: string = messageEmail.cancellation;
    const buttonUrl: string = buttonUrlValue.cancellation;
    const title: string = titleValue.cancellation
    const recipients: string = email;
    const buttonText: string = buttonTextValue.cancellation;
    const img: string= imgUrlValue.cancellation;
    return new EmailDto(message, buttonUrl, title, recipients, buttonText, img);
};

const reappointmentEmail = (email: string) => {
    const message: string = messageEmail.reappointment;
    const buttonUrl: string = buttonUrlValue.reappointment;
    const title: string = titleValue.reappointment;
    const recipients: string = email;
    const buttonText: string = buttonTextValue.reappointment;
    const img: string= imgUrlValue.reappointment;
    return new EmailDto(message, buttonUrl, title, recipients, buttonText, img);
};

const medicationReminder = (email: string, paciente: string, time: string) => {
    const message: string = messageEmail.medicationReminder(paciente, time);
    const buttonUrl: string = buttonUrlValue.medicationReminder; 
    const title: string = titleValue.medicationReminder;
    const recipients: string = email;
    const buttonText: string = buttonTextValue.medicationReminder;
    const img: string = imgUrlValue.medicationReminder;
    return new EmailDto(message, buttonUrl, title, recipients, buttonText, img);
};

export default creationEmail;
