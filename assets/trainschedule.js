$(".submit").on("click", function(event) {
    event.preventDefault();
    //define variables
    var trainName = "";
    var destination = "";
    var trainTime = 0;
    var frequency = "";
    //attach variables to forms
    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    trainTime = $("trainTime").val().trim();
    frequency = $("#frequency").val().trim();
    database.ref().set({
    //attach to firebase
      trainName: trainName,
      destination: destination,
      trainTime: trainTime,
      frequency: frequency
    //show results in results tab
    .append.innerhtml(results)
    });
  });

  // Firebase watcher + initial loader HINT: .on("value")
  database.ref().on("value", function(snapshot) {
    // Snapshot Log
    console.log(snapshot.val());
    console.log(snapshot.val().trainName);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().frequency);
    console.log(snapshot.val().trainTime);
    // HTML
    $("#trainName").text(snapshot.val().name);
    $("#destination").text(snapshot.val().email);
    $("#trainTime").text(snapshot.val().age);
    $("#frequency").text(snapshot.val().comment);
  })

  $('#clock').moment().format('MMMM Do YYYY, h:mm:ss a').append();