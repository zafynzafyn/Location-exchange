var swap=document.querySelector('.swap'); 

swap.addEventListener("click", ()=> {
  swap.classList.toggle('swap-rotation');
  var firstlocation=document.getElementById('first-location');
  var secondtlocation=document.getElementById('second-location');
  var value; 
  value = secondtlocation.value; 
  secondtlocation.value = firstlocation.value; 
  firstlocation.value =value; 
});
