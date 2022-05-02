// write js code here corresponding to matches.html

var matchDetails = JSON.parse(localStorage.getItem("schedule"));

var favouriteArr= JSON.parse(localStorage.getItem("favourites")) || [];
displayData(matchDetails)

function displayData(data){

    data.forEach(function(ele){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText = ele.matchNumber;
        var td2= document.createElement("td");
        td2.innerText = ele.teamA1;
        var td3 = document.createElement("td");
        td3.innerText = ele.teamB1;
        var td4 = document.createElement("td");
        td4.innerText = ele.matchDate;
        var td5 = document.createElement("td");
        td5.innerText = ele.matchVenue;
        var td6 = document.createElement("td");
        td6.innerText="Add as Favourite";
        td6.style.color="green";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){

            myFavourite(ele)

        });

        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);

    });

function myFavourite(ele){

    favouriteArr.push(ele);
    localStorage.setItem("favourites",JSON.stringify(favouriteArr));
}
}