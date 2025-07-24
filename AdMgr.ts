// === 微信小游戏广告管理器（真实SDK实现） ===
declare const wx: any;

export class AdMgr {
    private static rewardedVideoAd: any = null;
    private static interstitialAd: any = null;
    private static bannerAd: any = null;

    static init() {
        if (typeof wx === 'undefined') return;
        // 激励视频广告
        this.rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: 'your-rewarded-video-adunit-id' });
        // 插屏广告
        this.interstitialAd = wx.createInterstitialAd({ adUnitId: 'your-interstitial-adunit-id' });
        // Banner广告
        this.bannerAd = wx.createBannerAd({
            adUnitId: 'your-banner-adunit-id',
            style: { left: 0, top: 0, width: 300 }
        });
    }

    static showRewardedVideo(onSucc?: Function, onFail?: Function, onError?: Function) {
        if (!this.rewardedVideoAd) { onError && onError(); return; }
        this.rewardedVideoAd.show().then(() => {
            // 广告正常播放
        }).catch(() => {
            // 拉取失败，尝试重新加载
            this.rewardedVideoAd.load().then(() => this.rewardedVideoAd.show());
        });
        this.rewardedVideoAd.onClose((res: any) => {
            if (res && res.isEnded) {
                onSucc && onSucc();
            } else {
                onFail && onFail();
            }
        });
        this.rewardedVideoAd.onError(() => {
            onError && onError();
        });
    }

    static showInterstitialAd() {
        if (!this.interstitialAd) return;
        this.interstitialAd.show().catch(() => {
            this.interstitialAd.load().then(() => this.interstitialAd.show());
        });
    }

    static showBanner() {
        if (!this.bannerAd) return;
        this.bannerAd.show();
    }
    static hideBanner() {
        if (!this.bannerAd) return;
        this.bannerAd.hide();
    }
} 