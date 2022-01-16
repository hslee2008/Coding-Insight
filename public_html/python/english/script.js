//ana
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-209775586-1");

//speechSynthesis - button
const set = document.querySelector("#setting");

let count = 0;
const speach = document.body.innerText
  .substring(document.body.innerText.indexOf("Click") + 5)
  .replace("read", "");
const butt = document.querySelector("#speakbutt");
if (butt != null) {
  butt.addEventListener("click", () => {
    if (count % 2 == 0) {
      try {
        speechSynthesis.resume();
        const a = new SpeechSynthesisUtterance(speach);
        a.lang = "en";
        a.volume = document.querySelector("#vol").value;
        a.rate = document.querySelector("#rate").value;
        speechSynthesis.speak(a);
        butt.innerText = "Stop";
      } catch (err) {
        alert(
          ":( You cannot use speechSynthesis API in your browser. Error (" +
            err +
            ")"
        );
      }
      set.style.display = "block";
    } else {
      try {
        speechSynthesis.cancel();
        butt.innerText = "Read";
      } catch (err) {
        alert(":( You cannot use speechSynthesis API in your browser");
      }
      set.style.display = "none";
    }
    count++;
  });
}

window.addEventListener("beforeunload", function (e) {
  speechSynthesis.cancel();
  butt.innerText = "Read";
});

document.querySelector("#vol").addEventListener("change", (e) => {
  try {
    speechSynthesis.cancel();
    const a = new SpeechSynthesisUtterance(speach);
    a.lang = "en";
    a.volume = e.target.value;
    e.rate = document.querySelector("#rate").value;
    speechSynthesis.speak(a);
    butt.innerText = "Stop";
  } catch (err) {
    alert(":( You cannot use speechSynthesis API in your browser");
  }
});

document.querySelector("#rate").addEventListener("change", (e) => {
  try {
    speechSynthesis.cancel();
    const a = new SpeechSynthesisUtterance(speach);
    a.lang = "en";
    a.volume = document.querySelector("#vol").value;
    a.rate = e.target.value;
    speechSynthesis.speak(a);
    butt.innerText = "Stop";
  } catch (err) {
    alert(":( You cannot use speechSynthesis API in your browser");
  }
});

window.onerror = function (mes) {
  alert("There seems to be a bad code. Please tell the developers - " + mes);
  if (confirm("Do you want to send a message?")) {
    open("https://coding-insight.com/message.html");
  }
};

//title
document.title = document.getElementById("tit").innerText;

//Keyboard
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey) {
    switch (e.code) {
      case "KeyM":
        document.querySelector("#butty").click();
        break;
    }
  }
});
