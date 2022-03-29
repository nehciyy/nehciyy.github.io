//HANDLEBAR FOR TUTORIAL PAGE

//HEADER
//INITIALISE VARIABLE TO GET THE CONTENT ID OF SPECIFIC DIV ELEMENT
var header = document.getElementById('headerTutorial1').innerHTML;
//PASS THE INITIALSIED VARIABLE TO HANDLEBAR TEMPLATE
var headerTemplate = Handlebars.compile(header);
//DATA THAT WILL BE PASSED THROUGH
var headerTitle = {
  title: "Tutorial"
};
//PUSH THE DATA VARIABLES BACK TO THE DIV ELEMENT
var post = headerTemplate(headerTitle);
//THEN PUT IT BACK INTO THE ENTIRE CONTENT WRAPPING THE PARTICULAR DIV ELEMENT ALL TOGETHER AS A WHOLE
document.getElementById('headerTutorial').innerHTML = post;

//FRIST VIDEO CONTENT
//INITIALISE VARIABLE TO GET THE CONTENT ID OF SPECIFIC DIV ELEMENT
var ytVid1 = document.getElementById("youTUBEVIDEO1").innerHTML;
//PASS THE INITIALSIED VARIABLE TO HANDLEBAR TEMPLATE
var ytVid1Template = Handlebars.compile(ytVid1);
//DATA THAT WILL BE PASSED THROUGH
var content1 ={
  name1: "MakeUp Tutorial (suitable for dates)",
  types1: "Types: Cute, Pretty full makeup looks",
  videosrc1: "https://www.youtube.com/embed/2UZyx40J6TY",
  videoalt1: "Easy Cute Spring Romance Makeup Tutorial"
}
//PUSH THE DATA VARIABLES BACK TO THE DIV ELEMENT
var post1 = ytVid1Template(content1);
//THEN PUT IT BACK INTO THE ENTIRE CONTENT WRAPPING THE PARTICULAR DIV ELEMENT ALL TOGETHER AS A WHOLE
document.getElementById('video1').innerHTML = post1;

//SECOND VIDEO CONTENT
//INITIALISE VARIABLE TO GET THE CONTENT ID OF SPECIFIC DIV ELEMENT
var ytVid2 = document.getElementById("youTUBEVIDEO2").innerHTML;
//PASS THE INITIALSIED VARIABLE TO HANDLEBAR TEMPLATE
var ytVid2Template = Handlebars.compile(ytVid2);
//DATA THAT WILL BE PASSED THROUGH
var content2 ={
  name2: "MakeUp mistakes to avoid for small eyes",
  types2: "Types: DO's and DON'Ts",
  videosrc2: "https://www.youtube.com/embed/uvfSQpCSO0U",
  videoalt2: "Makeup mistakes to avoid for small eyes"
}
//PUSH THE DATA VARIABLES BACK TO THE DIV ELEMENT
var post2 = ytVid2Template(content2);
//THEN PUT IT BACK INTO THE ENTIRE CONTENT WRAPPING THE PARTICULAR DIV ELEMENT ALL TOGETHER AS A WHOLE
document.getElementById('video2').innerHTML = post2;

//THIRD VIDEO CONTENT
//INITIALISE VARIABLE TO GET THE CONTENT ID OF SPECIFIC DIV ELEMENT
var ytVid3 = document.getElementById("youTUBEVIDEO3").innerHTML;
//PASS THE INITIALSIED VARIABLE TO HANDLEBAR TEMPLATE
var ytVid3Template = Handlebars.compile(ytVid3);
//DATA THAT WILL BE PASSED THROUGH
var content3 ={
  name3: "Eyeliner styles",
  types3: "Types: Tips and Tricks",
  videosrc3: "https://www.youtube.com/embed/wwKv0UM6IwQ",
  videoalt3: "How To: 9 Different Eyeliner Styles on Hooded Eyes| Easy Beginner"
}
//PUSH THE DATA VARIABLES BACK TO THE DIV ELEMENT
var post3 = ytVid3Template(content3);
//THEN PUT IT BACK INTO THE ENTIRE CONTENT WRAPPING THE PARTICULAR DIV ELEMENT ALL TOGETHER AS A WHOLE
document.getElementById('video3').innerHTML = post3;
