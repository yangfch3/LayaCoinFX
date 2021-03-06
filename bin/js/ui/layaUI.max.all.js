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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var test;
    (function (test) {
        var CoinFXUI = /** @class */ (function (_super) {
            __extends(CoinFXUI, _super);
            function CoinFXUI() {
                return _super.call(this) || this;
            }
            CoinFXUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.test.CoinFXUI.uiView);
            };
            CoinFXUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Box", "props": { "y": 705, "x": 411, "width": 220, "var": "boxCoins", "scaleY": 1, "scaleX": 1, "height": 196, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 20, "child": [{ "type": "Image", "props": { "y": 59, "x": 21, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 34, "x": 58, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 62, "x": 83, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 29, "x": 105, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 81, "x": 51, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 76, "x": 110, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 55, "x": 142, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 132, "x": 70, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 115, "x": 127, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 105, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 64, "x": 123, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 138, "x": 19, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 149, "x": 117, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 111, "x": 149, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 6, "x": 130, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "x": 52, "skin": "img_iconCoin.png" } }, { "type": "Image", "props": { "y": 61, "x": 169, "skin": "img_iconCoin.png" } }] }, { "type": "Box", "props": { "y": 45, "x": 525, "width": 181, "height": 47 }, "child": [{ "type": "Label", "props": { "y": 10, "x": 52, "var": "labelCoins", "valign": "middle", "text": "1000", "fontSize": 24, "color": "#ffffff" } }, { "type": "Image", "props": { "y": 23.5, "x": 23, "var": "imgCoin", "skin": "img_iconCoin.png", "anchorY": 0.5, "anchorX": 0.5 } }] }], "animations": [{ "nodes": [{ "target": 20, "keyframes": { "scaleY": [{ "value": 0.7, "tweenMethod": "linearNone", "tween": true, "target": 20, "key": "scaleY", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 20, "key": "scaleY", "index": 11 }], "scaleX": [{ "value": 0.7, "tweenMethod": "linearNone", "tween": true, "target": 20, "key": "scaleX", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 20, "key": "scaleX", "index": 11 }], "alpha": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 20, "key": "alpha", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 20, "key": "alpha", "index": 8 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 20, "key": "alpha", "index": 11 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
            return CoinFXUI;
        }(View));
        test.CoinFXUI = CoinFXUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
(function (ui) {
    var test;
    (function (test) {
        var TestPageUI = /** @class */ (function (_super) {
            __extends(TestPageUI, _super);
            function TestPageUI() {
                return _super.call(this) || this;
            }
            TestPageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.test.TestPageUI.uiView);
            };
            TestPageUI.uiView = { "type": "View", "child": [{ "props": { "x": 0, "y": 0, "skin": "comp/bg.png", "sizeGrid": "30,4,4,4", "width": 600, "height": 400 }, "type": "Image" }, { "props": { "x": 41, "y": 56, "skin": "comp/button.png", "label": "点我赋值", "width": 150, "height": 37, "sizeGrid": "4,4,4,4", "var": "btn" }, "type": "Button" }, { "props": { "x": 401, "y": 56, "skin": "comp/clip_num.png", "clipX": 10, "var": "clip" }, "type": "Clip" }, { "props": { "x": 220, "y": 143, "skin": "comp/combobox.png", "labels": "select1,select2,selecte3", "selectedIndex": 1, "sizeGrid": "4,20,4,4", "width": 200, "height": 23, "var": "combobox" }, "type": "ComboBox" }, { "props": { "x": 220, "y": 96, "skin": "comp/tab.png", "labels": "tab1,tab2,tab3", "var": "tab" }, "type": "Tab" }, { "props": { "x": 259, "y": 223, "skin": "comp/vscroll.png", "height": 150 }, "type": "VScrollBar" }, { "props": { "x": 224, "y": 223, "skin": "comp/vslider.png", "height": 150 }, "type": "VSlider" }, { "type": "List", "child": [{ "type": "Box", "child": [{ "props": { "skin": "comp/label.png", "text": "this is a list", "x": 26, "y": 5, "width": 78, "height": 20, "fontSize": 14, "name": "label" }, "type": "Label" }, { "props": { "x": 0, "y": 2, "skin": "comp/clip_num.png", "clipX": 10, "name": "clip" }, "type": "Clip" }], "props": { "name": "render", "x": 0, "y": 0, "width": 112, "height": 30 } }], "props": { "x": 452, "y": 68, "width": 128, "height": 299, "vScrollBarSkin": "comp/vscroll.png", "repeatX": 1, "var": "list" } }, { "props": { "x": 563, "y": 4, "skin": "comp/btn_close.png", "name": "close" }, "type": "Button" }, { "props": { "x": 41, "y": 112, "skin": "comp/button.png", "label": "点我赋值", "width": 150, "height": 66, "sizeGrid": "4,4,4,4", "labelSize": 30, "labelBold": true, "var": "btn2" }, "type": "Button" }, { "props": { "x": 220, "y": 188, "skin": "comp/checkbox.png", "label": "checkBox1", "var": "check" }, "type": "CheckBox" }, { "props": { "x": 220, "y": 61, "skin": "comp/radiogroup.png", "labels": "radio1,radio2,radio3", "var": "radio" }, "type": "RadioGroup" }, { "type": "Panel", "child": [{ "props": { "skin": "comp/image.png" }, "type": "Image" }], "props": { "x": 299, "y": 223, "width": 127, "height": 150, "vScrollBarSkin": "comp/vscroll.png" } }, { "props": { "x": 326, "y": 188, "skin": "comp/checkbox.png", "label": "checkBox2", "labelColors": "#ff0000" }, "type": "CheckBox" }, { "type": "Box", "child": [{ "props": { "y": 70, "skin": "comp/progress.png", "width": 150, "height": 14, "sizeGrid": "4,4,4,4", "name": "progress" }, "type": "ProgressBar" }, { "props": { "y": 103, "skin": "comp/label.png", "text": "This is a Label", "width": 137, "height": 26, "fontSize": 20, "name": "label" }, "type": "Label" }, { "props": { "y": 148, "skin": "comp/textinput.png", "text": "textinput", "width": 150, "name": "input" }, "type": "TextInput" }, { "props": { "skin": "comp/hslider.png", "width": 150, "name": "slider" }, "type": "HSlider" }, { "props": { "y": 34, "skin": "comp/hscroll.png", "width": 150, "name": "scroll" }, "type": "HScrollBar" }], "props": { "x": 41, "y": 197, "var": "box" } }], "props": { "width": 600, "height": 400 } };
            return TestPageUI;
        }(View));
        test.TestPageUI = TestPageUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map