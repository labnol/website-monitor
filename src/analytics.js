import { logException, TITLE } from './utils';

const s4 = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

const guid = () =>
  `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;

const writeToGoogleAnalytics = (id, site, status) => {
  if (id) {
    try {
      const request = [
        'https://ssl.google-analytics.com/collect?v=1',
        't=event',
        `ec=${encodeURIComponent(TITLE)}`,
        `tid=${id}`,
        `z=${Math.round(new Date().getTime() / 1000).toString()}`,
        `cid=${guid()}`,
        `ea=${encodeURIComponent(site)}`,
        `el=${status}`
      ].join('&');
      UrlFetchApp.fetch(request, { muteHttpExceptions: true });
    } catch (e) {
      logException(e);
    }
  }
};

export default writeToGoogleAnalytics;
