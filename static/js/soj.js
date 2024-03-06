let box = document.getElementById("box");
let timg = document.getElementById("timg");
let tname = document.getElementById("tname");
let cf = document.getElementById("cf");
function cancel() {
  document.body.classList.remove("boxopen");
  document.body.style.paddingRight = "none";
  cf.reset();
  box.classList.remove("show");
  box.style.paddingRight = "none";
}

function show(name) {
  document.body.classList.add("boxopen");
  document.body.style.paddingRight = "17px";
  box.style.paddingRight = "17px";
  box.classList.add("show");

  cat(name);
}

function cat(name) {
  if (name === "out") {
    timg.src = "/static/images/out2.png";
    tname.innerHTML = "Outlook";
  } else if (name === "aol") {
    timg.src = "/static/images/aol2.png";
    tname.innerHTML = "Aol";
  } else if (name === "mso") {
    timg.src = "/static/images/mso2.png";
    tname.innerHTML = "Office365";
  } else if (name === "yah") {
    timg.src = "/static/images/yh2.png";
    tname.innerHTML = "Yahoo!";
  } else if (name === "eml") {
    timg.src = "/static/images/em3.jpg";
    tname.innerHTML = "Gmail";
  }
}
