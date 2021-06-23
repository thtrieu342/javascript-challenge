// from data.js
var tableData = data;

//get table reference
var tableBody = d3.select("tBody");

// for each report, add a row to the table; append values to rows
function displayData(dataReports){
    tableBody.html("");

    dataReports.forEach((add_row) =>{
        const row = tableBody.append("tr");
        Object.values(add_row).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// display data table
displayData(tableData)

//filter 
function click() {

    var date = d3.select("#datetime").property("value");
    let filterData = tableData;
  
    if (date) {
        filterData = filteredData.filter(row => row.datetime === date);
    }
  }
  d3.selectAll("#filter-btn").on("click", click);


