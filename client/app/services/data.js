/*global angular*/

angular.module('nodedemoApp').factory('Data', function ($cookies) {
    var publicVars = {};
    publicVars.avaliableVersions = [{
        number: 7,
        name: "Red Hat Enterprise Linux 7"
    }, {
        number: 6,
        name: "Red Hat Enterprise Linux 6"
    }, {
        number: 5,
        name: "Red Hat Enterprise Linux 5.4 or later"
    }];
    publicVars.currentVersion = publicVars.avaliableVersions[1];
    return publicVars;
});
