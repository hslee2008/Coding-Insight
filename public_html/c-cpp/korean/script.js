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
const speach = document.body.innerText.substring(
  document.body.innerText.indexOf("읽어주기") + 3
);
const butt = document.querySelector("#speakbutt");
butt.addEventListener("click", () => {
  if (count % 2 == 0) {
    try {
      const a = new SpeechSynthesisUtterance(speach);
      a.lang = "ko-kr";
      a.volume = document.querySelector("#vol").value;
      a.rate = document.querySelector("#rate").value;
      speechSynthesis.speak(a);
      butt.innerText = "멈추기";
    } catch (err) {
      alert(
        ":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 (" +
          err +
          ")"
      );
    }
    set.style.display = "block";
  } else {
    try {
      speechSynthesis.cancel();
      butt.innerText = "읽어주기";
    } catch (err) {
      alert(
        ":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 (" +
          err +
          ")"
      );
    }
    set.style.display = "none";
  }
  count++;
});

window.addEventListener("beforeunload", function (e) {
  speechSynthesis.cancel();
  butt.innerText = "읽어주기";
});

document.querySelector("#vol").addEventListener("change", (e) => {
  try {
    speechSynthesis.cancel();
    const a = new SpeechSynthesisUtterance(speach);
    a.lang = "ko-kr";
    a.volume = e.target.value;
    a.rate = document.querySelector("#rate").value;
    speechSynthesis.speak(a);
    butt.innerText = "멈추기";
  } catch (err) {
    alert(
      ":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다."
    );
  }
});

document.querySelector("#rate").addEventListener("change", (e) => {
  try {
    speechSynthesis.cancel();
    const a = new SpeechSynthesisUtterance(speach);
    a.lang = "ko-kr";
    a.volume = document.querySelector("#vol").value;
    a.rate = e.target.value;
    speechSynthesis.speak(a);
    butt.innerText = "멈추기";
  } catch (err) {
    alert(
      ":( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다."
    );
  }
});

//more
const mb = document.querySelector("#more");
let c = 0;
mb.addEventListener("click", () => {
  if (c % 2 == 0) {
    document.querySelector("#quiz").style.display = "block";
    document.querySelector("#feedback").style.display = "block";
    document.querySelector("#video").style.display = "block";
    document.querySelector("#home").style.display = "none";
    document.querySelector("#python").style.display = "none";
    document.querySelector("#clang").style.display = "none";
    document.querySelector("#video").style.display = "block";
    mb.innerHTML = "<a>숨기기</a>";
  } else {
    document.querySelector("#quiz").style.display = "none";
    document.querySelector("#feedback").style.display = "none";
    document.querySelector("#video").style.display = "none";
    document.querySelector("#home").style.display = "block";
    document.querySelector("#python").style.display = "block";
    document.querySelector("#clang").style.display = "block";
    document.querySelector("#video").style.display = "none";
    mb.innerHTML = "<a>더보기</a>";
  }
  c++;
});

window.onerror = function (mes) {
  alert("흠... 버그가 있습니다. 개발자들에게 빨리 알려주세요! - " + mes);
  if (confirm("메시지를 보내고 싶나요?")) {
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
