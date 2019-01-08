import { logException } from './utils';

const sitecall = func => {
  const MAX = 3;
  for (let n = 0; n < MAX; n += 1) {
    try {
      return func();
    } catch (e) {
      if (n === MAX - 1) {
        logException(e);
        throw e;
      }
      Utilities.sleep(2 ** n * 20000 + Math.round(Math.random() * 1000));
    }
  }
  return null;
};

const getSiteStatus = (url = '') => {
  try {
    if (url === 'https://www.labnol.org') {
      return [200, 403, 404, 99][(Math.random() * 4).toFixed()];
    }
    const response = sitecall(() =>
      UrlFetchApp.fetch(url, {
        validateHttpsCertificates: false,
        followRedirects: true,
        muteHttpExceptions: false
      })
    );
    return response.getResponseCode();
  } catch (f) {
    logException(f);
    return 99;
  }
};

export default getSiteStatus;
