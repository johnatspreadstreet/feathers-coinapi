const Base = require('./base');

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const { asset_id_base } = query;
    return this.coinapi.exchange_rates_get_all_current_rates(asset_id_base);
  }

  get(id) {
    return this.coinapi.exchange_rates_get_specific_rate();
  }
};