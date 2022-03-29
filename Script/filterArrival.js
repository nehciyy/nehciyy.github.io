// FILTER FOR NEW ARRIVALS
// WHEN CLICK ON FACE ALL THE OTHER PRODUCTS HIDE AND ONLY THE PRODUCT(S) THAT IS/ARE NAME BY CLASS "FACE" WILL SHOW
function showFace(){
  var faceLength = document.getElementsByClassName('face').length;
  for(var k=0;k<faceLength;k++){
    document.getElementsByClassName('face')[0].style.display='grid';
  }
  document.getElementsByClassName('lips')[0].style.display='none';
  var scentLength = document.getElementsByClassName('scent').length;
  for(var i=0;i<scentLength;i++){
      document.getElementsByClassName('scent')[i].style.display='none';
  }
  var skinCareLength = document.getElementsByClassName('skinCare').length;
  for(var j=0;j<skinCareLength;j++){
    document.getElementsByClassName('skinCare')[j].style.display='none';
  }
}
// WHEN CLICK ON EYES ALL THE OTHER PRODUCTS HIDE AND ONLY THE PRODUCT(S) THAT IS/ARE NAME BY CLASS "EYES" WILL SHOW
function showEyes(){
  document.getElementsByClassName('face')[0].style.display='none';
  document.getElementsByClassName('lips')[0].style.display='none';
  var scentLength = document.getElementsByClassName('scent').length;
  for(var i=0;i<scentLength;i++){
      document.getElementsByClassName('scent')[i].style.display='none';
  }
  var skinCareLength = document.getElementsByClassName('skinCare').length;
  for(var j=0;j<skinCareLength;j++){
    document.getElementsByClassName('skinCare')[j].style.display='none';
  }
}
// WHEN CLICK ON LIPS ALL THE OTHER PRODUCTS HIDE AND ONLY THE PRODUCT(S) THAT IS/ARE NAME BY CLASS "LIPS" WILL SHOW
function showLips(){
  document.getElementsByClassName('face')[0].style.display='none';
  document.getElementsByClassName('lips')[0].style.display='grid';
  var scentLength = document.getElementsByClassName('scent').length;
  for(var i=0;i<scentLength;i++){
      document.getElementsByClassName('scent')[i].style.display='none';
  }
  var skinCareLength = document.getElementsByClassName('skinCare').length;
  for(var j=0;j<skinCareLength;j++){
    document.getElementsByClassName('skinCare')[j].style.display='none';
  }
}
// WHEN CLICK ON SCENT ALL THE OTHER PRODUCTS HIDE AND ONLY THE PRODUCT(S) THAT IS/ARE NAME BY CLASS "SCENT" WILL SHOW
function showScent(){
  document.getElementsByClassName('face')[0].style.display='none';
  document.getElementsByClassName('lips')[0].style.display='none';
  var scentLength = document.getElementsByClassName('scent').length;
  for(var i=0;i<scentLength;i++){
      document.getElementsByClassName('scent')[i].style.display='grid';
  }
  var skinCareLength = document.getElementsByClassName('skinCare').length;
  for(var j=0;j<skinCareLength;j++){
    document.getElementsByClassName('skinCare')[j].style.display='none';
  }
}
// WHEN CLICK ON REMOVER ALL THE OTHER PRODUCTS HIDE AND ONLY THE PRODUCT(S) THAT IS/ARE NAME BY CLASS "REMOVER" WILL SHOW
function showRemover(){
  document.getElementsByClassName('face')[0].style.display='none';
  document.getElementsByClassName('lips')[0].style.display='none';
  var scentLength = document.getElementsByClassName('scent').length;
  for(var i=0;i<scentLength;i++){
      document.getElementsByClassName('scent')[i].style.display='none';
  }
  var skinCareLength = document.getElementsByClassName('skinCare').length;
  for(var j=0;j<skinCareLength;j++){
    document.getElementsByClassName('skinCare')[j].style.display='none';
  }
}
// WHEN CLICK ON SKINCARE ALL THE OTHER PRODUCTS HIDE AND ONLY THE PRODUCT(S) THAT IS/ARE NAME BY CLASS "SKINCARE" WILL SHOW
function showCare(){
  document.getElementsByClassName('face')[0].style.display='none';
  document.getElementsByClassName('lips')[0].style.display='none';
  var scentLength = document.getElementsByClassName('scent').length;
  for(var i=0;i<scentLength;i++){
      document.getElementsByClassName('scent')[i].style.display='none';
  }
  var skinCareLength = document.getElementsByClassName('skinCare').length;
  for(var j=0;j<skinCareLength;j++){
    document.getElementsByClassName('skinCare')[j].style.display='grid';
  }
}
// WHEN CLICK ON ALL, ALL PRODUCTS WILL SHOW
function showAll(){
  document.getElementsByClassName('face')[0].style.display='grid';
  document.getElementsByClassName('lips')[0].style.display='grid';
  var scentLength = document.getElementsByClassName('scent').length;
  for(var i=0;i<scentLength;i++){
      document.getElementsByClassName('scent')[i].style.display='grid';
  }
  var skinCareLength = document.getElementsByClassName('skinCare').length;
  for(var j=0;j<skinCareLength;j++){
    document.getElementsByClassName('skinCare')[j].style.display='grid';
  }
}
