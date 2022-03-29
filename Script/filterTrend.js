// FILTER FOR NEW ARRIVALS
//CHANGE DISPLAY WHEN RESPONSIVE
const mediaQuery = window.matchMedia('(max-width:500px)');
// WHEN CLICK ON FACE ALL THE OTHER PRODUCTS HIDE AND ONLY THE PRODUCT(S) THAT IS/ARE NAME BY CLASS "FACE" WILL SHOW
function showFace() {

  if (mediaQuery.matches) {
    var faceLength = document.getElementsByClassName('face').length;
    for (var m = 0; m < faceLength; m++) {
      document.getElementsByClassName('face')[m].style.display = 'block';
      // document.getElementsByClassName('face')[m].style.transition = "opacity 1s" ;
    }
    document.getElementsByClassName('eyes')[0].style.display = 'none';
    var lipsLength = document.getElementsByClassName('lips').length;
    for (var i = 0; i < lipsLength; i++) {
      document.getElementsByClassName('lips')[i].style.display = 'none';
    }
    var removerLength = document.getElementsByClassName('makeupRemover').length;
    for (var k = 0; k < removerLength; k++) {
      document.getElementsByClassName('makeupRemover')[k].style.display = 'none';
    }
    var skinCareLength = document.getElementsByClassName('skinCare').length;
    for (var j = 0; j < skinCareLength; j++) {
      document.getElementsByClassName('skinCare')[j].style.display = 'none';
    }
  } else {
    var faceLength = document.getElementsByClassName('face').length;
    for (var m = 0; m < faceLength; m++) {
      document.getElementsByClassName('face')[m].style.display = 'grid';
    }
    document.getElementsByClassName('eyes')[0].style.display = 'none';
    var lipsLength = document.getElementsByClassName('lips').length;
    for (var i = 0; i < lipsLength; i++) {
      document.getElementsByClassName('lips')[i].style.display = 'none';
    }
    var removerLength = document.getElementsByClassName('makeupRemover').length;
    for (var k = 0; k < removerLength; k++) {
      document.getElementsByClassName('makeupRemover')[k].style.display = 'none';
    }
    var skinCareLength = document.getElementsByClassName('skinCare').length;
    for (var j = 0; j < skinCareLength; j++) {
      document.getElementsByClassName('skinCare')[j].style.display = 'none';
    }
  }
}
// WHEN CLICK ON EYES ALL THE OTHER PRODUCTS HIDE AND ONLY THE PRODUCT(S) THAT IS/ARE NAME BY CLASS "EYES" WILL SHOW
function showEyes() {

  if (mediaQuery.matches) {
    var faceLength = document.getElementsByClassName('face').length;
    for (var m = 0; m < faceLength; m++) {
      document.getElementsByClassName('face')[m].style.display = 'none';
    }
    document.getElementsByClassName('eyes')[0].style.display = 'block';
    var lipsLength = document.getElementsByClassName('lips').length;
    for (var i = 0; i < lipsLength; i++) {
      document.getElementsByClassName('lips')[i].style.display = 'none';
    }
    var removerLength = document.getElementsByClassName('makeupRemover').length;
    for (var k = 0; k < removerLength; k++) {
      document.getElementsByClassName('makeupRemover')[k].style.display = 'none';
    }
    var skinCareLength = document.getElementsByClassName('skinCare').length;
    for (var j = 0; j < skinCareLength; j++) {
      document.getElementsByClassName('skinCare')[j].style.display = 'none';
    }
  } else {
    var faceLength = document.getElementsByClassName('face').length;
    for (var m = 0; m < faceLength; m++) {
      document.getElementsByClassName('face')[m].style.display = 'none';
    }
    document.getElementsByClassName('eyes')[0].style.display = 'grid';
    var lipsLength = document.getElementsByClassName('lips').length;
    for (var i = 0; i < lipsLength; i++) {
      document.getElementsByClassName('lips')[i].style.display = 'none';
    }
    var removerLength = document.getElementsByClassName('makeupRemover').length;
    for (var k = 0; k < removerLength; k++) {
      document.getElementsByClassName('makeupRemover')[k].style.display = 'none';
    }
    var skinCareLength = document.getElementsByClassName('skinCare').length;
    for (var j = 0; j < skinCareLength; j++) {
      document.getElementsByClassName('skinCare')[j].style.display = 'none';
    }
  }
}
// WHEN CLICK ON LIPS ALL THE OTHER PRODUCTS HIDE AND ONLY THE PRODUCT(S) THAT IS/ARE NAME BY CLASS "LIPS" WILL SHOW
function showLips() {

  if (mediaQuery.matches) {
    var faceLength = document.getElementsByClassName('face').length;
    for (var m = 0; m < faceLength; m++) {
      document.getElementsByClassName('face')[m].style.display = 'none';
    }
    document.getElementsByClassName('eyes')[0].style.display = 'none';
    var lipsLength = document.getElementsByClassName('lips').length;
    for (var i = 0; i < lipsLength; i++) {
      document.getElementsByClassName('lips')[i].style.display = 'block';
    }
    var removerLength = document.getElementsByClassName('makeupRemover').length;
    for (var k = 0; k < removerLength; k++) {
      document.getElementsByClassName('makeupRemover')[k].style.display = 'none';
    }
    var skinCareLength = document.getElementsByClassName('skinCare').length;
    for (var j = 0; j < skinCareLength; j++) {
      document.getElementsByClassName('skinCare')[j].style.display = 'none';
    }
  } else {
    var faceLength = document.getElementsByClassName('face').length;
    for (var m = 0; m < faceLength; m++) {
      document.getElementsByClassName('face')[m].style.display = 'none';
    }
    document.getElementsByClassName('eyes')[0].style.display = 'none';
    var lipsLength = document.getElementsByClassName('lips').length;
    for (var i = 0; i < lipsLength; i++) {
      document.getElementsByClassName('lips')[i].style.display = 'grid';
    }
    var removerLength = document.getElementsByClassName('makeupRemover').length;
    for (var k = 0; k < removerLength; k++) {
      document.getElementsByClassName('makeupRemover')[k].style.display = 'none';
    }
    var skinCareLength = document.getElementsByClassName('skinCare').length;
    for (var j = 0; j < skinCareLength; j++) {
      document.getElementsByClassName('skinCare')[j].style.display = 'none';
    }
  }
}
// WHEN CLICK ON SCENT ALL THE OTHER PRODUCTS HIDE AND ONLY THE PRODUCT(S) THAT IS/ARE NAME BY CLASS "SCENT" WILL SHOW
function showScent(){
  var faceLength = document.getElementsByClassName('face').length;
  for (var m = 0; m < faceLength; m++) {
    document.getElementsByClassName('face')[m].style.display = 'none';
  }
  document.getElementsByClassName('eyes')[0].style.display = 'none';
  var lipsLength = document.getElementsByClassName('lips').length;
  for (var i = 0; i < lipsLength; i++) {
    document.getElementsByClassName('lips')[i].style.display = 'none';
  }
  var removerLength = document.getElementsByClassName('makeupRemover').length;
  for (var k = 0; k < removerLength; k++) {
    document.getElementsByClassName('makeupRemover')[k].style.display = 'none';
  }
  var skinCareLength = document.getElementsByClassName('skinCare').length;
  for (var j = 0; j < skinCareLength; j++) {
    document.getElementsByClassName('skinCare')[j].style.display = 'none';
  }
}
// WHEN CLICK ON REMOVER ALL THE OTHER PRODUCTS HIDE AND ONLY THE PRODUCT(S) THAT IS/ARE NAME BY CLASS "REMOVER" WILL SHOW
function showRemover() {

  if (mediaQuery.matches) {
    var faceLength = document.getElementsByClassName('face').length;
    for (var m = 0; m < faceLength; m++) {
      document.getElementsByClassName('face')[m].style.display = 'none';
    }
    document.getElementsByClassName('eyes')[0].style.display = 'none';
    var lipsLength = document.getElementsByClassName('lips').length;
    for (var i = 0; i < lipsLength; i++) {
      document.getElementsByClassName('lips')[i].style.display = 'none';
    }
    var removerLength = document.getElementsByClassName('makeupRemover').length;
    for (var k = 0; k < removerLength; k++) {
      document.getElementsByClassName('makeupRemover')[k].style.display = 'block';
    }
    var skinCareLength = document.getElementsByClassName('skinCare').length;
    for (var j = 0; j < skinCareLength; j++) {
      document.getElementsByClassName('skinCare')[j].style.display = 'none';
    }
  } else {
    var faceLength = document.getElementsByClassName('face').length;
    for (var m = 0; m < faceLength; m++) {
      document.getElementsByClassName('face')[m].style.display = 'none';
    }
    document.getElementsByClassName('eyes')[0].style.display = 'none';
    var lipsLength = document.getElementsByClassName('lips').length;
    for (var i = 0; i < lipsLength; i++) {
      document.getElementsByClassName('lips')[i].style.display = 'none';
    }
    var removerLength = document.getElementsByClassName('makeupRemover').length;
    for (var k = 0; k < removerLength; k++) {
      document.getElementsByClassName('makeupRemover')[k].style.display = 'grid';
    }
    var skinCareLength = document.getElementsByClassName('skinCare').length;
    for (var j = 0; j < skinCareLength; j++) {
      document.getElementsByClassName('skinCare')[j].style.display = 'none';
    }
  }

}
// WHEN CLICK ON SKINCARE ALL THE OTHER PRODUCTS HIDE AND ONLY THE PRODUCT(S) THAT IS/ARE NAME BY CLASS "SKINCARE" WILL SHOW
function showCare() {

  if (mediaQuery.matches) {
    var faceLength = document.getElementsByClassName('face').length;
    for (var m = 0; m < faceLength; m++) {
      document.getElementsByClassName('face')[m].style.display = 'none';
    }
    document.getElementsByClassName('eyes')[0].style.display = 'none';
    var lipsLength = document.getElementsByClassName('lips').length;
    for (var i = 0; i < lipsLength; i++) {
      document.getElementsByClassName('lips')[i].style.display = 'none';
    }
    var removerLength = document.getElementsByClassName('makeupRemover').length;
    for (var k = 0; k < removerLength; k++) {
      document.getElementsByClassName('makeupRemover')[k].style.display = 'none';
    }
    var skinCareLength = document.getElementsByClassName('skinCare').length;
    for (var j = 0; j < skinCareLength; j++) {
      document.getElementsByClassName('skinCare')[j].style.display = 'block';
    }
  } else {
    var faceLength = document.getElementsByClassName('face').length;
    for (var m = 0; m < faceLength; m++) {
      document.getElementsByClassName('face')[m].style.display = 'none';
    }
    document.getElementsByClassName('eyes')[0].style.display = 'none';
    var lipsLength = document.getElementsByClassName('lips').length;
    for (var i = 0; i < lipsLength; i++) {
      document.getElementsByClassName('lips')[i].style.display = 'none';
    }
    var removerLength = document.getElementsByClassName('makeupRemover').length;
    for (var k = 0; k < removerLength; k++) {
      document.getElementsByClassName('makeupRemover')[k].style.display = 'none';
    }
    var skinCareLength = document.getElementsByClassName('skinCare').length;
    for (var j = 0; j < skinCareLength; j++) {
      document.getElementsByClassName('skinCare')[j].style.display = 'grid';
    }
  }

}
// WHEN CLICK ON ALL, ALL PRODUCTS WILL SHOW
function showAll() {

  if (mediaQuery.matches) {
    var faceLength = document.getElementsByClassName('face').length;
    for (var m = 0; m < faceLength; m++) {
      document.getElementsByClassName('face')[m].style.display = 'block';
    }
    document.getElementsByClassName('eyes')[0].style.display = 'block';
    var lipsLength = document.getElementsByClassName('lips').length;
    for (var i = 0; i < lipsLength; i++) {
      document.getElementsByClassName('lips')[i].style.display = 'block';
    }
    var removerLength = document.getElementsByClassName('makeupRemover').length;
    for (var k = 0; k < removerLength; k++) {
      document.getElementsByClassName('makeupRemover')[k].style.display = 'block';
    }
    var skinCareLength = document.getElementsByClassName('skinCare').length;
    for (var j = 0; j < skinCareLength; j++) {
      document.getElementsByClassName('skinCare')[j].style.display = 'block';


    }
  } else{
    var faceLength = document.getElementsByClassName('face').length;
    for (var m = 0; m < faceLength; m++) {
      document.getElementsByClassName('face')[m].style.display = 'grid';
    }
    document.getElementsByClassName('eyes')[0].style.display = 'grid';
    var lipsLength = document.getElementsByClassName('lips').length;
    for (var i = 0; i < lipsLength; i++) {
      document.getElementsByClassName('lips')[i].style.display = 'grid';
    }
    var removerLength = document.getElementsByClassName('makeupRemover').length;
    for (var k = 0; k < removerLength; k++) {
      document.getElementsByClassName('makeupRemover')[k].style.display = 'grid';
    }
    var skinCareLength = document.getElementsByClassName('skinCare').length;
    for (var j = 0; j < skinCareLength; j++) {
      document.getElementsByClassName('skinCare')[j].style.display = 'grid';
    }
  }
}
