!function(){"use strict";var t=function(){return window.sgd=window.sgd||{},window.sgd},e=function(t){"loading"!==document.readyState?t():document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",(function(){"loading"!==document.readyState&&t()}))},n=function(){var t=!1;try{var e=JSON.parse("${user.sgdEmergencyBrake}"),n=e.expireIn,o=e.updatedAt,a=e.disabledTests,c=Number.isInteger(n)?36e5*n:36e5,l=o&&new Date-new Date(e.updatedAt)<c,d=a&&a.includes("aoex-th-privacy-policy");t=l&&d}catch(e){return t}return t};!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}('@font-face{font-family:Avenir Next;font-weight:500;font-style:normal;src:url(https://fonts.shopifycdn.com/avenir_next/avenirnext_n5.972a96b7a049f12c89d6d1cd0e1b6c9211f7ba14.woff2?h1=YW5ncnlvcmFuZ2V1c2EuY29t&h2=YW5ncnlvcmFuZ2UuY29t&hmac=d5c5e199c36b02f82b5cf69e2f9ed0c76f2ca302181250b476a4f1dad6a90f3d) format("woff2"),url(https://fonts.shopifycdn.com/avenir_next/avenirnext_n5.9e88d20fa9eb66ba268ac60ab013006ef69a310a.woff?h1=YW5ncnlvcmFuZ2V1c2EuY29t&h2=YW5ncnlvcmFuZ2UuY29t&hmac=0d3172c250a8e558297b49aba19c2f5c50e6e1a9324f71d149b11306aa2c1af3) format("woff")}@font-face{font-family:Avenir Next;font-weight:400;font-style:normal;src:url(https://fonts.shopifycdn.com/avenir_next/avenirnext_n4.7fd0287595be20cd5a683102bf49d073b6abf144.woff2?h1=YW5ncnlvcmFuZ2V1c2EuY29t&h2=YW5ncnlvcmFuZ2UuY29t&hmac=7a751e3e7b2d9ab81355949ce4e152c778d00f07391659448b24a95527f05027) format("woff2"),url(https://fonts.shopifycdn.com/avenir_next/avenirnext_n4.a26a334a0852627a5f36b195112385b0cd700077.woff?h1=YW5ncnlvcmFuZ2V1c2EuY29t&h2=YW5ncnlvcmFuZ2UuY29t&hmac=4a658db0edebb8f8d5593e8e6b8f7a125fa9a70c386b0864ec45c7faa0a8fe0e) format("woff")}@font-face{font-family:Avenir Next;font-weight:600;font-style:normal;src:url(https://fonts.shopifycdn.com/avenir_next/avenirnext_n6.08f6a09127d450aa39c74986de08fd8fa84e6a11.woff2?h1=YW5ncnlvcmFuZ2V1c2EuY29t&h2=YW5ncnlvcmFuZ2UuY29t&hmac=49b4dc85d63271c909ad6d779a073f72e5b95f3ab005d5c5959e9a746f9ac9f0) format("woff2"),url(https://fonts.shopifycdn.com/avenir_next/avenirnext_n6.bd2f76897d6f40c767db7c40226916ec7b6ffc65.woff?h1=YW5ncnlvcmFuZ2V1c2EuY29t&h2=YW5ncnlvcmFuZ2UuY29t&hmac=91561570be110a438d1f6afe35455910cfc99be61c26d835635e8990e76cc8c5) format("woff")}@font-face{font-family:Avenir Next;font-weight:400;font-style:italic;src:url(https://fonts.shopifycdn.com/avenir_next/avenirnext_i4.f1583d9f457b68e44fbda187a48b4096d547d7f4.woff2?h1=YW5ncnlvcmFuZ2V1c2EuY29t&h2=YW5ncnlvcmFuZ2UuY29t&hmac=4320b3cf6b9d551cfa812ed2d34eb68f58926868690fda4be1ddc232acada9ab) format("woff2"),url(https://fonts.shopifycdn.com/avenir_next/avenirnext_i4.67fb53a3e0351125941146246183577ae8d8bf23.woff?h1=YW5ncnlvcmFuZ2V1c2EuY29t&h2=YW5ncnlvcmFuZ2UuY29t&hmac=99aeec5b75e7e60c4a78fd20157e544cf7ce39306446811eef70e25873062ddf) format("woff")}@font-face{font-family:Avenir Next;font-weight:600;font-style:italic;src:url(https://fonts.shopifycdn.com/avenir_next/avenirnext_i6.449b8593f8987f1402fdf6d634f972f810c90c5c.woff2?h1=YW5ncnlvcmFuZ2V1c2EuY29t&h2=YW5ncnlvcmFuZ2UuY29t&hmac=b9656be612488257483bebf64072c2102fce9fbdbbff471b468e3a13c1e615eb) format("woff2"),url(https://fonts.shopifycdn.com/avenir_next/avenirnext_i6.9c697a2eda486add54c668d1ec4ac662c8402e7c.woff?h1=YW5ncnlvcmFuZ2V1c2EuY29t&h2=YW5ncnlvcmFuZ2UuY29t&hmac=5f040f1ccaa9c813cc4f6ece292458c7b66b6bbd0af315e339303ec94fa672e5) format("woff")}.modal__content{font-size:15.3px;font-family:Avenir Next,sans-serif;letter-spacing:.025em;line-height:1.6;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%;text-rendering:optimizeSpeed;height:650px;overflow-y:scroll}@media only screen and (min-width:769px){.modal__content .faux-select,.modal__content body,.modal__content button,.modal__content input,.modal__content select,.modal__content textarea{font-size:18px}}.modal__content .first-heading{font-size:18px;color:#322c29}.modal__content .main-heading{font-size:30px;color:#322c29}.modal__content ol,.modal__content ul{list-style-type:disc}.modal__content body{font-weight:400}.modal__content p{margin:0 0 15px}.modal__content p img{margin:0}.modal__content em{font-style:italic}.modal__content b,.modal__content strong{font-weight:700}.modal__content small{font-size:.85em}.modal__content sub,.modal__content sup{position:relative;font-size:60%;vertical-align:baseline}.modal__content sup{top:-.5em}.modal__content sub{bottom:-.5em}.modal__content .rte blockquote,.modal__content blockquote{margin:0;padding:15px 30px 40px}.modal__content .rte blockquote p,.modal__content blockquote p{margin-bottom:0}.modal__content .rte blockquote p+cite,.modal__content blockquote p+cite{margin-top:15px}.modal__content .rte blockquote cite,.modal__content blockquote cite{display:block}.modal__content .rte blockquote cite:before,.modal__content blockquote cite:before{content:"\\2014   "}.modal__content code,.modal__content pre{background-color:#faf7f5;font-family:Consolas,monospace;font-size:1em;border:0;padding:0 2px;color:#51ab62}.modal__content pre{overflow:auto;padding:15px;margin:0 0 30px}.modal__content .label,.modal__content label:not(.variant__button-label){text-transform:uppercase;letter-spacing:.3em;font-size:.75em}.modal__content .label-info,.modal__content label{display:block;margin-bottom:10px}.modal__content .h1,.modal__content .h2,.modal__content .h3,.modal__content .h4,.modal__content .h5,.modal__content .h6,.modal__content h1,.modal__content h2,.modal__content h3,.modal__content h4,.modal__content h5,.modal__content h6{display:block;margin:0 0 7.5px}@media only screen and (min-width:769px){.modal__content .h1,.modal__content .h2,.modal__content .h3,.modal__content .h4,.modal__content .h5,.modal__content .h6,.modal__content h1,.modal__content h2,.modal__content h3,.modal__content h4,.modal__content h5,.modal__content h6{margin:0 0 15px}}.modal__content .h1 a,.modal__content .h2 a,.modal__content .h3 a,.modal__content .h4 a,.modal__content .h5 a,.modal__content .h6 a,.modal__content h1 a,.modal__content h2 a,.modal__content h3 a,.modal__content h4 a,.modal__content h5 a,.modal__content h6 a{text-decoration:none;font-weight:inherit}.modal__content .h1,.modal__content .h2,.modal__content .h3,.modal__content h1,.modal__content h2,.modal__content h3{font-family:Avenir Next,sans-serif;font-weight:500;letter-spacing:0;line-height:1.2}.modal__content .h1,.modal__content h1{font-size:1.66667em}.modal__content .h2,.modal__content h2{font-size:25.79px}.modal__content .h3,.modal__content h3{font-size:1.16667em}.modal__content .h4,.modal__content h4{text-transform:uppercase;letter-spacing:.3em;font-size:.75em}.modal__content .h5,.modal__content .h6,.modal__content h5,.modal__content h6{text-transform:uppercase;letter-spacing:.3em;font-size:.75em;margin-bottom:10px}@media only screen and (max-width:768px){.modal__content .h5,.modal__content .h6,.modal__content h5,.modal__content h6{margin-bottom:5px}}.modal__content .text-spacing,.modal__content .text-spacing.rte:last-child{margin-bottom:15px}@media only screen and (max-width:768px){.modal__content .rte table td,.modal__content .rte table th{padding:6px 8px}}.modal__content ol,.modal__content ul{margin:0 0 15px 30px;padding:0;text-rendering:optimizeLegibility}.modal__content ol ol{list-style:lower-alpha}.modal__content ol{list-style:decimal}.modal__content ol ol,.modal__content ol ul,.modal__content ul ol,.modal__content ul ul{margin:4px 0 5px 20px}.modal__content li{margin-bottom:.25em}.modal__content ul.square{list-style:square outside}.modal__content ul.disc{list-style:disc outside}.modal__content ol.alpha{list-style:lower-alpha outside}.modal__content .no-bullets{list-style:none outside;margin-left:0}.modal__content .inline-list{padding:0;margin:0}.modal__content .inline-list li{display:inline-block;margin-bottom:0;vertical-align:middle}'),function(o){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],l="aoex-th-privacy-policy",d=function(){var e=t();n()?e[l]="".concat(l,"-disabled"):(!e[l]||e[l]&&!a)&&(e[l]=o,e[l]())};c?e(d):d()}((function(){document.querySelectorAll(".policy-list__item ")[1].addEventListener("click",(function(){!function t(e,n){document.querySelectorAll(e).length<e.length?setTimeout(t.bind(null,e,n),50):n()}([".modal-backdrop--is-visible"],(function(){var t,e,n,o;document.querySelector(".modal__content").innerHTML='\n            <h1 class="main-heading"> Angry Orange Privacy Policy </h1>\n            <br />\n            <span class="first-heading">Angry Orange is a consumer product brand owned by Thrasio. Thrasio acquires and grows many consumer brands found on the Amazon marketplace and other online retail outlets. This Privacy Policy explains Thrasio\'s privacy practices for your personal information related to your use of the Angry Orange website only. This Privacy Policy for the Angry Orange website does not apply to other websites owned or operated by Thrasio, for example, Thrasio\'s corporate site, marketing websites, co-branded websites, or websites for other Thrasio brands. These other websites have privacy notices which may describe different or additional uses of personal information collected about users. </span> <br><br> \x3c!-- OneTrust Privacy Notice start --\x3e \x3c!-- Container in which the privacy notice will be rendered --\x3e\n            <div id="otnotice-4d40ed25-cf28-41f2-bac1-31a51b7e7e0c" class="otnotice"></div>\n            <script src="https://privacyportal-cdn.onetrust.com/privacy-notice-scripts/otnotice-1.0.min.js" type="text/javascript" charset="UTF-8" id="otprivacy-notice-script">// <![CDATA[\n      settings="eyJjYWxsYmFja1VybCI6Imh0dHBzOi8vdGhyYXNpby1wcml2YWN5Lm15Lm9uZXRydXN0LmNvbS9yZXF1ZXN0L3YxL3ByaXZhY3lOb3RpY2VzL3N0YXRzL3ZpZXdzIn0="\n    \n// ]]><\/script>\n            ',t="https://privacyportal-cdn.onetrust.com/privacy-notice-scripts/otnotice-1.0.min.js",e=function(){OneTrust.NoticeApi.Initialized.then((function(){OneTrust.NoticeApi.LoadNotices(["https://privacyportal-cdn.onetrust.com/31671afb-8866-4ea6-b9eb-90276fcdf684/privacy-notices/4d40ed25-cf28-41f2-bac1-31a51b7e7e0c.json"])}))},n=document.createElement("script"),o=document.getElementsByTagName("script")[0],n.async=1,n.onload=n.onreadystatechange=function(t,o){(o||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n=void 0,!o&&e&&setTimeout(e,0))},n.src=t,o.parentNode.insertBefore(n,o)}))}))}))}();
