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
    $(document).ready(function() { //when DOM is ready run the code
        $("#getPeopleBtn").on("click", function () {

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

        function appendPeople(people) {
            $("#container").append("<div></div>");
            var el = $("#container").children().last();
            for (var i = 0; i < people.length; i++) {
                el.append("<p>" + people[i].name + " lives in " + people[i].city + "</p>");
                //people is array and need [i] to go from undefined to defined listing names and cities.
                el.append("<p></p>")//blank line for spacing on Dom
            }
        }
    });



 //function appendDom(data){
//    el.append("<p>" + data.alive + "</p>");
// }