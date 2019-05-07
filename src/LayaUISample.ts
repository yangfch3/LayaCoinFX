import test = ui.test.TestPageUI;
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;
import WebGL = Laya.WebGL;

class ClickPlaygroundView extends ui.test.CoinFXUI {
	private isRunningFX: boolean = false
	private coinCount: number = 1000

	constructor() {
		super();
		this.on(Laya.Event.CLICK, this, this.onClick);
		this.boxCoins.alpha = 0
		this.labelCoins.text = `${this.coinCount}`
	}

	private onClick(e: Laya.Event): void {
		if (this.isRunningFX) {
			return
		}

		this.boxCoins.pos(e.stageX, e.stageY)
		console.log(e.stageX, e.stageY)

		Laya.timer.once(100, this, this.play)
	}

	private play() {
		this.isRunningFX = true

		let oldCount = this.coinCount
		let newCount = this.coinCount + 100 + Math.floor(Math.random() * 1000)
		this.coinCount = newCount

		let coinFlyTargetGlobal = this.imgCoin.localToGlobal(new Laya.Point(5, 5))
		console.log(coinFlyTargetGlobal)
		let coinFlyTargetToBoxLocal = this.boxCoins.globalToLocal(coinFlyTargetGlobal, true)

		console.log(coinFlyTargetToBoxLocal)

		this.ani1.play(0, false)
		this.ani1.once(Laya.Event.COMPLETE, this, function (this: ClickPlaygroundView) {
			let delayTime = 0
			this.imgCoin.scale(1.2, 1.2)

			// 飞金币动画
			for (let i = 0, imgCoinCount = this.boxCoins.numChildren; i < imgCoinCount; i++) {
				Laya.timer.once(delayTime, this, function (index: number) {
					let coin = this.boxCoins.getChildAt(index) as Laya.Image
					Laya.Tween.to(coin, {
						x: coinFlyTargetToBoxLocal.x,
						y: coinFlyTargetToBoxLocal.y,
						scaleX: 0.5,
						scaleY: 0.5,
					}, 450)
				}, [i], false)
				delayTime += 10
			}
			// 文字动画
			Laya.timer.once(delayTime + 450, this, function (this: ClickPlaygroundView) {
				this.boxCoins.alpha = 0
				this.boxCoins.scale(1, 1)

				this.imgCoin.scale(1, 1)
				for (let i = 0, imgCoinCount = this.boxCoins.numChildren; i < imgCoinCount; i++) {
					let coin = this.boxCoins.getChildAt(i) as Laya.Image
					Laya.Tween.clearAll(coin)
					coin.scale(1, 1)
					coin.x = Math.round(Math.random() * this.boxCoins.width)
					coin.y = Math.round(Math.random() * this.boxCoins.height)
				}

				let tweenObj = {
					ratio: 0
				}
				let tween = Laya.Tween.to(tweenObj, {
					ratio: 1
				}, 300, Laya.Ease.sineIn, Laya.Handler.create(this, function() {
					// 全部动画完毕
					this.isRunningFX = false
				}))
				tween.update = new Handler(this, function (this: ClickPlaygroundView) {
					let curCount = Math.round(oldCount + tweenObj.ratio * (this.coinCount - oldCount))
					this.labelCoins.text = `${curCount}`
				})
			})
		})
	}
}

Laya.init(750, 1334, WebGL);
Laya.stage.alignH = 'center'
Laya.stage.alignV = 'middle'  
Laya.stage.scaleMode = 'showall'
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

function beginLoad() {
	Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}

function onLoaded(): void {
	let clickPlaygroundView: ClickPlaygroundView = new ClickPlaygroundView();
	Laya.stage.addChild(clickPlaygroundView);
}