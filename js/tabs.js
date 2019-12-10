/*
 Author: Bonnie Liu
 Email:yueying_liu@student.uml.edu
 Student_id: 01661781
 source:https://stackoverflow.com/questions/1581751/removing-dynamic-jquery-ui-tabs
 */
$(document).ready(function () {
    $("#tabs").tabs()


    $("button").on("click", function () {
        dynamic_tab()
    });// add tab

    if (check()) {
        dynamic_table()
    }
});
// create tab
function dynamic_tab() {
    var num_tabs = $("#tabs li").length + 1;

    $("div#tabs ul").append(
        "<li class='tab'><a href='#tab-" + num_tabs + "'>Tab #" + num_tabs + "</a>"+ "<span class='ui-icon ui-icon-close' role='presentation'></span>" + "</li>"
    );

    $("div#tabs").append(
        '<div id="tab-' + num_tabs + '">' + $("#table").html() + '</div>'
    );

    $("#tabs").tabs("refresh");
    $("#tabs").tabs("option", "active", -1);
    
    $("#tabs").delegate( "span.ui-icon-close", "click", function() {
        var panelID = $( this ).closest( "li" ).remove().attr( "aria-controls" );
        $( "#" + panelID ).remove();
        $("#tabs").tabs("refresh");
    });// delete tabs
}
