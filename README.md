# 微信小游戏SDK实现（广告/排行榜/微信API）

本目录包含微信小游戏广告、排行榜、微信API等相关接口的真实实现，可直接集成到你的微信小游戏项目中，支持正式上线和平台审核。

## 目录结构

- AdMgr.ts      // 广告管理器（激励视频、插屏、Banner广告）
- RankMgr.ts    // 排行榜管理器（云存储、开放数据域）
- wx/
  - WxAd.ts     // 微信广告API适配
  - Wechat.ts   // 微信API适配

## 用法

1. 将本目录下的文件集成到你的微信小游戏项目中。
2. 在 `AdMgr.ts` 中填写你自己的广告位ID（激励视频、插屏、Banner）。
3. 业务代码可直接调用这些接口，实现广告展示、排行榜上传/展示、微信API调用等功能。

## 注意

- 本SDK为真实实现，可直接用于正式项目上线。
- 广告位ID、排行榜key等需开发者根据自己项目实际情况配置。
- 如需扩展更多微信API，可在 `wx/Wechat.ts` 中补充。

## License

MIT
