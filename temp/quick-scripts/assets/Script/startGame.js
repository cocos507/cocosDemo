(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/startGame.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '76aeetKVthJaIixzcPlPwCy', 'startGame', __filename);
// Script/startGame.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        cc.director.preloadScene('helloWorld');
    },

    //开始游戏
    startGame: function startGame() {
        cc.director.loadScene('helloWorld', function () {
            console.log('helloWorld is loaded');
        });
    }
    // called every frame
    //update: function (dt) {
    //},
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=startGame.js.map
        