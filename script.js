// Animated Thermometer


// Convert Farenheit to...
document.getElementById('farInput').addEventListener('input', function(e) {

  // Use Farenheit to convert
  let far = e.target.value;
  
  // Convert to Celsius
  document.getElementById('farToCel').innerHTML = ((5/9)*((far*1)-32)).toFixed(2);
  
  // Convert to Kelvin
  document.getElementById('farToKel').innerHTML = ((5/9)*((far*1)+459.67)).toFixed(2);
  
});

// Convert Celsius to...
document.getElementById('celInput').addEventListener('input', function(e) {
  
  // Use Celsius to convert
  let cel = e.target.value;
  
  // Convert to Farenheit
  document.getElementById('celToFar').innerHTML = ( (cel*1.8) + 32).toFixed(2);
  
  // Convert to Kelvin
  document.getElementById('celToKel').innerHTML = ( (cel*1) + 273.15).toFixed(2);
  
});

// Convert Kelvin to...
document.getElementById('kelInput').addEventListener('input', function(e) {
  
  // Use Kelvin to convert
  let kel = e.target.value;
  
  // Convert to Farenheit
  document.getElementById('kelToFar').innerHTML = ( 1.8*((kel*1)-273) + 32).toFixed(2);
  
  // Convert to Celsius
  document.getElementById('kelToCel').innerHTML = ((kel*1)-273.15).toFixed(2);
  
});