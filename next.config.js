const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    // 필요에 따라 다른 옵션들을 추가할 수 있습니다.
  }
});

module.exports = withNextra({
  sidebar: {
    defaultMenuCollapseLevel: Infinity, // 모든 폴더가 기본적으로 확장되지 않도록 설정
    autoCollapse: true // 활성화되지 않은 폴더를 자동으로 축소
  }
});
