'use strict';

angular.module('insight.qtumcorelib').factory('QtumCoreLib',
    function() {
        var QtumCoreLib = require('kienscoin-lib');
        return QtumCoreLib;
    });

