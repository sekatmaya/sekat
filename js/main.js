function onDeviceReady(){StatusBar.backgroundColorByHexString("#F00000"),null==localStorage.getItem("deviceid")&&window.FirebasePlugin.getToken((function(e){localStorage.deviceid=e}),(function(e){})),window.FirebasePlugin.onNotificationOpen((function(e){}),(function(e){console.error(e)}))}function getvar(e,n){n||(n=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var o=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(n);return o?o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):"":null}function fade(e){window.location.href=e}document.addEventListener("deviceready",onDeviceReady,!1);