function plotPoint() {

  var x0 = parseInt(document.getElementById('x0').value);
  var y0 = parseInt(document.getElementById('y0').value);
  var x = parseInt(document.getElementById('x').value);
  var y = parseInt(document.getElementById('y').value);

  var in1 = document.getElementById('in1');
  var out1 = document.getElementById('out1');

  in1.innerHTML = x0 + " " + y0 + " " + x + " " + y;

  var point = document.createElement('div');  
  point.className = 'point';

  point.style.left = (x - x0 + 200 - 5) + 'px';
  point.style.bottom = (y - y0 + 200 - 5) + 'px';

  document.getElementById('coordinatePlane').appendChild(point);

  if (x === x0 || y === y0){
    out1.innerHTML = "divisa";
  }
  else if (x > x0 && y > y0){
    out1.innerHTML = "NE";
  }
  else if (x < x0 && y > y0){
    out1.innerHTML = "NO";
  }
  else if (x > x0 && y < y0){
    out1.innerHTML = "SE";
  }
  else if (x < x0 && y < y0){
    out1.innerHTML = "SO";
  }
}