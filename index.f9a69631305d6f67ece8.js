(()=>{"use strict";var e={463:(e,s,a)=>{a.r(s)},344:(e,s,a)=>{a.r(s)},940:function(e,s,a){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});const o=t(a(700)),c=new(t(a(794)).default),[r,l]=c.getData();s.default=class{constructor(){this.data="",this.language="",this.container=document.body,this.display="",this.keyboard="",this.caps=""}keyboardPage(e=this.data,s=this.language){return new o.default(e,s)}setLocalStorage(e=this.language){localStorage.setItem("language",JSON.stringify(e))}getLocalStorage(){const e=JSON.parse(localStorage.getItem("language"));return this.language=e,e}updateDataAndLang(e,s){this.data=e,this.language=s}renderNewPage(){const e=this.keyboardPage(this.data,this.language).render();this.container.append(e)}updateKeyboard(e,s=this.data){const a=document.querySelector(".keyboard");a.innerHTML="";const t=this.keyboardPage(s,e).generateKeyboard();a.append(t),this.keyboard=a}capsLock(){const e=e=>e.map((e=>("key letter"===e.className&&e.key&&(e.key===e.key.toUpperCase()?e.key=e.key.toLowerCase():e.key=e.key.toUpperCase()),"key caps-lock"===e.className?e.className="key caps-lock focused":"key caps-lock focused"===e.className&&(e.className="key caps-lock"),e))),s=e(l),a=e(r),t="ENG"===this.language?a:s;this.updateKeyboard(this.language,t)}switchLanguage(){if("ENG"===this.language){this.language="RU";const e="ENG"===this.language?r:l;this.updateDataAndLang(e,this.language),this.updateKeyboard(this.language,this.data)}else if("RU"===this.language){this.language="ENG";const e="ENG"===this.language?r:l;this.updateDataAndLang(e,this.language),this.updateKeyboard(this.language,this.data)}return this.language}printKeys(e,s,a){this.display=document.querySelector("#textarea");let t=this.display.selectionStart;const o=this.display.value.slice(0,t),c=this.display.value.slice(t);let r;const l=this.display.selectionStart,y=this.display.selectionEnd;r=l===y?null:this.display.value.slice(l,y);const i=(e,s,a)=>{if(e)this.display.setRangeText(r=s);else if("backspace"===a)this.display.value=o.slice(0,-1)+c;else if("delete"===a)this.display.value=o+c.slice(1);else{const e=document.querySelector("#ShiftLeft"),a=document.querySelector("#CapsLock");a.classList.contains("focused")?e.classList.contains("active")?this.display.value=`${o}${s.toLowerCase()}${c}`:this.display.value=`${o}${s.toUpperCase()}${c}`:a.classList.contains("focused")||(e.classList.contains("active")?this.display.value=`${o}${s.toUpperCase()}${c}`:this.display.value=`${o}${s.toLowerCase()}${c}`)}};switch(e){case"CapsLock":this.capsLock();document.querySelector("#CapsLock").classList.add("active");break;case"Backspace":i(r,"","backspace"),t-=1;break;case"Delete":i(r,"","delete");break;case"Enter":i(!1,"\n"),t+=1;break;case"Tab":i(r,"\t"),t+=1;break;case"Space":i(r," "),t+=1;break;case"ArrowLeft":t=t-1>=0?t-1:0;break;case"ArrowRight":t+=1;break;case"ArrowDown":{const e=c.split("\n"),s=e.length-(e.length-1);if(!e[s])return;t+=e[s].length+1;break}case"ArrowUp":{const e=o.split("\n");let s=e.length-1;s>=1&&(t-=e[s].length+1,s-=1);break}case"ShiftLeft":case"ShiftRight":{const e=document.querySelectorAll(".letter");"shift"===a&&e.forEach((e=>{e.classList.add("upperCase")}));break}case"AltLeft":case"AltRight":if("shift"===a){document.querySelector("#AltLeft").classList.add("active"),setTimeout((()=>{const e=this.switchLanguage();this.setLocalStorage(e)}),150)}break;case"ControlLeft":case"ControlRight":case"MetaLeft":case"MetaRight":break;default:i(!1,s),t+=1}this.display.focus(),this.display.setSelectionRange(t,t)}dataKeyboardEvent(e,s){this.data.forEach((a=>{let t="";if(e.code===a.code){const o=document.querySelector(`#${a.code}`);o.classList.add("active"),"add"===s?e.shiftKey?(t=o.classList.contains("letter")?a.key.toUpperCase()||a.key__first:a.key||a.key__first,this.printKeys(a.code,t,"shift")):e.ctrlKey?(t=a.key||a.key__second,this.printKeys(a.code,t,"ctrl")):(t=a.key||a.key__second,this.printKeys(a.code,t)):o.classList.remove("active")}const o=12===[...e.path].length?[...e.path][0].id:[...e.path][1].id;if(a.code===o){const c=document.querySelector(`#${a.code}`);c.classList.add("active"),t=a.key||a.key__second,"add"===s?e.shiftKey||"ShiftLeft"===o||"ShiftRight"===o?(t=c.classList.contains("letter")?a.key.toUpperCase()||a.key__first:a.key||a.key__first,this.printKeys(a.code,t,"shift")):this.printKeys(a.code,t):c.classList.remove("active")}}))}checkCapsLock(e,s){const a=document.querySelector("#CapsLock");this.caps=a,e.forEach((e=>{"add"===s&&a.classList.contains("focused")&&e.classList.add("lowerCase"),"del"===s&&(a.classList.contains("focused")&&e.classList.remove("lowerCase"),e.classList.remove("upperCase"))}))}addListeners(){window.addEventListener("keydown",(e=>{const s=document.querySelectorAll(".letter");e.preventDefault(),this.dataKeyboardEvent(e,"add"),"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||this.checkCapsLock(s,"add")})),window.addEventListener("keyup",(e=>{const s=document.querySelectorAll(".letter");"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||this.checkCapsLock(s,"del"),this.dataKeyboardEvent(e)})),window.addEventListener("mousedown",(e=>{this.dataKeyboardEvent(e,"add");const s=12===[...e.path].length?[...e.path][0].id:[...e.path][1].id,a=document.querySelectorAll(".letter");"ShiftLeft"!==s&&"ShiftRight"!==s||this.checkCapsLock(a,"add")})),window.addEventListener("mouseup",(e=>{this.dataKeyboardEvent(e);const s=12===[...e.path].length?[...e.path][0].id:[...e.path][1].id,a=document.querySelectorAll(".letter");"ShiftLeft"!==s&&"ShiftRight"!==s||this.checkCapsLock(a,"del")}))}run(){const e=this.getLocalStorage()||"ENG",s="ENG"===e?r:l;this.updateDataAndLang(s,e),this.renderNewPage(),this.addListeners()}}},794:function(e,s,a){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});const o=t(a(513)),c=t(a(70));s.default=class{constructor(e){this.language=e,this.eng=o.default,this.ru=c.default}getData(){return[this.eng.map((e=>("key letter"===e.className&&e.key&&(e.key=e.key.toLowerCase()),e))),this.ru.map((e=>("key letter"===e.className&&e.key&&(e.key=e.key.toLowerCase()),e)))]}}},700:function(e,s,a){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0});const o=t(a(709));class c extends o.default{constructor(e,s){super(e,s),this.data=e,this.language=s,this.contentContainer=document.createElement("div"),this.textArea=document.createElement("textarea"),this.keyboard=document.createElement("div")}generateContent(){return this.contentContainer.classList.add("content__container"),this.keyboard.classList.add("keyboard"),this.contentContainer}generateTextArea(){return this.textArea.classList.add("content__textarea"),this.textArea.id="textarea",this.textArea.placeholder="\n    Virtual Keyboard for Windows\n    Shift + Alt shortcut to change the keyboard language",this.textArea}generateKeyboard(){const e=document.createElement("div");e.classList.add("keyboard__container");let s="";if(this.data)for(let e=1;e<=5;e+=1)s+='<div class="row">',s+=`${this.data.map((s=>s.row===e?`\n              <div class="${s.className}" id="${s.code}">\n              ${s.key?s.key:`\n              <div class="${s.firstClassName}">${s.key__first}</div>\n              <div class="${s.secondClassName}">${s.key__second}</div>`}\n              </div>`:null)).join("")}`,s+="</div>";return e.innerHTML=s,e}render(){const e=this.generateContent();return this.keyboard.append(this.generateKeyboard()),e.append(this.generateTextArea()),e.append(this.keyboard),this.createHeader(),this.createContent(e),this.createFooter(),this.wrapper}}s.default=c},709:(e,s)=>{Object.defineProperty(s,"__esModule",{value:!0});s.default=class{constructor(){this.wrapper=document.createElement("div"),this.wrapper.classList.add("wrapper"),this.header=document.createElement("header"),this.header.classList.add("header"),this.main=document.createElement("main"),this.main.className="main",this.footer=document.createElement("footer"),this.footer.classList.add("footer")}createHeader(){this.wrapper.append(this.header)}createContent(e){const s=document.createElement("section");s.className="content",s.append(e),this.main.append(s),this.wrapper.append(this.main)}createFooter(){let e="";e+='<div class="footer__container">',e+='<div class="footer__logo">',e+='<a href="https://rs.school/">',e+='<div class="school-logo"></div>',e+="</a>",e+="</div>",e+='<div class="footer__author">Copyright 2022, Original',e+='<a href="https://github.com/Ainswrg"> Jaslan D</a>',e+="</div>",e+="</div>",this.footer.innerHTML='<div class="footer__container"><div class="footer__logo"><a href="https://rs.school/"><div class="school-logo"></div></a></div><div class="footer__author">Copyright 2022, Original<a href="https://github.com/Ainswrg"> Jaslan D</a></div></div>',this.wrapper.append(this.footer)}render(){return this.wrapper}}},53:function(e,s,a){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(s,"__esModule",{value:!0}),a(463),a(344);const o=t(a(940));window.onload=()=>{(new o.default).run()}},513:e=>{e.exports=JSON.parse('[{"row":1,"className":"key","key":false,"key__first":"~","firstClassName":"key__first","key__second":"`","secondClassName":"key__second","code":"Backquote"},{"row":1,"className":"key","key":false,"key__first":"!","firstClassName":"key__first","key__second":"1","secondClassName":"key__second","code":"Digit1"},{"row":1,"className":"key","key":false,"key__first":"@","firstClassName":"key__first","key__second":"2","secondClassName":"key__second","code":"Digit2"},{"row":1,"className":"key","key":false,"key__first":"#","firstClassName":"key__first","key__second":"3","secondClassName":"key__second","code":"Digit3"},{"row":1,"className":"key","key":false,"key__first":"$","firstClassName":"key__first","key__second":"4","secondClassName":"key__second","code":"Digit4"},{"row":1,"className":"key","key":false,"key__first":"%","firstClassName":"key__first","key__second":"5","secondClassName":"key__second","code":"Digit5"},{"row":1,"className":"key","key":false,"key__first":"^","firstClassName":"key__first","key__second":"6","secondClassName":"key__second","code":"Digit6"},{"row":1,"className":"key","key":false,"key__first":"&","firstClassName":"key__first","key__second":"7","secondClassName":"key__second","code":"Digit7"},{"row":1,"className":"key","key":false,"key__first":"*","firstClassName":"key__first","key__second":"8","secondClassName":"key__second","code":"Digit8"},{"row":1,"className":"key","key":false,"key__first":"(","firstClassName":"key__first","key__second":"9","secondClassName":"key__second","code":"Digit9"},{"row":1,"className":"key","key":false,"key__first":")","firstClassName":"key__first","key__second":"0","secondClassName":"key__second","code":"Digit0"},{"row":1,"className":"key","key":false,"key__first":"_","firstClassName":"key__first","key__second":"-","secondClassName":"key__second","code":"Minus"},{"row":1,"className":"key","key":false,"key__first":"+","firstClassName":"key__first","key__second":"=","secondClassName":"key__second","code":"Equal"},{"row":1,"className":"key backspace","key":"⟵","code":"Backspace"},{"row":2,"className":"key tab","key":"Tab","code":"Tab"},{"row":2,"className":"key letter","key":"Q","code":"KeyQ"},{"row":2,"className":"key letter","key":"W","code":"KeyW"},{"row":2,"className":"key letter","key":"E","code":"KeyE"},{"row":2,"className":"key letter","key":"R","code":"KeyR"},{"row":2,"className":"key letter","key":"T","code":"KeyT"},{"row":2,"className":"key letter","key":"Y","code":"KeyY"},{"row":2,"className":"key letter","key":"U","code":"KeyU"},{"row":2,"className":"key letter","key":"I","code":"KeyI"},{"row":2,"className":"key letter","key":"O","code":"KeyO"},{"row":2,"className":"key letter","key":"P","code":"KeyP"},{"row":2,"className":"key letter","key":false,"key__first":"{","firstClassName":"key__first","key__second":"[","secondClassName":"key__second","code":"BracketLeft"},{"row":2,"className":"key letter","key":false,"keyRU":"Ъ","key__first":"}","firstClassName":"key__first","key__second":"]","secondClassName":"key__second","code":"BracketRight"},{"row":2,"className":"key","key":"DEL","keyRU":"DEL","code":"Delete"},{"row":3,"className":"key caps-lock","key":"⇪","code":"CapsLock"},{"row":3,"className":"key letter","key":"A","code":"KeyA"},{"row":3,"className":"key letter","key":"S","code":"KeyS"},{"row":3,"className":"key letter","key":"D","code":"KeyD"},{"row":3,"className":"key letter","key":"F","code":"KeyF"},{"row":3,"className":"key letter","key":"G","code":"KeyG"},{"row":3,"className":"key letter","key":"H","code":"KeyH"},{"row":3,"className":"key letter","key":"J","code":"KeyJ"},{"row":3,"className":"key letter","key":"K","code":"KeyK"},{"row":3,"className":"key letter","key":"L","code":"KeyL"},{"row":3,"className":"key","key":false,"key__first":":","firstClassName":"key__first","key__second":";","secondClassName":"key__second","code":"Semicolon"},{"row":3,"className":"key","key":false,"key__first":"\\"","firstClassName":"key__first","key__second":"\'","secondClassName":"key__second","code":"Quote"},{"row":3,"className":"key","key":false,"key__first":"|","firstClassName":"key__first","key__second":"\\\\","secondClassName":"key__second","code":"Backslash"},{"row":3,"className":"key enter","key":"↵","code":"Enter"},{"row":4,"className":"key shift","key":"⇧ Shift","code":"ShiftLeft"},{"row":4,"className":"key letter","key":"Z","code":"KeyZ"},{"row":4,"className":"key letter","key":"X","code":"KeyX"},{"row":4,"className":"key letter","key":"C","code":"KeyC"},{"row":4,"className":"key letter","key":"V","code":"KeyV"},{"row":4,"className":"key letter","key":"B","code":"KeyB"},{"row":4,"className":"key letter","key":"N","code":"KeyN"},{"row":4,"className":"key letter","key":"M","code":"KeyM"},{"row":4,"className":"key letter","key":false,"key__first":"<","firstClassName":"key__first","key__second":",","secondClassName":"key__second","code":"Comma"},{"row":4,"className":"key letter","key":false,"keyRU":"Ю","key__first":">","firstClassName":"key__first","key__second":".","secondClassName":"key__second","code":"Period"},{"row":4,"className":"key","key":false,"keyRU":false,"key__first":"?","firstClassName":"key__first","key__second":"/","secondClassName":"key__second","code":"Slash"},{"row":4,"className":"key","key":"&#9650;","code":"ArrowUp"},{"row":4,"className":"key shift","key":"⇧ Shift","code":"ShiftRight"},{"row":5,"className":"key","key":"Ctrl","code":"ControlLeft"},{"row":5,"className":"key","key":"Win","code":"MetaLeft"},{"row":5,"className":"key","key":"Alt","code":"AltLeft"},{"row":5,"className":"key space","key":"Space","code":"Space"},{"row":5,"className":"key","key":"Alt","code":"AltRight"},{"row":5,"className":"key","key":"Win","code":"MetaRight"},{"row":5,"className":"key","key":"&#10096;","code":"ArrowLeft"},{"row":5,"className":"key","key":"&#9660;","code":"ArrowDown"},{"row":5,"className":"key","key":"&#10097;","code":"ArrowRight"},{"row":5,"className":"key","key":"Ctrl","code":"ControlRight"}]')},70:e=>{e.exports=JSON.parse('[{"row":1,"className":"key","key":false,"key__first":"Ё","firstClassName":"key__first","key__second":"ё","secondClassName":"key__second","code":"Backquote"},{"row":1,"className":"key","key":false,"key__first":"!","firstClassName":"key__first","key__second":"1","secondClassName":"key__second","code":"Digit1"},{"row":1,"className":"key","key":false,"key__first":"\\"","firstClassName":"key__first","key__second":"2","secondClassName":"key__second","code":"Digit2"},{"row":1,"className":"key","key":false,"key__first":"№","firstClassName":"key__first","key__second":"3","secondClassName":"key__second","code":"Digit3"},{"row":1,"className":"key","key":false,"key__first":";","firstClassName":"key__first","key__second":"4","secondClassName":"key__second","code":"Digit4"},{"row":1,"className":"key","key":false,"key__first":"%","firstClassName":"key__first","key__second":"5","secondClassName":"key__second","code":"Digit5"},{"row":1,"className":"key","key":false,"key__first":":","firstClassName":"key__first","key__second":"6","secondClassName":"key__second","code":"Digit6"},{"row":1,"className":"key","key":false,"key__first":"?","firstClassName":"key__first","key__second":"7","secondClassName":"key__second","code":"Digit7"},{"row":1,"className":"key","key":false,"key__first":"*","firstClassName":"key__first","key__second":"8","secondClassName":"key__second","code":"Digit8"},{"row":1,"className":"key","key":false,"key__first":"(","firstClassName":"key__first","key__second":"9","secondClassName":"key__second","code":"Digit9"},{"row":1,"className":"key","key":false,"key__first":")","firstClassName":"key__first","key__second":"0","secondClassName":"key__second","code":"Digit0"},{"row":1,"className":"key","key":false,"key__first":"_","firstClassName":"key__first","key__second":"-","secondClassName":"key__second","code":"Minus"},{"row":1,"className":"key","key":false,"key__first":"+","firstClassName":"key__first","key__second":"=","secondClassName":"key__second","code":"Equal"},{"row":1,"className":"key backspace","key":"⟵","code":"Backspace"},{"row":2,"className":"key tab","key":"Tab","code":"Tab"},{"row":2,"className":"key letter","key":"Й","code":"KeyQ"},{"row":2,"className":"key letter","key":"Ц","code":"KeyW"},{"row":2,"className":"key letter","key":"У","code":"KeyE"},{"row":2,"className":"key letter","key":"К","code":"KeyR"},{"row":2,"className":"key letter","key":"Е","code":"KeyT"},{"row":2,"className":"key letter","key":"Н","code":"KeyY"},{"row":2,"className":"key letter","key":"Г","code":"KeyU"},{"row":2,"className":"key letter","key":"Ш","code":"KeyI"},{"row":2,"className":"key letter","key":"Щ","code":"KeyO"},{"row":2,"className":"key letter","key":"З","code":"KeyP"},{"row":2,"className":"key letter","key":"Х","firstClassName":"key__first","secondClassName":"key__second","code":"BracketLeft"},{"row":2,"className":"key letter","key":"Ъ","firstClassName":"key__first","secondClassName":"key__second","code":"BracketRight"},{"row":2,"className":"key","key":"DEL","code":"Delete"},{"row":3,"className":"key caps-lock","key":"⇪","code":"CapsLock"},{"row":3,"className":"key letter","key":"Ф","code":"KeyA"},{"row":3,"className":"key letter","key":"Ы","code":"KeyS"},{"row":3,"className":"key letter","key":"В","code":"KeyD"},{"row":3,"className":"key letter","key":"А","code":"KeyF"},{"row":3,"className":"key letter","key":"П","code":"KeyG"},{"row":3,"className":"key letter","key":"Р","code":"KeyH"},{"row":3,"className":"key letter","key":"О","code":"KeyJ"},{"row":3,"className":"key letter","key":"Л","code":"KeyK"},{"row":3,"className":"key letter","key":"Д","code":"KeyL"},{"row":3,"className":"key letter","key":"Ж","key__first":":","firstClassName":"key__first","key__second":";","secondClassName":"key__second","code":"Semicolon"},{"row":3,"className":"key letter","key":"Э","key__first":"\\"","firstClassName":"key__first","key__second":"\'","secondClassName":"key__second","code":"Quote"},{"row":3,"className":"key","key":false,"key__first":"|","firstClassName":"key__first","key__second":"\\\\","secondClassName":"key__second","code":"Backslash"},{"row":3,"className":"key enter","key":"↵","code":"Enter"},{"row":4,"className":"key shift","key":"⇧ Shift","code":"ShiftLeft"},{"row":4,"className":"key letter","key":"Я","code":"KeyZ"},{"row":4,"className":"key letter","key":"Ч","code":"KeyX"},{"row":4,"className":"key letter","key":"С","code":"KeyC"},{"row":4,"className":"key letter","key":"М","code":"KeyV"},{"row":4,"className":"key letter","key":"И","code":"KeyB"},{"row":4,"className":"key letter","key":"Т","code":"KeyN"},{"row":4,"className":"key letter","key":"Ь","code":"KeyM"},{"row":4,"className":"key letter","key":"Б","key__first":"<","firstClassName":"key__first","key__second":",","secondClassName":"key__second","code":"Comma"},{"row":4,"className":"key letter","key":"Ю","key__first":">","firstClassName":"key__first","key__second":".","secondClassName":"key__second","code":"Period"},{"row":4,"className":"key","key":false,"key__first":",","firstClassName":"key__first","key__second":".","secondClassName":"key__second","code":"Slash"},{"row":4,"className":"key","key":"&#9650;","code":"ArrowUp"},{"row":4,"className":"key shift","key":"⇧ Shift","code":"ShiftRight"},{"row":5,"className":"key","key":"Ctrl","code":"ControlLeft"},{"row":5,"className":"key","key":"Win","code":"MetaLeft"},{"row":5,"className":"key","key":"Alt","code":"AltLeft"},{"row":5,"className":"key space","key":"Space","code":"Space"},{"row":5,"className":"key","key":"Alt","code":"AltRight"},{"row":5,"className":"key","key":"Win","code":"MetaRight"},{"row":5,"className":"key","key":"&#10096;","code":"ArrowLeft"},{"row":5,"className":"key","key":"&#9660;","code":"ArrowDown"},{"row":5,"className":"key","key":"&#10097;","code":"ArrowRight"},{"row":5,"className":"key","key":"Ctrl","code":"ControlRight"}]')}},s={};function a(t){var o=s[t];if(void 0!==o)return o.exports;var c=s[t]={exports:{}};return e[t].call(c.exports,c,c.exports,a),c.exports}a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};a(53)})();