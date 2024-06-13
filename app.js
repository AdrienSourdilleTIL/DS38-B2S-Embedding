console.log("Hello world")

const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

const oregonWashingtonButton = document.getElementById("oregon_and_washington");
const TexasButton = document.getElementById("Texas");
const clearFilterButton = document.getElementById("clear_filter");
const undoButton = document.getElementById("undo");



// making a function to log information about our workbook
function logWorkbookInformation() {
    workbook = viz.workbook;
    console.log(`The workbook name is "${workbook.name}"`);

    let sheets = workbook.publishedSheetsInfo;
    sheets.forEach((element) => {
        index = element.index; console.log(`The Sheet with index [${index}] is : "${element.name}"`);
    });

    vizActiveSheet = workbook.activeSheet;
    console.log(`The active sheet is "${vizActiveSheet.name}"`)

    listSheets = vizActiveSheet.worksheets;
    listSheets.forEach((element) => {
        index = element.index; worksheetName = element.name; console.log(`The worksheet with index [${index}] is : "${worksheetName}"`);
    });

    saleMap = listSheets.find((ws) => ws.name == "SaleMap");
    totalSales = listSheets.find((ws) => ws.name == "Total Sales");
    salesByProduct = listSheets.find((ws) => ws.name == "SalesbyProduct");
    salesBySegment = listSheets.find((ws) => ws.name == "SalesbySegment");
}

function oregonWashFunction() {
    console.log(oregonWashingtonButton.value)
    saleMap.applyFilterAsync("State", ["Washington", "Oregon"], "replace")
    totalSales.applyFilterAsync("State", ["Washington", "Oregon"], "replace")
    salesByProduct.applyFilterAsync("State", ["Washington", "Oregon"], "replace")
    salesBySegment.applyFilterAsync("State", ["Washington", "Oregon"], "replace")
}

function TexasFunction() {
    console.log(TexasButton.value)
    saleMap.applyFilterAsync("State", ["Texas"], "replace")
    totalSales.applyFilterAsync("State", ["Texas"], "replace")
    salesByProduct.applyFilterAsync("State", ["Texas"], "replace")
    salesBySegment.applyFilterAsync("State", ["Texas"], "replace")
}

function clearStateFilter() {
    console.log(clearFilterButton.value)
    saleMap.clearFilterAsync("State")
    totalSales.clearFilterAsync("State")
    salesByProduct.clearFilterAsync("State")
    salesBySegment.clearFilterAsync("State")
}

function unDo() {
    console.log(undoButton.value)
    viz.undoAsync()
}

viz.addEventListener("firstinteractive", logWorkbookInformation);
oregonWashingtonButton.addEventListener("click", oregonWashFunction);
TexasButton.addEventListener("click", TexasFunction);
clearFilterButton.addEventListener("click", clearStateFilter);
undoButton.addEventListener("click", unDo);