# Steamrep check
This plugin extends `Stem.api` to include a new method `checkRep` that will fetch a users reputation from [Steamrep](http://steamrep.com/).

## Installation
1. `$ npm install git://github.com/alvinl/steamrep-check.git`
2. Add `steamrep-check` to the `plugins` array in your config

## checkRep(steamID, cb)
Fetches the reputation of the given steamID. The second parameter that is passed to `cb` is the users reputations as an array if any, othersise null is returned.
