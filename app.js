
function calculateBmi() {

  var weight = document.querySelector('.weightInput').value;
  var height = document.querySelector('.heightInput').value;

  if(weight > 0 && height > 0){
    var finalBmi = weight/(height/100*height/100);
    document.querySelector('.bmi').textContent = finalBmi.toFixed(1);
      if(finalBmi < 18.5){
      document.querySelector('.text').textContent = "This means that you are too thin."
      }
      if(finalBmi > 18.5 && finalBmi < 25){
      document.querySelector('.text').textContent = "This means that you are healthy."
      }
      if(finalBmi > 25){
      document.querySelector('.text').textContent = "This means that you have overweight."
      }
  }
  else{
  alert("Please Fill in everything correctly")
  }
}
