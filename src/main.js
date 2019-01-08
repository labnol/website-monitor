import { getSettings, getLastStatus, setLastStatus } from './server';
import getSiteStatus from './connect';
import logEvent from './log';
import { logException, SUCCESS } from './utils';

const main = () => {
  try {
    const settings = getSettings();
    if (settings.site) {
      const newStatus = getSiteStatus(settings.site);
      const oldStatus = getLastStatus();
      if (oldStatus !== newStatus) {
        setLastStatus(newStatus);
        if (newStatus === SUCCESS) {
          logEvent(settings, 'Up');
          // site is now up
        } else if (oldStatus === SUCCESS) {
          // site is down
          logEvent(settings, 'Down');
        } else {
          // site continues to be down
          // do nothing
        }
      }
    }
  } catch (f) {
    logException(f);
  }
};

export default main;
