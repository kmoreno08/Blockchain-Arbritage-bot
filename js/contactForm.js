console.log('Yes this is connected')

let opener = document.getElementById("opener");

opener.onclick = function() {

  let lightbox = document.getElementById("lightbox");
  let dimmer =  document.getElementById("dimmer");
  let exit = document.getElementById('exit');
  let btn = document.querySelector('.button');
  let loader = document.querySelector('.loader');
  let check = document.querySelector('.check');


  // Click on anywhere other then the box, will exit
  dimmer.onclick = function() {
    lightbox.style.visibility = 'hidden';
    dimmer.style.visibility = 'hidden'
  }

  // Click the 'X' to exit
  exit.onclick = function(){
    lightbox.style.visibility = 'hidden';
    dimmer.style.visibility = 'hidden'
  }

    
  btn.addEventListener('click', function () {
    loader.classList.add('active');    
    });
   
  loader.addEventListener('animationend', function() {
      check.classList.add('active'); 
    });
  



  // document.body.appendChild(dimmer);

  lightbox.style.visibility = 'visible';
  // lightbox.style.top = window.innerHeight / 2 - 50 + 'px';
  lightbox.style.top = window.innerHeight /2 - 250 + 'px';
  lightbox.style.left = window.innerWidth / 2 - 300 + 'px';
  dimmer.style.visibility = 'visible';
  dimmer.style.position = 'fixed';
  dimmer.style.width = '100%';
  dimmer.style.height = '100%';
  dimmer.style.backgroundColor = 'rgba(2, 1, 17, 0.5)';
  // dimmer.style.opacity = '0.5';
  dimmer.style.zIndex = '199';

  // dimmer.style.top = window.innerHeight / 2 - 50 + 'px';
  // dimmer.style.left = window.innerWidth / 2 - 100 + 'px';
  return false;
}