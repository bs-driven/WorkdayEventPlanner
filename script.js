var saveEl = document.getElementsByClassName("saveBtn");
var desInfo = document.getElementsByClassName("describInfo");
var containerEl = document.querySelector(".container");
var cBtn = document.getElementsByClassName("custom-saveBtn");
var dateTimeEl = moment().format("ddd-MMMM-YYYY");
var timeEl = moment().format("LT");
var currentHour = moment().hours();

// current date & time print out
$(".date").text(dateTimeEl);
$(".time").text(timeEl);


// changing the table backround to fit the current time
var timeColor= function(){
    for (let index = 8; index <= 18; index++) {
        var tableRow = document.getElementById(index);
        console.log(tableRow);
        if(index === currentHour){
            tableRow.setAttribute("style", "background-color:orange");
        } else if(index < currentHour){
            tableRow.setAttribute("style", "background-color: red");
        } else{
            tableRow.setAttribute("style","background-color: green");
        }
    }
}
// funtion to save the user input on the the click of the button
var savingInfo = function(event) { 
    if (event.target.matches("button") ) {
        var btnParent = event.target.parentNode;
        var inputParent = btnParent.previousElementSibling;
        var lsValue = inputParent.children[0].value
        var lsKey = inputParent.children[0].id
        localStorage.setItem(lsKey,JSON.stringify(lsValue))

        console.log(inputParent.children[0].id)
    }};
// section below is getting the saved info for the user fromm local storage
var eighttAmInput = document.querySelector("#detail8am");
eighttAmInput.value = JSON.parse(localStorage.getItem("detail8am"));

var nineAmINput = document.querySelector("#detail9am");
nineAmINput.value = JSON.parse(localStorage.getItem("detail9am"));

var tenAmInput = document.querySelector("#detail10am");
tenAmInput.value = JSON.parse(localStorage.getItem("detail10am"));

var elevenAmInput = document.querySelector("#detail11am");
elevenAmInput.value = JSON.parse(localStorage.getItem("detail11am"));

var twelvePmInput = document.querySelector("#detail12pm");
twelvePmInput.value = JSON.parse(localStorage.getItem("detail12pm"));

var onePmInput = document.querySelector("#detail1pm");
onePmInput.value = JSON.parse(localStorage.getItem("detail1pm"));

var twoPmInput = document.querySelector("#detail2pm");
twoPmInput.value = JSON.parse(localStorage.getItem("detail2pm"));

var threePmInput = document.querySelector("#detail3pm");
threePmInput.value = JSON.parse(localStorage.getItem("detail3pm"));

var fourPmInput = document.querySelector("#detail4pm");
fourPmInput.value = JSON.parse(localStorage.getItem("detail4pm"));

var fivePmInput = document.querySelector("#detail5pm");
fivePmInput.value = JSON.parse(localStorage.getItem("detail5pm"));

var sixPmInput = document.querySelector("#detail6pm");
sixPmInput.value = JSON.parse(localStorage.getItem("detail6pm"));

// calling the functions into effect
containerEl.addEventListener("click", savingInfo);
timeColor();
