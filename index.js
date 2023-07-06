const delay = (ms) => new Promise((res) => setTimeout(res, ms));

var vid = document.getElementById("myVideo");

var english = document.getElementById("english");
var polish = document.getElementById("polish");

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

function playVid() {
  vid.play();
}

function pauseVid() {
  vid.pause();
}

function buttons_off() {
  english.disabled = true;
  polish.disabled = true;
  english.style.pointerEvents = "none";
  polish.style.pointerEvents = "none";
}

const eng = async () => {
  buttons_off();
  english.classList.add("language_link_clicked");
  if ($(window).width() < 900) {
    vid.style.marginLeft = "-100px";
    vid.style.marginTop = "150px";
  } else {
    vid.style.marginLeft = "-500px";
  }
  vid.style.opacity = "1";
  playVid();
  await delay(1900);
  english.style.backgroundColor = "rgba(0, 247, 255, 0.5)";
  document
    .getElementById("language")
    .animate([{ opacity: 1 }, { opacity: 0 }], 1000);
  await delay(1000);
  document.getElementById("language").style.display = "none";
  window.location.href = "index_eng.html";
};

const pl = async () => {
  buttons_off();
  polish.classList.add("language_link_clicked");
  if ($(window).width() < 900) {
    vid.style.marginLeft = "-100px";
    vid.style.marginTop = "400px";
  } else {
    vid.style.marginLeft = "300px";
  }
  vid.style.opacity = "1";
  playVid();
  await delay(1900);
  polish.style.backgroundColor = "rgba(0, 247, 255, 0.5)";
  document
    .getElementById("language")
    .animate([{ opacity: 1 }, { opacity: 0 }], 1000);
  await delay(1000);
  document.getElementById("language").style.display = "none";
  window.location.href = "index_pl.html";
};
