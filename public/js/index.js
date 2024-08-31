function $(id) {
  return document.getElementById(id);
}
function set_color(n, m) {
  let input_color_1 = document.getElementById(n);
  let show_hex = document.querySelector("#" + m);
  input_color_1.addEventListener("input", () => {
    let input_value = input_color_1.value;
    show_hex.innerHTML = input_value;
  });
}
set_color("input-color-1", "show-hex-1");
set_color("input-color-2", "show-hex-2");
set_color("input-color-3", "show-hex-3");
set_color("input-color-4", "show-hex-4");

function change_color(input_id, element_id, style) {
  input_id.addEventListener("input", () => {
    let val = input_id.value;
    element_id.setAttribute("style", style + val + ";");
  });
}
change_color($("input-color-1"), $("componet"), "background-color:");
change_color($("input-color-2"), $("text"), "color:");
change_color($("input-color-3"), $("link"), "background-color:");
change_color($("input-color-4"), $("text-link"), "color:");
{
  $("componet").setAttribute(
    "style",
    "background-color:" + $("input-color-1").value + ";"
  );

  $("text").setAttribute("style", "color:" + $("input-color-2").value + ";");

  $("link").setAttribute(
    "style",
    "background-color:" + $("input-color-3").value + ";"
  );

  $("text-link").setAttribute(
    "style",
    "color:" + $("input-color-4").value + ";"
  );
}
let inputs = document.querySelectorAll(".input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", () => {
    $("reset-btn").classList.remove("opacity-0");
    $("reset-btn").classList.remove("scale-0");
    $("reset-btn").classList.remove("hidden");
    $("reset-btn").setAttribute("style","transform: scale(1) ; opacity:1; display:flex;");
  });
}
