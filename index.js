
module.exports = function (Stem) {

  var parser = require('xml2json');

  /**
   * Looks up a users Steamrep reputation
   *
   * @param  {String}   steamID User to lookup
   * @param  {Function} cb
   */
  Stem.api.checkRep = function (steamID, cb) {

    // Validate steamID
    if (!this.validateSteamID(steamID))
      return cb(new Error('Invalid SteamID'));

    // Fetch the users rep
    this.request('http://steamrep.com/api/beta/reputation/' + steamID, function (err, response, body) {

      if (err)
        return cb(err);

      // Convert response from xml to json and parse it
      var repInfo = JSON.parse(parser.toJson(body));

      // Reputation was found
      if (typeof(repInfo.steamrep.reputation) === 'string')
        return cb(null, repInfo.steamrep.reputation.split(','));

      // No reputation was found
      return cb();

    });

  };

};
