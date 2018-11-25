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

$("#add-train").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#train-name").val().trim();
    var destination =$("#destination").val().trim();
    var trainArrival = $("#train-arrival").val().trim();
    var waitTime = $("#wait-time").val().trim();

    var newTrain = {
        name: trainName,
        destination: destination,
        first: trainArrival,
        frequency: waitTime
    };

 // push to firebase 
    database.ref().push(newTrain);

    alert("New train has been added");
 //empties input boxes after info submitted
    $("#train-name").val("");
    $("#destination").val("");
    $("#train-arrival").val("");
    $("#wait-time").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function (childSnapshot) {
  

    var trainName = childSnapshot.val().name;
    var destination =childSnapshot.val().destination;
    var trainArrival = childSnapshot.val().first;
    var waitTime = childSnapshot.val().frequency;
 
    var convertTrainArrival = moment(trainArrival, "HH:mm").subtract(1, "years");
    var diffTime = moment().diff(moment(convertTrainArrival), "minutes");
    var tRemainder = diffTime % waitTime;
    var tMinutesTillTrain = waitTime - tRemainder;
    var nextTrain = moment(convertTrainArrival).add(tMinutesTillTrain, "minutes");


    var newRow = $("<tr>").prepend(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(waitTime),
        $("<td>").text(moment(nextTrain).format("HH:mm")),
    );

    // Append the new row to the table
    $("#employee-table > tbody").append(newRow);
});