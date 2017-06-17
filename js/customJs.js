var calci = angular.module('calciApp', []);
calci.service('mathService', function () {
    this.add = function (a, b) {
        return a + b
    };
    this.subtract = function (a, b) {
        return a - b
    };
    this.multiply = function (a, b) {
        return a * b
    };
    this.divide = function (a, b) {
        return a / b
    };
});
calci.service('operationService', function (mathService) {
    this.square = function (a) {
        return mathService.multiply(a, a);
    };
    this.cube = function (a) {
        return mathService.multiply(a, mathService.multiply(a, a));
    };

});
calci.controller('calculateControl', function ($scope, operationService) {
    $scope.mode = 0;
    $scope.signOper = '';
    $scope.signt = '';
    $scope.sinFn = function () {
        $scope.mode = 1;
        if ($scope.firstNumber != null && $scope.firstNumber != 0) {
            $scope.firstNumber = $scope.firstNumber + "sin";
        } else {
            $scope.firstNumber = "sin";
        }
        $scope.signOper = 'sin';
    };
    $scope.cosFn = function () {
        $scope.mode = 1;
        if ($scope.firstNumber != null && $scope.firstNumber != 0) {
            $scope.firstNumber = $scope.firstNumber + "cos";
        } else {
            $scope.firstNumber = "cos";
        }
        $scope.cosOper = 'cos';
    };
    $scope.doSquare = function (sq) {
        $scope.firstNumber = operationService.square($scope.firstNumber);
    };
    $scope.doCube = function (cu) {
        $scope.firstNumber = operationService.cube($scope.firstNumber);
    };
    $scope.doAdd = function (addi) {
        $scope.firstNumber = $scope.firstNumber.replace($scope.signOper + "" + $scope.signt, Math.sin($scope.signt));
        $scope.mode = 0;
        $scope.firstNumber = $scope.firstNumber + "+";
    };
    $scope.doSub = function (subt) {
        $scope.firstNumber = $scope.firstNumber + "-";
    };
    $scope.doMul = function (muli) {
        $scope.firstNumber = $scope.firstNumber + "*";
    };
    $scope.doDiv = function (divi) {
        $scope.firstNumber = $scope.firstNumber + "/";
    };
    $scope.addNumber = function (abc) {
        if ($scope.firstNumber != null && $scope.firstNumber != 0) {
            $scope.firstNumber = $scope.firstNumber + '' + abc;
        } else {
            $scope.firstNumber = abc;
        }
        if ($scope.mode == 1) {
            if ($scope.signt != '' && $scope.signt != undefined) {
                $scope.signt = $scope.signt + "" + abc;
            } else {
                $scope.signt = abc;
            }
        }
    };
    $scope.equalDisplay = function () {
        $scope.firstNumber = eval($scope.firstNumber);
        $scope.signt = Math.sin($scope.signt);
    };
    $scope.clearDisplay = function () {
        $scope.firstNumber = "";
    };
    $scope.clear = function () {
        $scope.firstNumber = $scope.firstNumber.replace($scope.firstNumber, $scope.firstNumber.substring(0, $scope.firstNumber.length - 1));
    };
});