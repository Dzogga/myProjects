function push() {
    
    var elem = document.getElementById("box1");
    var elem1 = document.getElementById("box2");
    var elem2 = document.getElementById("box3");
    var top = 300;
    var id = setInterval(frame, 20);

    function frame() {
      if (top == 100) {
        top = 500;
      } else {
        top--; 
        elem.style.top = top + 'px';
        elem1.style.top = top + 'px';
        elem2.style.top = top + 'px';
      }
    }
  }