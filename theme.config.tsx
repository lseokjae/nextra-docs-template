export default {
  project: {
    link: 'https://github.com/username/project',
  },
  docsRepositoryBase: 'https://github.com/username/project/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – My Project',
    };
  },
  navigation: {
    prev: true,
    next: true,
  },
  sidebar: {
    titleComponent: ({ title }) => <>🔤 {title}</>,
  },
  toc: {
    float: true,
  },
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'ko-KR', text: '한국어' },
  ],
  darkMode: false,
  nextThemes: {
    defaultTheme: 'system',
  },
  primaryHue: 200,
  logo: <span>My Project</span>,
  projectLink: 'https://github.com/username/project',
  // banner: {
  //   text: 'Welcome to my project!',
  //   dismissible: true,
  // },
  search: {
    placeholder: 'Search...',
  },
  // 메뉴 항목 추가
  navs: [
    { name: 'Home', url: '/' },
    { name: '글자수세기', url: '/word-count' },
    { name: 'About', url: '/about' },
  ],
};
