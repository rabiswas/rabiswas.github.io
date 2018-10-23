var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var storedName = '';

myHeading.textContent = 'Hello World !';
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === "images/bald_eagle.jpg") {
        myImage.setAttribute('src', 'images/eagle_eye.jpg');
    } else {
        myImage.setAttribute('src', 'images/bald_eagle.jpg');
    }
}
function setUserName() {
    var myName = prompt('Please enter your name !');
    alert('value of myName ' + myName);
    if (myName === null || myName === "") {
        if (storedName != null) {
            myHeading.textContent = 'Hey ' + storedName + '... JS 1 is cool !'
            return;
        }
        else {
            alert('in anonymous block !!');
            myHeading.textContent = 'Hey Anonymous... JS 2 is cool !'
            return;
        }
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hey ' + myName + '... JS 3 is cool !' ;        
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    /* storedName = localStorage.getItem('name'); */
    myHeading.textContent = 'Hey ' + storedName + '... JS 4 is cool !' ;
}
myButton.onclick = function(){
    setUserName();
}
