let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/london.jpg') {
      myImage.setAttribute ('src','images/london2.jpg');
    } else {
      myImage.setAttribute ('src','images/london.jpg');
    }
}