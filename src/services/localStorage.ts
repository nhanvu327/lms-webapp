class LocalStorage {
  saveItem(name: string, payload: any) {
    localStorage.setItem(
      name,
      typeof payload === "object" ? JSON.stringify(payload) : payload
    );
  }

  getItem(name: string) {
    const retrievedData = localStorage.getItem(name);
    try {
      return JSON.parse(retrievedData as string);
    } catch (e) {
      window.Sentry.captureException(e);
      return retrievedData;
    }
  }
}

export default new LocalStorage();