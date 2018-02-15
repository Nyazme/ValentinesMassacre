//$(document).ready(function(){
  //  console.log ("jQuery works!");

    //$.ajax({
      //  type :"GET",
        //url : "/people",
        //success : function(){
          //  console.lg("JSon!");
        //}
    //});

    //console.log ("People Get")
//});

//console.log("Step 2");


    //console.log("Step 3: Peeps3");

    //$("#getTedBtn").on("click", function(){
        //console.log("Step 4");
        //goGetTed();
    //});
//});

//function goGetTed(){
    //console.log("Step 5");
    $(document).ready(function(){

    $.ajax({
        type: "GET",
        url: "/people",
        success: function (peeps) {
            // appendDom(data);
            console.log("Here");
            console.log(peeps);
            appendPeople(peeps.people);
        },
        complete: function () {
            console.log("Complete")
        }
    })
    });

    //console.log("Step 6");
//}

function appendPeople(people){
    for(var i = 0; i < people.length; i++){
        console.log(people[i]);
    }
};

// function appendDom(data){
//    $("#container").append("<div></div>");
//    var el = $("#container").children().last();
//    el.append("<p>" + data.name + "</p>");
//    el.append("<p>" + data.age + "</p>");
//    el.append("<p>" + data.alive + "</p>");
// }