export default class EmailDto {
    private _message: string;
    private _buttonUrl: string;
    private _title: string;
    private _recipients: string;
    private _emailType: string;
    private _buttonText: string;

    constructor(
        message: string,
        buttonUrl: string,
        title: string,
        recipients: string,
        emailType: string,
        buttonText: string
    ) {
        this.message = message;
        this.buttonUrl = buttonUrl;
        this.title = title;
        this.recipients = recipients;
        this.emailType = emailType;
        this.buttonText = buttonText;
    }

    get message(): string {
        return this._message;
    }

    set message(message: string) {
        this._message = message;
    }

    get buttonUrl(): string {
        return this._buttonUrl;
    }

    set buttonUrl(buttonUrl: string) {
        this._buttonUrl = buttonUrl;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get recipients(): string {
        return this._recipients;
    }

    set recipients(recipients: string) {
        this._recipients = recipients;
    }

    get emailType(): string {
        return this._emailType;
    }

    set emailType(emailType: string) {
        this._emailType = emailType;
    }

    get buttonText(): string {
        return this._buttonText;
    }

    set buttonText(buttonText: string) {
        this._buttonText = buttonText;
    }
}
