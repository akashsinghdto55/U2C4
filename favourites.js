// write js code here corresponding to favourites.html

var favouriteArrs = JSON.parse(localStorage.getItem("favourites"));

displayData(favouriteArrs)

function displayData(data){

data.forEach(function (ele,index){

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
    td6.innerText="Delete";
    td6.style.color="red";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(){
        myFavourite(ele,index)
    });

    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);

});

function myFavourite(ele,index){

    favouriteArrs.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(favouriteArrs));
    window.location.reload();

}

}