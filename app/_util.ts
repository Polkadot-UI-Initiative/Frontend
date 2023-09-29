/**
 * Trims a substrate address to a given amount of characters.
 * @param address
 * @param amount
 * @returns e.g. for an address 5CwW67PPdZQQCcdWJVaRJCepSQSrtKUumDAGa7UZbBKwd9R2 it returns 5Cw...9R2
 */
export const trimAddress = (address: string, amount: number = 3) => {
  if (!address) {
    return "";
  }
  return `${address.slice(0, amount)}...${address.slice(-amount)}`;
};

/**
 * Returns a promise that resolves when the document is ready.
 * @param creator
 * @returns
 */
export function documentReadyPromise<T>(creator: () => Promise<T>): Promise<T> {
  return new Promise((resolve): void => {
    if (document.readyState === "complete") {
      resolve(creator());
    } else {
      window.addEventListener("load", () => resolve(creator()));
    }
  });
}
