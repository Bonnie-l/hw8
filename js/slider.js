/*
Author: Bonnie Liu
Email:yueying_liu@student.uml.edu
Student_id: 01661781
*/
$(function() {
// slider x begin
  $("#sliderXBegin").slider({
    min: -15,
    max: 15,
    slide: function(event, ui) {
      $("#Hoz_axis1").val(ui.value);
    },
  })
  $("#Hoz_axis1").val($("#sliderXBegin").slider("value"));
  $("#Hoz_axis1").change(function() {
    var value = this.value;
    $("#sliderXBegin").slider("value", parseInt(value));
  })

  //slider x end
    $("#sliderXEnd").slider({
      min: -15,
      max: 15,
      slide: function(event, ui) {
        $("#Hoz_axis2").val(ui.value);
      },
    })
    $("#Hoz_axis2").val($("#sliderXEnd").slider("value"));
    $("#Hoz_axis2").change(function() {
      var value = this.value;
      $("#sliderXEnd").slider("value", parseInt(value));
    })

    //slider y begin
      $("#sliderYBegin").slider({
        min: -15,
        max: 15,
        slide: function(event, ui) {
          $("#Ver_axis1").val(ui.value);
        },
      })
      $("#Ver_axis1").val($("#sliderYBegin").slider("value"));
      $("#Ver_axis1").change(function() {
        var value = this.value;
        $("#sliderYBegin").slider("value", parseInt(value));
      })

      //slider y end
        $("#sliderYEnd").slider({
          min: -15,
          max: 15,
          slide: function(event, ui) {
            $("#Ver_axis2").val(ui.value);
          },
        })
        $("#Ver_axis2").val($("#sliderYEnd").slider("value"));
        $("#Ver_axis2").change(function() {
          var value = this.value;
          $("#sliderYEnd").slider("value", parseInt(value));
        })
});

