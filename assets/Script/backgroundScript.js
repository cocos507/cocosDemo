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
        Height: 0,
    },


    setMoveAction: function () {
        var moveDown = cc.moveBy(this.Speed, cc.p(0, -200));
        return moveDown.repeatForever();
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        this.moveAction = this.setMoveAction();
        this.node.runAction(this.moveAction);
    },

    start() {
    },
    update(dt) {
             var nodePosY = this.node.getPositionY();
             if (nodePosY <=-767) {
             this.node.setPositionY(767);
        }
    },
});
