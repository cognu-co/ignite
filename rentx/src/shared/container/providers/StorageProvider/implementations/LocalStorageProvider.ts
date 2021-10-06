import fs from "fs";
import { resolve } from "path";

import uploadConfig from "../../../../../config/upload";
import { IStorageProvider } from "../IStorageProvider";

class LocalStorageProvider implements IStorageProvider {
  async save(file: string, folder: string): Promise<string> {
    /**
     * pega o *arquivo* salvo em *tmp* e passa para determinada *pasta*
     */
    await fs.promises.rename(
      resolve(uploadConfig.tmpFolder, file),
      resolve(`${uploadConfig.tmpFolder}/${folder}`, file)
    );

    return file;
  }

  async delete(file: string, folder: string): Promise<void> {
    const filename = resolve(`${uploadConfig.tmpFolder}/${folder}`, file);

    try {
      await fs.promises.stat(filename);
    } catch (error) {
      throw new Error("File do not exist");
    }

    await fs.promises.unlink(filename);
  }
}

export { LocalStorageProvider };
