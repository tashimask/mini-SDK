// === 微信小游戏广告API（真实SDK实现） ===
declare const wx: any;
export class WxAd {
    static showToast(msg: string) {
        if (typeof wx === 'undefined') return;
        wx.showToast({ title: msg, icon: 'none', duration: 1500 });
    }
} 