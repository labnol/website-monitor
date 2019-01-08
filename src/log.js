import writeToGoogleAnalytics from './analytics';
import sendEmailAlert from './mail';

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
    Logger.log(f.toString());
  }
};

export default logEvent;
