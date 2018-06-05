cc.Class({
    extends: cc.Component,

    properties: {

    },
    
    // use this for initialization
    onLoad: function () {
        cc.director.preloadScene('helloWorld');
    },
    
    //开始游戏
    startGame: function(){
        cc.director.loadScene ('helloWorld',function(){
            console.log('helloWorld is loaded');
        }) 
    },
    // called every frame
    //update: function (dt) {
    //},
});
