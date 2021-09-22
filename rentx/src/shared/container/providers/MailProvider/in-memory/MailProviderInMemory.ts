import { IMailProvider } from "../IMailProvider";

interface IMailSenderDTO {
  to: string;
  subject: string;
  variables: any;
  path: string;
}

class MailProviderInMemory implements IMailProvider {
  private message: IMailSenderDTO[];

  constructor() {
    this.message = [];
  }

  async sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void> {
    this.message.push({
      to,
      subject,
      variables,
      path,
    });
  }
}

export { MailProviderInMemory };
