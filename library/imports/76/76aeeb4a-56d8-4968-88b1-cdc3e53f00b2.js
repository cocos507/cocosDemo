"use strict";
cc._RF.push(module, '76aeetKVthJaIixzcPlPwCy', 'startGame');
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