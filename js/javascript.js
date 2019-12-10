//Author: Bonnie Liu
//Email:yueying_liu@student.uml.edu
//Student_id: 01661781

function dynamic_table()
{
    //get value
    var h1 = document.getElementById("Hoz_axis1").value;
    var h2 = document.getElementById("Hoz_axis2").value;
    var v1 = document.getElementById("Ver_axis1").value;
    var v2 = document.getElementById("Ver_axis2").value;
    
    //create a new table
    var tb_new = document.getElementById("new_table");
    if (tb_new) tb_new.parentNode.removeChild(tb_new);//delete table
    
    var table = document.createElement("TABLE");// create table
    table.setAttribute("id", "new_table");
    var tbody = document.createElement("TBODY");// create table body

    for (var i = v1-1; i <= v2 ; i++)
    {
        var trow = document.createElement("TR"); //add tr
        
        for (var j = h1-1; j <= h2; j++)
        {
            var tcol = document.createElement("TD"); //add td
            var cell ;

            if (i == v1-1 && j == h1-1)
            {
                 cell = document.createTextNode(" "); //first cell
            }
            else if (i == v1-1)
            {
                 cell = document.createTextNode(j);
            }
            else
            {
                if(j == (h1-1))
                {
                   cell = document.createTextNode(i);
                }
                else
                {
                    cell = document.createTextNode(i*j);
                }
            }

            tcol.appendChild(cell); //add cell to td
            trow.appendChild(tcol); //add td to tr
        }
        
        tbody.appendChild(trow); // append row
        table.appendChild(tbody);
        document.getElementById("table").appendChild(table);
    }
}
