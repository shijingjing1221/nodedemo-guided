/*global angular*/

angular.module('nodedemoApp').factory('Navigation', function ($state) {
    var menuItems = [
        {
            title: "Question",
            link: ".question",
            step: 0
        },
        {
            title: "Suggestion",
            link: ".suggestion",
            step: 1
        }
    ];

    var initIndex = 0;
    var lastIndex = menuItems.length;

    var navigation = {
        maxStep: initIndex,
        currentMenu: menuItems[initIndex]
    };

    var init = function () {
        navigation.maxStep = initIndex;
        navigation.currentMenu = menuItems[initIndex];
    };

    var updateMaxStep = function (targetStep) {
        if (targetStep > navigation.maxStep) {
            navigation.maxStep = targetStep;
        }
    };

    var updateMenuItems = function (newIndex) {
        navigation.currentMenu = menuItems[newIndex];
    };

    var goNext = function () {
        var nextIndex = navigation.currentMenu.step + 1;
        if (nextIndex > lastIndex) {
            nextIndex = initIndex;
        }
        updateMaxStep(nextIndex);
        updateMenuItems(nextIndex);
        $state.go("main" + navigation.currentMenu.link);
    };

    var goPrevious = function () {
        var previousIndex = navigation.currentMenu.step - 1;
        if (previousIndex < initIndex) {
            previousIndex = initIndex;
        }
        updateMenuItems(previousIndex);
        $state.go("main" + navigation.currentMenu.link);
    };

    var startOver = function () {
        init();
        $state.go("main" + navigation.currentMenu.link);
    };

    return {
        navigation: navigation,
        menuItems: menuItems,
        updateMaxStep: updateMaxStep,
        updateMenuItems: updateMenuItems,
        init: init,
        goNext: goNext,
        goPrevious: goPrevious,
        startOver: startOver
    };
});
