"use strict";
cc._RF.push(module, '4f4f2ZuD59O17jlpeHrodM6', 'backgroundScript');
// Script/backgroundScript.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        Speed: 0,
        Height: 0
    },

    setMoveAction: function setMoveAction() {
        var moveDown = cc.moveBy(this.Speed, cc.p(0, -200));
        return moveDown.repeatForever();
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad: function onLoad() {
        this.moveAction = this.setMoveAction();
        this.node.runAction(this.moveAction);
    },
    start: function start() {},
    update: function update(dt) {
        var nodePosY = this.node.getPositionY();
        if (nodePosY <= -767) {
            this.node.setPositionY(767);
        }
    }
});

cc._RF.pop();