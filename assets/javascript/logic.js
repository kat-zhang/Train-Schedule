// Initialize Firebase
var config = {
    apiKey: "AIzaSyDQq71i66gacNX7bUhyuRJa46Bow3B5K_U",
    authDomain: "hw-7-train-schedule-a2cff.firebaseapp.com",
    databaseURL: "https://hw-7-train-schedule-a2cff.firebaseio.com",
    projectId: "hw-7-train-schedule-a2cff",
    storageBucket: "hw-7-train-schedule-a2cff.appspot.com",
    messagingSenderId: "271840703273"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#add-train").on("click", function (event){
    event.preventDefault();

    var trainName = $("#train-name").val().trim();
    var destination =$("#destination").val().trim();
    var firstTrain = $("#first-train").val().trim();
    var waitTime = $("#wait-time").val().trim();

    var newTrain = {
        name: trainName,
        destination: destination,
        first: firstTrain,
        frequency: waitTime,
    };
// push to firebase 
    database.ref().push(newTrain);

    alert("New train has been added");

    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train").val("");
    $("#wait-time").val("");
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var destination =childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().first;
    var waitTime = childSnapshot.val().frequency;
//firstTrain arrival time PLUS frequency = nextArrival
    //push back 1 year to make it come before current time
    // var fixFirstTrainTime = moment.unix(firstTrain).format("HH:mm");
    // var nextArrival = moment()
    // console.log(trainName);
    // console.log(destination);
    // console.log(firstTrain);
    // console.log(frequency);

    
    // var convertTime = moment(firstTrain, "HH:MM").subtract(1, "years");

    // var currentTime = moment();
    // $("#current-time").text("CURRENT TIME: " + moment(currentTime).format("HH:mm:ss dddd, MMM D YYYY"));
    // var nextArrival = 
    


    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(waitTime),
        $("<td>").text(firstTrain),
        // $("<td>").text(),

       
    );
    $("#schedule-table > tbody").append(newRow)
});    
     