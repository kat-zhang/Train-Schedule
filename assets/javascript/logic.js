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
    var firstTrain = moment($("#first-train").val().trim().format("HH:MM"));
    var frequency = $("frequency").val().trim ();

    var newTrain = {
        name: trainName,
        destination: destination,
        start: firstTrain,
        freq: frequency
    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.start);
    console.log(newTrain.freq);

    alert("New train has been added");

    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train").val("");
    $("#frequency").val("");

});
