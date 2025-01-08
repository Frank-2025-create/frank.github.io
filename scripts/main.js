//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";
/*let myVariable=[1,'Nihao','test1'];
myHeading.textContent = myVariable[0]
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("我最喜欢巧克力冰淇淋了！");
} else {
  alert("但是巧克力才是我的最爱呀……");
}
let myVariable = document.querySelector("h1");

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
  

document.querySelector("html").addEventListener("click", function () {alert("别戳我，我怕疼！"); });*/
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  myButton.onclick = function () {
    setUserName();
  };
  


