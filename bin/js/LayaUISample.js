var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var test = ui.test.TestPageUI;
var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var WebGL = Laya.WebGL;
var ClickPlaygroundView = /** @class */ (function (_super) {
    __extends(ClickPlaygroundView, _super);
    function ClickPlaygroundView() {
        var _this = _super.call(this) || this;
        _this.isRunningFX = false;
        _this.coinCount = 1000;
        _this.on(Laya.Event.CLICK, _this, _this.onClick);
        _this.boxCoins.alpha = 0;
        _this.labelCoins.text = "" + _this.coinCount;
        return _this;
    }
    ClickPlaygroundView.prototype.onClick = function (e) {
        if (this.isRunningFX) {
            return;
        }
        this.boxCoins.pos(e.stageX, e.stageY);
        console.log(e.stageX, e.stageY);
        Laya.timer.once(100, this, this.play);
    };
    ClickPlaygroundView.prototype.play = function () {
        this.isRunningFX = true;
        var oldCount = this.coinCount;
        var newCount = this.coinCount + 100 + Math.floor(Math.random() * 1000);
        this.coinCount = newCount;
        var coinFlyTargetGlobal = this.imgCoin.localToGlobal(new Laya.Point(5, 5));
        console.log(coinFlyTargetGlobal);
        var coinFlyTargetToBoxLocal = this.boxCoins.globalToLocal(coinFlyTargetGlobal, true);
        console.log(coinFlyTargetToBoxLocal);
        this.ani1.play(0, false);
        this.ani1.once(Laya.Event.COMPLETE, this, function () {
            var delayTime = 0;
            this.imgCoin.scale(1.2, 1.2);
            // 飞金币动画
            for (var i = 0, imgCoinCount = this.boxCoins.numChildren; i < imgCoinCount; i++) {
                Laya.timer.once(delayTime, this, function (index) {
                    var coin = this.boxCoins.getChildAt(index);
                    Laya.Tween.to(coin, {
                        x: coinFlyTargetToBoxLocal.x,
                        y: coinFlyTargetToBoxLocal.y,
                        scaleX: 0.5,
                        scaleY: 0.5,
                    }, 450);
                }, [i], false);
                delayTime += 10;
            }
            // 文字动画
            Laya.timer.once(delayTime + 450, this, function () {
                this.boxCoins.alpha = 0;
                this.boxCoins.scale(1, 1);
                this.imgCoin.scale(1, 1);
                for (var i = 0, imgCoinCount = this.boxCoins.numChildren; i < imgCoinCount; i++) {
                    var coin = this.boxCoins.getChildAt(i);
                    Laya.Tween.clearAll(coin);
                    coin.scale(1, 1);
                    coin.x = Math.round(Math.random() * this.boxCoins.width);
                    coin.y = Math.round(Math.random() * this.boxCoins.height);
                }
                var tweenObj = {
                    ratio: 0
                };
                var tween = Laya.Tween.to(tweenObj, {
                    ratio: 1
                }, 300, Laya.Ease.sineIn, Laya.Handler.create(this, function () {
                    // 全部动画完毕
                    this.isRunningFX = false;
                }));
                tween.update = new Handler(this, function () {
                    var curCount = Math.round(oldCount + tweenObj.ratio * (this.coinCount - oldCount));
                    this.labelCoins.text = "" + curCount;
                });
            });
        });
    };
    return ClickPlaygroundView;
}(ui.test.CoinFXUI));
Laya.init(750, 1334, WebGL);
Laya.stage.alignH = 'center';
Laya.stage.alignV = 'middle';
Laya.stage.scaleMode = 'showall';
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
function beginLoad() {
    Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}
function onLoaded() {
    var clickPlaygroundView = new ClickPlaygroundView();
    Laya.stage.addChild(clickPlaygroundView);
}
//# sourceMappingURL=LayaUISample.js.map