// function calendar() {
//     var webcalendar = document.querySelector("#calendar");
//     var month = "October" 
//     webcalendar.insertAdjacentHTML('beforeend', '<p id="month-name"><b>'+month+'</b></p>')
//     webcalendar.insertAdjacentHTML('beforeend', '<div id="days"></div>')
//     var calendarmonth = document.querySelector("#days");
//     for  (let day = 1; day<= 31; day++){
//         calendarmonth.insertAdjacentHTML('beforeend', '<div id="day"><p>'+day+'</p><div class="day-info"></div></div>')
//     }
//     calendarmonth.setAttribute("style", "display: grid;grid-template-columns: repeat(7, 1fr);");
//   }

function calculate() {

    if (document.getElementById("adult-input").value == ""){
        var adult_num =0
    } else{
        var adult_num = parseInt(document.getElementById("adult-input").value)
    }

    if (document.getElementById("child-input").value == ""){
        var child_num =0
    } else{
        var child_num = parseInt(document.getElementById("child-input").value)
    }
 
    var adult_total = adult_num * 25
    var child_total = child_num * 10
    var total = adult_total+child_total

    //update summary
    document.getElementById("adult_num").innerHTML = adult_num+" x $25"
    document.getElementById("child_num").innerHTML = child_num+" x $10"


    document.getElementById("adult_total").innerHTML = "$"+adult_total
    document.getElementById("child_total").innerHTML = "$"+child_total

    document.getElementById("final_total").innerHTML = "$"+total
}
function dropdown() {

    x = document.getElementsByClassName('dropdown-content')[0].style.display
    if (x== ''|| x =='none'){
        document.getElementsByClassName('dropdown-content')[0].style.display = 'block'    
    } else {
        document.getElementsByClassName('dropdown-content')[0].style.display = 'none'
    }
}
