interface IStorageProvider {
  /**
   * save file in storage
   *
   * @param file Object to save on storage
   * @param folder Storage identifier
   */
  save(file: string, folder: string): Promise<string>;

  /**
   * @param file Object to delete on storage
   * @param folder Storage where Object is allocated
   */
  delete(file: string, folder: string): Promise<void>;
}

export { IStorageProvider };
