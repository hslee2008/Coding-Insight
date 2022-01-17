exports.ids = [19];
exports.modules = {

/***/ 127:
/***/ (function(module, exports) {

//Ana
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'UA-209775586-1'); //speechSynthesis - button

const set = document.querySelector('#setting');
let count = 0;
const speach = document.body.innerText.substring(document.body.innerText.indexOf('클릭') + 4).replace('읽어주기', '');
const butt = document.querySelector('#speakbutt');
butt.addEventListener('click', () => {
  if (count % 2 == 0) {
    try {
      const a = new SpeechSynthesisUtterance(speach);
      a.lang = 'ko-kr';
      a.volume = document.querySelector('#vol').value;
      a.rate = document.querySelector('#rate').value;
      speechSynthesis.speak(a);
      butt.innerText = '멈추기';
    } catch (err) {
      alert(':( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다. 에러 (' + err + ')');
    }

    set.style.display = 'block';
  } else {
    try {
      speechSynthesis.cancel();
      butt.innerText = '읽어주기';
    } catch (err) {
      alert(':( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.');
    }

    set.style.display = 'none';
  }

  count++;
});
window.addEventListener('beforeunload', function (e) {
  speechSynthesis.cancel();
  butt.innerText = '읽어주기';
});
document.querySelector('#vol').addEventListener('change', e => {
  try {
    speechSynthesis.cancel();
    const a = new SpeechSynthesisUtterance(speach);
    a.lang = 'ko-kr';
    a.volume = e.target.value;
    a.rate = document.querySelector('#rate').value;
    speechSynthesis.speak(a);
    butt.innerText = '멈추기';
  } catch (err) {
    alert(':( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.');
  }
});
document.querySelector('#rate').addEventListener('change', e => {
  try {
    speechSynthesis.cancel();
    const a = new SpeechSynthesisUtterance(speach);
    a.lang = 'ko-kr';
    a.volume = document.querySelector('#vol').value;
    a.rate = e.target.value;
    speechSynthesis.speak(a);
    butt.innerText = '멈추기';
  } catch (err) {
    alert(':( 당신의 디바이스의 브라우저에서 읽어주기 기능이 존재하지 않습니다.');
  }
});

window.onerror = function (mes) {
  alert('흠... 버그가 있습니다. 개발자들에게 빨리 알려주세요! - ' + mes);

  if (confirm('메시지를 보내고 싶나요?')) {
    open('https://coding-insight.com/message.html');
  }
}; //title


document.title = document.getElementById('tit').innerText; //Keyboard

document.addEventListener('keydown', e => {
  if (e.ctrlKey) {
    switch (e.code) {
      case 'KeyM':
        document.querySelector('#butty').click();
        break;
    }
  }
});

/***/ })

};;
//# sourceMappingURL=script.js.map