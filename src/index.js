module.exports = function warmup(temperature) {
  //your implementation here

   var celsius=temperature;
   var fahrenheit=celsius* 9 / 5 + 32;
   //var message = cel+'\xB0C = ' + fahrenheit + ' \xB0F.';
   //console.log(message);
   return fahrenheit;
};