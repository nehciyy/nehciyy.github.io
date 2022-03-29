//MAKE SURE THE FIRST LETTER OF NAME WILL BE CAPITALIZED
function firstNameCapital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
//NAME AND COMMENT HANDLEBAR FOR FIRST PRODUCT
function displayComment() {
  var template = document.getElementById('commentTemplate').innerHTML;
  var templatecompile = Handlebars.compile(template);

  var commentinput = document.getElementById('comment');
  var nameinput = document.getElementById('nameofcomment');
  //IF NO NAME AND COMMENT INPUT THEN WILL ALERT TO SHOW THAT BOTH HAVE TO BE FILLED
  if (nameinput.value == "" && commentinput.value == "") {
    new AWN().alert('Your name and comments are not filled.');
  } else {
    //IF NAME IS FILLED
    if (nameinput.value != "") {
      //AND COMMENT IF FILLED THEN WILL PROCEED TO ADD TO EXISTING COMMENT TEMPLATE
      if (commentinput.value != "") {
        var capitalName = firstNameCapital(nameinput.value);
        var array = {
          comment: commentinput.value,
          name: capitalName
        };
        var existing = document.getElementById('usercomentid').innerHTML;
        var output = templatecompile(array) + existing;
        document.getElementById('usercomentid').innerHTML = output;
        //COMMENT SUCCESSFUL POP-UP
        swal({
          title: "Response registered!",
          text: "Thank you for submitting your response!",
          icon: "success",
        });
        nameinput.value = "";
        commentinput.value = "";
        //IF COMMENT HAS NO VALUE WILL ALERT THAT THERE IS NO COMMENT INPUT
      } else {
        new AWN().modal('<b>You have not input a comment.</b><br>Click outside the modal window to close it.');
        name.value = "";
      }
      //IF NAME HAS NO VALUE WILL ALERT THAT THERE IS NO NAME INPUT
    } else {
      new AWN().modal('<b>You have not input your name.</b><br>Click outside the modal window to close it.');
      commentinput.value = "";
    }
  }
}

//NAME AND COMMENT HANDLEBAR FOR SECOND PRODUCT
function displayComment1() {
  var template = document.getElementById('commentTemplate').innerHTML;
  var templatecompile = Handlebars.compile(template);

  var commentinput = document.getElementById('comment1');
  var nameinput = document.getElementById('nameofcomment1');
  //IF NO NAME AND COMMENT INPUT THEN WILL ALERT TO SHOW THAT BOTH HAVE TO BE FILLED
  if (nameinput.value == "" && commentinput.value == "") {
    new AWN().alert('Your name and comments are not filled.');
  } else {
    //IF NAME IS FILLED
    if (nameinput.value != "") {
      //AND COMMENT IF FILLED THEN WILL PROCEED TO ADD TO EXISTING COMMENT TEMPLATE
      if (commentinput.value != "") {
        var capitalName = firstNameCapital(nameinput.value);
        var array = {
          comment: commentinput.value,
          name: capitalName
        };
        var existing = document.getElementById('usercomentid1').innerHTML;
        var output = templatecompile(array) + existing;
        document.getElementById('usercomentid1').innerHTML = output;
        //COMMENT SUCCESSFUL POP-UP
        swal({
          title: "Response registered!",
          text: "Thank you for submitting your response!",
          icon: "success",
        });
        nameinput.value = "";
        commentinput.value = "";
        //IF COMMENT HAS NO VALUE WILL ALERT THAT THERE IS NO COMMENT INPUT
      } else {
        new AWN().modal('<b>You have not input a comment.</b><br>Click outside the modal window to close it.');
        name.value = "";
      }
      //IF NAME HAS NO VALUE WILL ALERT THAT THERE IS NO NAME INPUT
    } else {
      new AWN().modal('<b>You have not input your name.</b><br>Click outside the modal window to close it.');
      commentinput.value = "";
    }
  }
}

//NAME AND COMMENT HANDLEBAR FOR THIRD PRODUCT
function displayComment2() {
  var template = document.getElementById('commentTemplate').innerHTML;
  var templatecompile = Handlebars.compile(template);

  var commentinput = document.getElementById('comment2');
  var nameinput = document.getElementById('nameofcomment2');
  //IF NO NAME AND COMMENT INPUT THEN WILL ALERT TO SHOW THAT BOTH HAVE TO BE FILLED
  if (nameinput.value == "" && commentinput.value == "") {
    new AWN().alert('Your name and comments are not filled.');
  } else {
    //IF NAME IS FILLED
    if (nameinput.value != "") {
      //AND COMMENT IF FILLED THEN WILL PROCEED TO ADD TO EXISTING COMMENT TEMPLATE
      if (commentinput.value != "") {
        var capitalName = firstNameCapital(nameinput.value);
        var array = {
          comment: commentinput.value,
          name: capitalName
        };
        var existing = document.getElementById('usercomentid2').innerHTML;
        var output = templatecompile(array) + existing;
        document.getElementById('usercomentid2').innerHTML = output;
        //COMMENT SUCCESSFUL POP-UP
        swal({
          title: "Response registered!",
          text: "Thank you for submitting your response!",
          icon: "success",
        });
        nameinput.value = "";
        commentinput.value = "";
        //IF COMMENT HAS NO VALUE WILL ALERT THAT THERE IS NO COMMENT INPUT
      } else {
        new AWN().modal('<b>You have not input a comment.</b><br>Click outside the modal window to close it.');
        name.value = "";
      }
      //IF NAME HAS NO VALUE WILL ALERT THAT THERE IS NO NAME INPUT
    } else {
      new AWN().modal('<b>You have not input your name.</b><br>Click outside the modal window to close it.');
      commentinput.value = "";
    }
  }
}
