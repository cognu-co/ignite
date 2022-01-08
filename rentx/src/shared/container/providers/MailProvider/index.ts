import { container } from "tsyringe";

import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";

import { EtherealMailProvider } from "./implementations/EtherealMailProvider";
import { SESMailProvider } from "./implementations/SESMailProvider";

const mailProvider = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};

/**
 * vai ser ejetado assim que a aplicação iniciar
 */
container.registerInstance<IMailProvider>(
  "MailProvider",
  mailProvider[process.env.MAIL_PROVIDER]
);
