/*
 Author: Bonnie Liu
 E-mail: yueying_liu@student.uml.edu
 student.id: 01661781
 source example:
 http://form.guide/jquery/validation-using-jquery-examples.html
 https://plugins.jquery.com/
 */
function check() {
    //check if num2 greater than num1
    $.validator.addMethod("comp", function (value, element, param) {
        return parseInt(value, 10) > parseInt($(param).val(), 10);
    });

    var validator = $('form').validate({
        //rules for validate every input
        rules: {
          Hoz_axis1: {
              required: true,
              number: true,
          },
          Hoz_axis2: {
              required: true,
              number: true,
              comp: "#Hoz_axis1"
          },
          Ver_axis1: {
              required: true,
              number: true,
          },
          Ver_axis2: {
              required: true,
              number: true,
              comp: "#Ver_axis1"
          }
        },
        //error message display when the input does not reach rules
        messages: {
          Hoz_axis1: {
            required: "value is required",
            number: "Please enter an integer."
          },
          Hoz_axis2: {
            required: "value is required",
            number: "Please enter an integer.",
            comp: "Please enter a value greater than num_1."
          },
          Ver_axis1: {
            required: "value is required",
            number: "Please enter an integer."
          },
          Ver_axis2: {
            required: "value is required",
            number: "Please enter an integer.",
            comp: "please enter a value greater than num_3."
          }
        },
        //error message location
        errorMessage: function(label, element) {
            label.insertAfter(element);
        },

       //create table
        submitform: function (form) {
            dynamic_table()
        }
    });
}

$(document).ready(function () {
    check()
});
