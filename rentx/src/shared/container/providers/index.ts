import { container } from "tsyringe";

import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";

import { IDateProvider } from "./DateProvider/IDateProvider";
import { DayjsDateProvider } from "./DateProvider/implementations/DayjsDateProvider";
import { EtherealMailProvider } from "./MailProvider/implementations/EtherealMailProvider";
import { LocalStorageProvider } from "./StorageProvider/implementations/LocalStorageProvider";
import { IStorageProvider } from "./StorageProvider/IStorageProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);
container.registerSingleton<IStorageProvider>(
  "LocalStorageProvider",
  LocalStorageProvider
);

/**
 * vai ser ejetado assim que a aplicação iniciar
 */
container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
  new EtherealMailProvider()
);
