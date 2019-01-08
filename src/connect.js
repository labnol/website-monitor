const sitecall = func => {
  const MAX = 3;
  for (let n = 0; n < MAX; n += 1) {
    try {
      return func();
    } catch (e) {
      if (n === MAX - 1) {
        throw e;
      }
      Utilities.sleep(2 ** n * 20000 + Math.round(Math.random() * 1000));
    }
  }
  return null;
};

const getUpStatus = (url = '') => {
  try {
    const response = sitecall(() =>
      UrlFetchApp.fetch(url, {
        validateHttpsCertificates: false,
        followRedirects: true,
        muteHttpExceptions: false
      })
    );
    return response.getResponseCode();
  } catch (f) {
    return 99;
  }
};

export default getUpStatus;
