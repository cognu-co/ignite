import fs from "fs";

export const deleteFile = async (filename: string): Promise<void> => {
  try {
    await fs.promises.stat(filename);
  } catch (error) {
    throw new Error("File do not exist");
  }

  await fs.promises.unlink(filename);
};
