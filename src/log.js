import writeToGoogleAnalytics from './analytics';
import sendEmailAlert from './mail';
import { logException } from './utils';

const writeToGoogleSheet = message => {
  try {
    SpreadsheetApp.getActiveSheet().appendRow([new Date(), message]);
  } catch (f) {
    // do nothing
  }
};

const logEvent = (settings, status) => {
  try {
    const { site, ga = '' } = settings;
    writeToGoogleSheet([site, 'is', status].join(' '));
    writeToGoogleAnalytics(ga, site, status);
    sendEmailAlert(settings, status);
  } catch (f) {
    logException(f);
  }
};

export default logEvent;
