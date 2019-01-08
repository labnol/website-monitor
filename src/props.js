import { expBackoff } from './utils';
import cache from './cache';

class Properties {
  constructor() {
    this.userProps = null;
  }

  getUserProps() {
    if (this.userProps === null) {
      try {
        this.userProps = expBackoff(() =>
          PropertiesService.getUserProperties()
        );
      } catch (f) {
        this.userProps = false;
      }
    }
    return this.userProps;
  }

  getUserProperty(key, json = false) {
    if (!this.getUserProps()) return null;
    const value =
      cache.getUserCacheValue(`user${key}`) ||
      this.getUserProps().getProperty(key);
    return json ? JSON.parse(value || '{}') : value;
  }

  getUserProperties() {
    if (this.getUserProps()) {
      return this.getUserProps().getProperties();
    }
    return {};
  }

  setUserProperty(key, value, json = false) {
    if (this.getUserProps()) {
      const save = json ? JSON.stringify(value) : value;
      cache.setUserCacheValue(`user${key}`, save);
      this.getUserProps().setProperty(key, save);
    }
  }

  deleteUserProperty(key) {
    if (this.getUserProps()) {
      cache.deleteUserCacheValue(`user${key}`);
      this.getUserProps().deleteProperty(key);
    }
  }

  deleteUserProperties() {
    if (this.getUserProps()) {
      this.getUserProps().deleteAllProperties();
    }
  }
}

const properties = new Properties();
export default properties;
