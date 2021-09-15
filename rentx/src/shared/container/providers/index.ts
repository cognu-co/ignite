import { container } from "tsyringe";

import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";

import { IDateProvider } from "./DateProvider/IDateProvider";
import { DayjsDateProvider } from "./DateProvider/implementations/DayjsDateProvider";
import { EtherealMailProvider } from "./MailProvider/implementations/EtherealMailProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);

container.registerSingleton<IMailProvider>(
  "EtherealMailProvider",
  EtherealMailProvider
);
