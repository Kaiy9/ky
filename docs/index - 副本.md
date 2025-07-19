---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: KYJL's Blog
  text: 开源节流
  tagline: 开源是进步的阶梯，节流是阶梯的支撑
  image:
    src: /logo.png
    alt: 茂茂物语
  actions:
  - text: 我的博客
    link: /fe/es6/
  - text: 开源节流
    link: /nav
    theme: alt
  - text: 网址导航
    link: /daily-notes/
  - text: 福利活动
    link: https://netease-music.fe-mm.com
    theme: alt
features:
  - icon: 📖
    title: 我的随笔
    details: 整理所学知识，推出新型观点
    link: /博客/我的随笔
    linkText: 前往阅读
  - icon: 💡
    title: 羊毛线报
    details: 罗列免费羊毛，节流自己的收入
    link: /线报/福利活动
    linkText: 前往阅读
  - icon: 🌍
    title: 网址导航
    details: 导航热门工具，我的收藏网址
    link: /海纳百川/网址导航
    linkText: 前往阅读
  - icon: 🚀
    title: 机场推荐
    details: 推荐免费机场，开始上网
    link: /海纳百川/网址导航
    linkText: 前往阅读
  - icon: 🧰
    title: 福利活动
    details: 福利活动推荐
    link: /海纳百川/网址导航
    linkText: 前往阅读
  - icon: 📘
    title: 情不知所起，一往而深。
    details: '<small class="bottom-small">97</small>'
    link: /海纳百川/网址导航
    linkText: 前往导航
---

<ClientOnly><Heatmap /></ClientOnly>

<style>
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}

@media (min-width: 768px) {
  .VPHome {
    margin-bottom: 50px !important;
  }
}
</style>


    