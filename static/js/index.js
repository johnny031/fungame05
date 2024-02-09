let n = [];
let r = [];
let x;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
$("#number_button").on("click", function () {
  var x = document.getElementById("number").value;
  if (x < 1 || x > 8) {
    alert("遊戲人數需介於1至8人之間");
    return false;
  } else {
    document.getElementById("number_button").disabled = true;
  }

  for (let i = 0; i < 81; i++) {
    r.push(i);
  }
  shuffle(r);

  var h3 = document.createElement("h3");
  h3.innerHTML = "<br> 玩家名稱：<br>";
  h3.style.fontFamily = "Microsoft JhengHei";
  document.body.appendChild(h3);
  document.querySelector(".container-fluid").appendChild(h3);

  var f = document.createElement("div");
  // f.setAttribute("method", "get");
  f.setAttribute("name", "form_role");
  // f.setAttribute("action", "/main.html");
  // f.setAttribute("onsubmit", "return validateForm()");

  var nameInputContainer = document.createElement("div");
  nameInputContainer.setAttribute("id", "name_input_container");

  for (i = 0; i < x; i++) {
    var input = document.createElement("input");
    input.type = "text";
    input.name = "n";
    input.className = i;
    input.style.display = "block";
    input.style.margin = "10px";
    input.style.padding = "5px";
    nameInputContainer.appendChild(input);
    f.appendChild(nameInputContainer);
  }

  var s = document.createElement("input");

  s.setAttribute("type", "submit");
  s.setAttribute("value", "開始!");
  s.setAttribute("id", "start_btn");
  f.appendChild(s);

  document.getElementsByTagName("body")[0].appendChild(f);
  document.querySelector(".container-fluid").appendChild(f);
});

$("body").on("click", "#start_btn", function () {
  if (validateForm() === false) {
    return false;
  }
  $("input[name='n']").each(function (i) {
    n[i] = this.value;
  });
  x = n.length;

  $("#index_page").hide();
  $("#main_page").show();

  game_start();
});

function validateForm() {
  var nameContainer = document.getElementById("name_input_container");
  var nameInputs = nameContainer.getElementsByTagName("input");
  for (i = 0; i < nameInputs.length; i++) {
    if (nameInputs[i].value === "") {
      alert("玩家名稱請勿空白");
      return false;
    }
  }
}
