// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",clickSubmit);

var matchDetail = JSON.parse(localStorage.getItem("schedule")) || [];

function clickSubmit(){

    event.preventDefault()

    var obj={
matchNumber: masaiForm.matchNum.value,
teamA1 : masaiForm.teamA.value,
teamB1 : masaiForm.teamB.value,
matchDate : masaiForm.date.value,

matchVenue : masaiForm.venue.value
    };

    matchDetail.push(obj);

    localStorage.setItem("schedule",JSON.stringify(matchDetail));

    window.location.href="matches.html"

}
