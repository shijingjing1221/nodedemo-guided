/*global angular*/

angular.module('nodedemoApp').factory('Navigation', function ($state, $rootScope) {
    var menuItems = [
        {
            title: "Version",
            link: ".version",
            step: 0
        },
        {
            title: "Step1",
            link: ".step1",
            step: 1
        }
    ];

    var initIndex = 0;
    var lastIndex = menuItems.length;

    var navigation = {
        maxStep: initIndex,
        currentMenu: menuItems[initIndex]
    };

    function init() {
        navigation.maxStep = initIndex;
        navigation.currentMenu = menuItems[initIndex];
    }

    function updateMaxStep(targetStep) {
        if (targetStep > navigation.maxStep) {
            navigation.maxStep = targetStep;
        }
    }

    function updateMenuItems(newIndex) {
        navigation.currentMenu = menuItems[newIndex];
    }

    function goNext() {
        var nextIndex = navigation.currentMenu.step + 1;
        if (nextIndex > lastIndex) {
            nextIndex = initIndex;
        }
        updateMaxStep(nextIndex);
        updateMenuItems(nextIndex);
        $state.go("main" + navigation.currentMenu.link);
    }

    function goPrevious() {
        var previousIndex = navigation.currentMenu.step - 1;
        if (previousIndex < initIndex) {
            previousIndex = initIndex;
        }
        updateMenuItems(previousIndex);
        $state.go("main" + navigation.currentMenu.link);
    }

    function startOver() {
        init();
        $state.go("main" + navigation.currentMenu.link);
    }

    $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams, options) {
            var toStep = getStepByStatename(toState.name);
            updateMenuItems(toStep);

        });

    function getStepByStatename(stateName) {
        var step = 0;
        for (var i in menuItems) {
            var menuItem = menuItems[i];
            if (stateName == "main" + menuItem.link) {
                step = menuItem.step;
                break;
            }
        }
        return step;
    }

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
