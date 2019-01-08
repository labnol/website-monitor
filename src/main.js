import { getSettings, getLastStatus, setLastStatus } from './server';
import getUpStatus from './connect';
import logEvent from './log';

const main = () => {
  try {
    const settings = getSettings();
    if (settings.site) {
      const newStatus = getUpStatus(settings.site);
      const oldStatus = getLastStatus();
      if (oldStatus !== newStatus) {
        setLastStatus(newStatus);
        if (newStatus === 200) {
          logEvent(settings, 'Up');
          // site is now up
        } else if (oldStatus === 200) {
          // site is down
          logEvent(settings, 'Down');
        } else {
          // site continues to be down
          // do nothing
        }
      }
    }
  } catch (f) {
    Logger.log(f.toString());
  }
};

export default main;
