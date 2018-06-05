"use strict";
cc._RF.push(module, '8b375fqLEdIe64NdNhTWHXu', 'hero');
// Script/hero.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:
    onLoad: function onLoad() {
        //添加英雄拖动属性
        this.onDrag();
    },


    //添加拖动监听
    onDrag: function onDrag() {
        this.node.on('touchmove', this.dragMove, this);
    },
    //去掉拖动监听
    offDrag: function offDrag() {
        this.node.off('touchmove', this.dragMove, this);
    },
    //拖动
    dragMove: function dragMove(event) {
        var locationv = event.getLocation();
        var location = this.node.parent.convertToNodeSpaceAR(locationv);
        //飞机不移出屏幕 
        var minX = -this.node.parent.width / 2 + this.node.width / 2;
        var maxX = -minX;
        var minY = -this.node.parent.height / 2 + this.node.height / 2;
        var maxY = -minY;
        if (location.x < minX) {
            location.x = minX;
        }
        if (location.x > maxX) {
            location.x = maxX;
        }
        if (location.y < minY) {
            location.y = minY;
        }
        if (location.y > maxY) {
            location.y = maxY;
        }
        this.node.setPosition(location);
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();