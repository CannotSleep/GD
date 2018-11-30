
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"page { padding-top: ",[0,60],"; }\nbody { background: #efeff4; }\n.",[1],"list-collapse { padding-left: ",[0,36],"; box-sizing: border-box; }\nwx-image { width: 100%; }\n.",[1],"page-pd { padding: ",[0,36],"; }\n.",[1],"size-5 { font-size: ",[0,50],"; }\n.",[1],"size-4 { font-size: ",[0,40],"; }\n.",[1],"size-3 { font-size: ",[0,30],"; }\n.",[1],"size-2 { font-size: ",[0,20],"; }\n.",[1],"size-1 { font-size: ",[0,10],"; }\n",],undefined,{path:"./components/test.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./components/test.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      