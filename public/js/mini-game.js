function $(id) {
  return document.getElementById(id);
}

$("btn-start").onclick = function () {
  $("bg-start").setAttribute("style", "display:none;");
  $("bg-game").setAttribute("style", "display:flex;");
  $("bg-score").setAttribute("style", "display:flex;");
};
let boxs = document.querySelectorAll(".box");
n = 0;
for (let i = 0; i < boxs.length; i++) {
  boxs[i].onclick = function () {
    $("reset-game").setAttribute("style","display:inline-block;")
    num = this.firstChild.nodeValue;
    $("chose-number").innerHTML = num;
    let i = 0;
    let randomInterval = setInterval(() => {
      let random_number = Math.floor(Math.random() * 9) + 1;
      $("random-number").innerHTML = "<span>=</span>" + random_number;
      i++;

      if (i == 100) {
        clearInterval(randomInterval);

        if ($("chose-number").firstChild.nodeValue == random_number) {
          $("resultTrue").setAttribute("style", "display:inline-flex");
          $("resultFalse").setAttribute("style", "display:none");
          n += 10;
          $("score").innerHTML = n;
          this.setAttribute("style", "background-color:#4ade80 ;");
        } else {
          $("resultFalse").setAttribute("style", "display:inline-flex;");
          $("resultTrue").setAttribute("style", "display:none;");
          this.setAttribute("style", "background-color:#f87171 ;");
        }
      }
    }, 20);
  };
}
