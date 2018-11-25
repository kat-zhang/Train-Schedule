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
    // var firstTrain = moment($("#first-train").val().trim().format("HH:MM"));
    // var frequency = $("frequency").val().trim ();

    var newTrain = {
        name: trainName,
        destination: destination,
        // first: firstTrain,
        // freq: frequency
    };
// push to firebase 
    database.ref().push(newTrain);

    // console.log(newTrain.name);
    // console.log(newTrain.destination);
    // console.log(newTrain.first);
    // console.log(newTrain.freq);

    alert("New train has been added");

    $("#train-name").val("");
    $("#destination").val("");
    // $("#first-train").val("");
    // $("#frequency").val("");
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var destination =childSnapshot.val().destination;
    // var firstTrain = childSnapshot.val().first;
    // var frequency = childSnapshot.val().freq;

    // console.log(trainName);
    // console.log(destination);
    // console.log(firstTrain);
    // console.log(frequency);

    //firstTrain arrival time PLUS frequency = nextArrival
    //push back 1 year to make it come before current time
    // var convertTime = moment(firstTrain, "HH:MM").subtract(1, "years");

    // var currentTime = moment();
    // $("#current-time").text("CURRENT TIME: " + moment(currentTime).format("HH:mm:ss dddd, MMM D YYYY"));
    // var nextArrival = 
    


    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        // $("<td>").text(frequency),
        // $("<td>").text(),
        // $("<td>").text(),

       
    );
    $("#schedule-table > tbody").append(newRow)
});    
     