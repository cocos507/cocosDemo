//pull request Test

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
