sap.ui.define([
    'sap/ui/core/UIComponent'

], function (UIComponent) {
    'use strict';

    return UIComponent.extend("com.ui5.poc.app.Component", {

        init: function () {
            UIComponent.prototype.init.apply(this);
        },

        createContent: function () {

            var oView = new sap.ui.view({
                viewName: "com.ui5.poc.app.view.App",
                type: "XML"
            });

            var oAppconobject = oView.byId("zappid");

            var oView1 = new sap.ui.view({
                viewName: "com.ui5.poc.app.view.view1",
                type: "XML",
                id: "view1id"
            });

            oAppconobject.addPage(oView1);

            return oView;


        },

        destroy: function () {


        }







    })
});