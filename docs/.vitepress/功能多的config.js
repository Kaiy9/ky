import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: '开源节流',
    description: '搞钱省钱第一站，从这里开始！专注于分享最新线报、免费羊毛和实用工具资源。',
    lang: 'zh-CN',
    
    // 基础路径 - 根据部署环境调整
    base: '/ky-vitepress/',
    
    // 多语言配置
    locales: {
      root: {
        label: '简体中文',
        lang: 'zh-CN',
        title: '开源节流',
        description: '搞钱省钱第一站，从这里开始！专注于分享最新线报、免费羊毛和实用工具资源。'
      },
      en: {
        label: 'English',
        lang: 'en-US',
        title: 'KYJL',
        description: 'Your first stop for making and saving money! Focus on sharing the latest deals, free offers and useful tools.',
        themeConfig: {
          nav: [
            { text: 'Home', link: '/en/' },
            { text: 'Deals', link: '/en/xianbao/' },
            { text: 'Freebies', link: '/en/yangmao/' },
            { text: 'Tools', link: '/en/tools/' },
            { text: 'About', link: '/en/about/' }
          ]
        }
      }
    },

    // SEO优化
    head: [
      ['meta', { charset: 'utf-8' }],
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
      ['meta', { name: 'description', content: '开源节流 - 搞钱省钱第一站，专注于分享最新线报、免费羊毛和实用工具资源' }],
      ['meta', { name: 'keywords', content: '开源节流,线报,羊毛,赚钱,省钱,工具,资源,KYJL' }],
      ['meta', { name: 'author', content: '开源节流团队' }],
      ['meta', { name: 'robots', content: 'index,follow' }],
      
      // 移动端优化
      ['meta', { name: 'theme-color', content: '#667eea' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      
      // Open Graph / Facebook
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:title', content: '开源节流 - 搞钱省钱第一站' }],
      ['meta', { property: 'og:description', content: '专注于分享最新线报、免费羊毛和实用工具资源' }],
      ['meta', { property: 'og:image', content: '/og-image.jpg' }],
      ['meta', { property: 'og:url', content: 'https://kyjl.com' }],
      ['meta', { property: 'og:site_name', content: '开源节流' }],
      
      // Twitter
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: '开源节流 - 搞钱省钱第一站' }],
      ['meta', { name: 'twitter:description', content: '专注于分享最新线报、免费羊毛和实用工具资源' }],
      ['meta', { name: 'twitter:image', content: '/og-image.jpg' }],
      
      // 网站图标
      ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
      ['link', { rel: 'manifest', href: '/site.webmanifest' }],
      
      // RSS Feed
      ['link', { rel: 'alternate', type: 'application/rss+xml', title: '开源节流 RSS', href: '/feed.rss' }],
      
      // 性能优化
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      ['link', { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' }],
      ['link', { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com' }],
      ['link', { rel: 'dns-prefetch', href: 'https://cdnjs.cloudflare.com' }],
      
      // 字体优化
      ['link', { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', as: 'style' }],
      ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' }],
      
      // 结构化数据
      ['script', { type: 'application/ld+json' }, JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "开源节流",
        "description": "搞钱省钱第一站，专注于分享最新线报、免费羊毛和实用工具资源",
        "url": "https://kyjl.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://kyjl.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })],
      
      // 百度统计 - 请替换为实际的统计ID
      ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?YOUR_BAIDU_ANALYTICS_ID";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `],
      
      // Google Analytics - 请替换为实际的GA ID
      ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_MEASUREMENT_ID' }],
      ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href
        });
      `],
      
      // 图片放大功能 - medium-zoom
      ['script', { type: 'module' }, `
        import mediumZoom from 'https://cdn.skypack.dev/medium-zoom';
        mediumZoom('[data-zoomable]', {
          background: 'rgba(0, 0, 0, 0.8)',
          margin: 24,
          scrollOffset: 0
        });
      `]
    ],
    
    // 站点地图
    sitemap: {
      hostname: 'https://kyjl.com',
      transformItems: (items) => {
        return items.filter((item) => !item.url.includes('404'))
      }
    },
    
    // 性能优化
    vite: {
      build: {
        minify: 'terser',
        cssMinify: true,
        rollupOptions: {
          output: {
            manualChunks: {
              'vue-vendor': ['vue'],
              'vitepress-vendor': ['vitepress']
            }
          }
        }
      },
      optimizeDeps: {
        include: ['vue', 'mermaid']
      },
      ssr: {
        noExternal: ['vue', 'mermaid']
      },
      plugins: [
        // 自定义插件：自动添加图片放大属性
        {
          name: 'auto-zoom-images',
          transform(code, id) {
            if (id.endsWith('.md')) {
              return code.replace(
                /<img([^>]*?)src="([^"]*?)"([^>]*?)>/g,
                '<img$1src="$2"$3 data-zoomable>'
              )
            }
          }
        }
      ]
    },
    
    // Mermaid 配置
    mermaid: {
      theme: 'default',
      themeVariables: {
        primaryColor: '#667eea',
        primaryTextColor: '#fff',
        primaryBorderColor: '#7C0000',
        lineColor: '#F8B229',
        sectionBkgColor: '#40CBB4',
        altSectionBkgColor: '#4F81BD',
        gridColor: '#e0e0e0',
        secondaryColor: '#006100',
        tertiaryColor: '#fff'
      }
    },
    
    // 主题配置
    themeConfig: {
      // Logo 配置
      logo: '/logo.png',

      // 导航配置
      nav: [
        { text: '首页', link: '/' },
        {
          text: '我的博客',
          items: [
            { text: '我的随笔', link: '/博客/我的随笔' },
            { text: '教程分享', link: '/博客/教程' },
            { text: '前端后端', link: '/博客/前端后端' },
            { text: '学习笔记', link: '/博客/学习笔记' },
            { text: '好物分享', link: '/博客/好物分享' },
            { text: '我的装备', link: '/博客/我的装备' }
          ]
        },
        {
          text: '开源搞钱赚钱',
          items: [
            { text: '最新商机', link: '/开源/最新商机' },
            { text: '长期搞钱', link: '/开源/长期搞钱' },
            { text: '提升自我', link: '/开源/提升自我' }
          ]
        },
        {
          text: '福利羊毛节流',
          items: [
            { text: '羊毛线报', link: '/节流/羊毛线报' },
            { text: '福利活动', link: '/节流/福利活动' },
            { text: '资源分享', link: '/节流/资源分享' }
          ]
        },
        { text: '网址导航与软件', link: '/海纳百川/网址导航' },
        { text: 'RSS订阅', link: '/feed.rss' }
      ],
      
      // 侧边栏配置
      sidebar: {
        '/博客/': [
          {
            text: '我的博客',
            collapsed: false,
            items: [
              { text: '我的随笔', link: '/博客/我的随笔' },
              { text: '教程分享', link: '/博客/教程' },
              { text: '前端后端', link: '/博客/前端后端' },
              { text: '学习笔记', link: '/博客/学习笔记' },
              { text: '好物分享', link: '/博客/好物分享' },
              { text: '我的装备', link: '/博客/我的装备' }
            ]
          }
        ],
        '/开源/': [
          {
            text: '开源搞钱赚钱',
            collapsed: false,
            items: [
              { text: '最新商机', link: '/开源/最新商机' },
              { text: '长期搞钱', link: '/开源/长期搞钱' },
              { text: '提升自我', link: '/开源/提升自我' }
            ]
          }
        ],
        '/节流/': [
          {
            text: '福利羊毛节流',
            collapsed: false,
            items: [
              { text: '羊毛线报', link: '/节流/羊毛线报' },
              { text: '福利活动', link: '/节流/福利活动' },
              { text: '资源分享', link: '/节流/资源分享' }
            ]
          }
        ],
        '/海纳百川/': [
          {
            text: '网址导航和软件',
            collapsed: false,
            items: [
              { text: '网址导航', link: '/海纳百川/网址导航' },
              { text: '代理软件', link: '/海纳百川/代理软件' },
              { text: '测速工具', link: '/海纳百川/测速工具' },
              { text: '免费资源推荐', link: '/海纳百川/免费资源推荐' },
              { text: '付费资源推荐', link: '/海纳百川/付费资源推荐' }
            ]
          }
        ]
      },
      
      // 社交链接
      socialLinks: [
        { icon: 'github', link: 'https://github.com/kyjl' },
        { 
          icon: {
            svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>RSS</title><path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"/></svg>'
          }, 
          link: '/feed.rss' 
        }
      ],
      
      // 搜索配置
      search: {
        provider: 'local',
        options: {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接'
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者'
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈'
              }
            }
          }
        }
      },
      
      // 页脚配置
      footer: {
        message: '<a href="/about/">关于我们</a> | <a href="/contact/">联系我们</a> | <a href="/friends/">友情链接</a> | <a href="/privacy/">隐私政策</a> | <a href="/feed.rss">RSS订阅</a>',
        copyright: '© 2025 开源节流 | <a href="https://beian.miit.gov.cn/" target="_blank">备案号</a>'
      },

      // 编辑链接
      editLink: {
        pattern: 'https://github.com/kyjl/website/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页面'
      },
      
      // 最后更新时间
      lastUpdated: {
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
        }
      },
      
      // 文档页脚
      docFooter: {
        prev: '上一页',
        next: '下一页'
      },
      
      // 大纲
      outline: {
        level: [2, 3],
        label: '页面导航'
      },
      
      // 返回顶部
      returnToTopLabel: '回到顶部',
      
      // 侧边栏菜单标签
      sidebarMenuLabel: '菜单',
      
      // 深色模式切换标签
      darkModeSwitchLabel: '主题',
      lightModeSwitchTitle: '切换到浅色模式',
      darkModeSwitchTitle: '切换到深色模式',

      // Giscus 评论系统配置
      giscus: {
        repo: 'Kaiy9/ky-vitepress',
        repoId: 'R_kgDOPMO9-w',
        category: 'Announcements',
        categoryId: 'DIC_kwDOPMO9-84Cs7o9',
        mapping: 'pathname',
        strict: '0',
        reactionsEnabled: '1',
        emitMetadata: '0',
        inputPosition: 'bottom',
        theme: 'preferred_color_scheme',
        lang: 'zh-CN',
        loading: 'lazy'
      }
    },
    
    // Markdown配置
    markdown: {
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      },
      lineNumbers: true,
      math: true, // 启用数学公式支持
      container: {
        tipLabel: '提示',
        warningLabel: '警告',
        dangerLabel: '危险',
        infoLabel: '信息',
        detailsLabel: '详细信息'
      },
      config: (md) => {
        // 添加自定义插件
        md.use(require('markdown-it-task-lists'), { enabled: true })
        md.use(require('markdown-it-footnote'))
        md.use(require('markdown-it-mark'))
        md.use(require('markdown-it-ins'))
        md.use(require('markdown-it-sub'))
        md.use(require('markdown-it-sup'))
        md.use(require('markdown-it-abbr'))
        md.use(require('markdown-it-deflist'))
      }
    },
    
    // 清理URL
    cleanUrls: true,
    
    // 元数据块
    metaChunk: true,
    
    // 构建时排除的文件
    srcExclude: ['**/README.md', '**/TODO.md', '**/CHANGELOG.md'],
    
    // 忽略死链接
    ignoreDeadLinks: [
      // 忽略特定的外部链接
      /^https?:\/\/localhost/,
      /^https?:\/\/127\.0\.0\.1/
    ],
    
    // 缓存目录
    cacheDir: './.vitepress/cache',
    
    // 输出目录
    outDir: './.vitepress/dist',
    
    // 开发服务器配置
    server: {
      port: 5173,
      host: true,
      open: true
    },

    // 构建钩子 - 用于生成RSS feed
    buildEnd: async (config) => {
      // RSS feed 生成逻辑
      // const { generateRSSFeed } = await import('./scripts/rss.js')
      await generateRSSFeed(config)
    },

    // PWA配置 (需要安装 vite-plugin-pwa)
    pwa: {
      outDir: '.vitepress/dist',
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,vue}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1年
              },
              cacheKeyWillBeUsed: async ({ request }) => {
                return `${request.url}?v=1`
              }
            }
          }
        ]
      },
      manifest: {
        name: '开源节流',
        short_name: 'KYJL',
        description: '搞钱省钱第一站，专注于分享最新线报、免费羊毛和实用工具资源',
        theme_color: '#667eea',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    }
  })
)

