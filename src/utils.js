export const logException = e => {
  console.error(e);
};

export const expBackoff = (func, max = 6) => {
  for (let n = 0; n < max; n += 1) {
    try {
      return func();
    } catch (e) {
      if (n === max - 1) {
        logException(e);
        throw e;
      }
      Utilities.sleep(2 ** n * 1000 + Math.round(Math.random() * 1000));
    }
  }
  return null;
};

export const sleep = (seconds = 1) => {
  Utilities.sleep(seconds * 1000);
};

export const include = filename =>
  HtmlService.createHtmlOutputFromFile(filename).getContent();

export const TITLE = 'Website Monitor';
