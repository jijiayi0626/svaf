export const siteConfig = {
  name: 'SVAF',
  siteName: '小逸逸',
  title: '《小逸逸》官方网站',
  subtitle: 'XiaoYiY',
  url: 'https://xiaoyiy626.dpdns.org',
  icon: 'https://q2.qlogo.cn/headimg_dl?dst_uin=1589279229&spec=0',
  description: '《小逸逸》是一个专注于IT/互联网技术分享与实践的个人技术博客，在这里你可以找到众多前沿技术的分享与实践经验。',
  keywords: ['小逸逸','小逸逸官网','逸','小逸逸','逸逸','博客','XiaoYiY Blog','XiaoYiY','Blog','xiaoyiy blog','xiaoyiy','blog'],
  lang: 'zh_CN',
  ogImage: '/files/img/official.png',
  author: {
    name: 'XiaoYiY',
    url: 'https://xiaoyiy626.dpdns.org'
  },
  bio: {
    avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=1589279229&spec=0',
    name: '小逸逸',
    bio: 'Protect What You Love.',
    links: [
      {
        name: 'B站主页',
        icon: 'simple-icons:bilibili',
        url: 'https://space.bilibili.com/3546699276487471',
        color: '#fb7299'
      },
      {
        name: 'QQ群',
        icon: '/icon/QQ.svg',
        url: 'https://qm.qq.com/q/XMjoLHbQsO'
      },
      {
        name: 'GitHub',
        icon: 'mdi:github',
        url: 'https://github.com/jijiayi0626',
        color: ''
      },
    ]
  },
  live: {
    statusApi: 'https://b-live.2x.nz',
    roomUrl: 'https://live.bilibili.com/3546699276487471'
  },
  services: {
    aiDraw: 'https://ai.2x.nz',
    gallery: 'https://p.2x.nz',
    fileExplorer: 'https://e3.2x.nz/api/',
    nat: 'https://nat.2x.nz/api/analyze',
    statsShare: 'https://cloud.umami.is/share/WSZV4vjm9GQ1GM2A',
    longDomain: 'https://iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.in',
    pageViews: 'https://t.2x.nz/batch'
  },
  analytics: {
    umami: { src: 'https://cloud.umami.is/script.js', websiteId: '014b6324-1443-43f2-a811-3f48a3637839' },
    cfWebAnalytics: { token: '3f16281792459c0f4752d2b822c45d7b' },
    cfUmami: { src: 'https://t.2x.nz/tracker.js' },
    baidu: { id: '2d05653a84914e50cd244ad9a216befa' },
    google: { measurementId: 'G-S3LM35NRFL' },
    clarity: { projectId: 'v94yrasi99' }
  },
  giscus: {
    repo: 'afoim/giscus-fuwari',
    repoId: 'R_kgDOOi8quw',
    category: 'Announcements',
    categoryId: 'DIC_kwDOOi8qu84CprDV'
  },
  repos: {
    frontend: 'https://github.com/jijiayi0626/svaf',
    backend: 'https://github.com/jijiayi0626/acofork_forum_backend',
    natTool: 'https://github.com/afoim/webrtc_check_nat'
  },
  forum: {
    totpIssuer: 'XiaoYiY Forum'
  },
  links: {
    github: 'https://github.com/jijiayi0626/svaf'
  },
  navLinks: [
    { label: '博客', icon: 'mdi:post-outline', href: '/posts' },
    { label: '论坛', icon: 'mdi:forum', href: '/forum' },
    { label: '课程表', icon: 'mdi:calendar-month', href: '/timetable' },
    { label: '友链', icon: 'mdi:link-variant', href: '/friends' },
    { label: '赞助', icon: 'mdi:heart', href: '/sponsors' },
    { label: '统计', icon: 'mdi:chart-line', href: 'https://cloud.umami.is/share/WSZV4vjm9GQ1GM2A' }
  ] as const
};

export type SiteConfig = typeof siteConfig;
