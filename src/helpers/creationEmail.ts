import EmailDto from "../Dto/email/EmailDto";
import { messageEmail, buttonUrlValue, buttonTextValue, titleValue} from "../config/common/constants/email";

const creationEmail = (typeEmail: string, email: string) => {
    switch (typeEmail) {
        case "welcome":
            return wecolmeEmail(typeEmail, email);
        default:
            throw new Error(`Email type ${typeEmail} not supported`);
    }
};

const wecolmeEmail = (typeEmail: string, email: string) => {
    const message: string = messageEmail.welcome;
    const buttonUrl: string = buttonUrlValue.welcome;
    const title: string = titleValue.welcome;
    const recipients: string = email;
    const emailType: string = typeEmail;
    const buttonText: string = buttonTextValue.welcome;
    return new EmailDto(message, buttonUrl, title, recipients, emailType, buttonText);
};

export default creationEmail;
