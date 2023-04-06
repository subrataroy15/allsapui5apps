sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function (Controller) {
    'use strict';
    return Controller.extend("com.ui5.poc.app.controller.BaseController", {
        //oCore variable can be used in all the child controllers

        oCore: sap.ui.getCore()


    });
});