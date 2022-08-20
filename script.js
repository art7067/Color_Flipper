function tabs() {
  
}


function colorFlipper() {
  const btn = document.querySelector(".btn");
  const color = document.querySelector(".color");
  const arrHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  const btnsFooter = document.querySelectorAll(".btn--footer");

  function getRandomNumber() {
    return Math.floor(Math.random() * arrHex.length);
  }
  getRandomNumber();

  function createRandomColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += arrHex[getRandomNumber()];
    }
    return hexColor;
  }

  btn.addEventListener("click", () => {
    color.innerHTML = createRandomColor();
    document.body.style.background = createRandomColor();
  });

  btnsFooter.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.parentNode.style.background = createRandomColor();
    });
  });
}

colorFlipper();
