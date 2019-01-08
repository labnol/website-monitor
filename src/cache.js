import { expBackoff } from './utils';

class Cache {
  constructor() {
    this.userCache = null;
    this.docCache = null;
  }

  getUserCache() {
    if (this.userCache === null) {
      try {
        this.userCache = expBackoff(() => CacheService.getUserCache());
      } catch (f) {
        this.userCache = false;
      }
    }
    return this.userCache;
  }

  getUserCacheValue(key, json = false) {
    if (!this.getUserCache()) return null;
    try {
      const value = this.getUserCache().get(key);
      if (value) {
        return json ? JSON.parse(value) : value;
      }
    } catch (f) {
      // do nothing
    }
    return null;
  }

  setUserCacheValue(key, value, json = false) {
    if (!this.getUserCache()) return;
    try {
      if (!value || (json && !Object.keys(value).length)) {
        this.deleteUserCacheValue(key);
        return;
      }
      this.getUserCache().put(key, json ? JSON.stringify(value) : value, 21600);
    } catch (f) {
      // do nothing
    }
  }

  deleteUserCacheValue(key) {
    if (this.getUserCache()) this.getUserCache().remove(key);
  }
}

const cache = new Cache();
export default cache;
