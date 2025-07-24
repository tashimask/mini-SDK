// === 微信小游戏SDK（真实实现） ===
declare const wx: any;
export class WeChat {
    static showToast(msg: string) {
        if (typeof wx === 'undefined') return;
        wx.showToast({ title: msg, icon: 'none', duration: 1500 });
    }
    static shareAppMessage(options: any) {
        if (typeof wx === 'undefined') return;
        wx.shareAppMessage(options);
    }
    static getSystemInfoSync() {
        if (typeof wx === 'undefined') return null;
        return wx.getSystemInfoSync();
    }
} 