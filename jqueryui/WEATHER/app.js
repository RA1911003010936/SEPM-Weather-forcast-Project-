var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=11bfb808393fcc072f28dad2d27c6144')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp']-273.15;
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Weather Description -> "+descValue;
  temp.innerHTML = "Temp -> "+tempValue.toFixed(2)+" Celcius";
  input.value ="";

  

})

.catch(err => alert("Wrong city name!"));
})