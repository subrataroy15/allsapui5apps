sap.ui.define([
    'com/ui5/poc/app/controller/BaseController',
    "sap/m/Dialog"
], function (BaseController, Dialog) {
    'use strict';
    return BaseController.extend("com.ui5.poc.app.controller.viewcontroller1", {


        // onselect: function(oEvent){
        //  debugger;
        // oEvent.getSource().getId()



        // },

        onInit: function () {

            //GOBAL VARIABLE FOR VIEW 
            var oform2 = this.getView().byId("zsimpleformid2");
            var oform3 = this.getView().byId("zsimpleformid3");
            var olabel = this.getView().byId("labelid");
            var obtn = this.getView().byId("btnid");

            olabel.setText("CentiMark Materials:");
            oform2.setVisible(false);
            oform3.setVisible(false);
            obtn.setVisible(false);
        },

        onselect: function (oEvent1) {
            //debugger;
            var oradio1 = this.getView().byId("RadioBtn1");
            var oradio2 = this.getView().byId("RadioBtn2");
            var olabel = this.getView().byId("labelid");
            var obtn = this.getView().byId("btnid");


            var oform1 = this.getView().byId("zsimpleformid");
            var oform2 = this.getView().byId("zsimpleformid2");
            var oform3 = this.getView().byId("zsimpleformid3");


            if (oradio1.getSelected() === true) {
                oform2.setVisible(false);
                oform3.setVisible(false);
                oform1.setVisible(true);
                obtn.setVisible(false);
                olabel.setText("CentiMark Materials:");
            }

            else if (oradio2.getSelected() === true) {
                oform1.setVisible(false);
                oform2.setVisible(true);
                oform3.setVisible(true);
                obtn.setVisible(true);


                olabel.setText("Non-Stock Material Description:");
            }

        },

        onpress: function (onpressevent) {
            var that = this;

            //Create a Dialog Control - Start of Dialog
            this.fixedDialog = new Dialog({

                // Add Title for Dialog button
                title: "Choose Image",

                //Add Button & Placeholder for Image inside this Dialog
                beginButton: new sap.m.Button({
                    text: "Take Photo",
                    press: function () {
                        // Get me the image value of the Object i.e getting Pic object value as Global Variable
                        that.imagevalue = document.getElementById("player");

                        // Set image take out from this Photo in content area named as canvas.
                        that.fixedDialog.close();
                    }
                }),

                // End of Dialog

                // Adding Content inside the Dialog Pages, since Content is an Aggregation we can 
                // add multiple content inside content control.
                // Start of Content:-
                content: [

                    new sap.ui.core.HTML({
                        content: "<video id='player' autoplay></video>"
                    }),

                    //  If we want to use HTML content inside SAP UI5 then
                    // we  have to use sap.ui.core.HTML
                    new sap.ui.core.HTML({
                        content: "<img alt='test for image tag'></img>"
                    }),

                    // PlaceHoler to enter the description of the Photo which is browsed & attached
                    new sap.m.Input({
                        placeholder: "Enter uploaded Img desc here - PlceHlder Prprty",
                        required: true
                    })
                ],

                // End of Content:-

                // End Button to close the Take Photo Dialog.
                endButton: new sap.m.Button({
                    text: "cancel",
                    press: function () {
                        that.fixedDialog.close();
                    }
                }),

            });

            this.getView().addDependent(this.fixedDialog);
            this.fixedDialog.open();
            this.fixedDialog.attachBeforeClose(this.setImage, this);

            // This will start camera & whenever it will find video tag this method will  u
            navigator.mediaDevices.getUserMedia({

                video: true

            }).then(handleSuccess);

            var handleSuccess = function () {

                player.srcObject = stream;
            }
        },

        //Enable the camera funcionality
        setImage: function () {
            var objCanvas = this.getView().byId("canvasid");
            var itemincanvas = objCanvas.getItems();

            // Construct a Image Id
            var dynamicid = 'zcreateadynamicid-' + itemincanvas.length;
            var textid = dynamicid + '-text';
            var imagevalue = this.imagevalue;

            var oCanvas = new sap.ui.core.HTML({
                content: "<canvas id=' " + dynamicid + " ' width='230px' height='200px' " + " style = '2px solid blue'></oCanvas>" +
                    "label id =  ' " + textid + " ' >" + this.attachName + "</label>"

            })

            objCanvas.addItem(oCanvas);

            oCanvas.addEventDelegate({

                onAfterRendering: function () {

                    var snapshotcanvas = document.getElementById(dynamicid);
                    var oContext = snapshotcanvas.getContext('2d');
                    oContext.drawImage(imagevalue, 0, 0, snapshotcanvas.width, snapshotcanvas.height);
                }
            })

        },

        ondelete: function (ondeleteevent) {
            //            debugger;
        }


    })
});