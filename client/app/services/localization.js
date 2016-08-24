/*global angular*/

angular.module('nodedemoApp').factory('Localization', function ($cookies) {
    'use strict';
    var favoriteLanguage = '';
    switch ($cookies.get('rh_locale')) {
        case 'es':
            favoriteLanguage = 'es';
            break;
        case 'jp':
            favoriteLanguage = 'jp';
            break;
        case 'zh_CN':
            favoriteLanguage = 'zh_CN';
            break;
        default:
            favoriteLanguage = 'en';
    }
    return {
        favoriteLanguage: favoriteLanguage
    };
});
