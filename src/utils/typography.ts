import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['700', '600', '500', '400', '300', '200'],
    },
    {
      name: 'Open Sans',
      styles: [
        '700',
        '700i',
        '600',
        '600i',
        '500',
        '500i',
        '400',
        '400i',
        '300',
        '300i',
        '200',
        '200i',
      ],
    },
  ],
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  headerFontFamily: ['Raleway'],
  bodyFontFamily: ['Open Sans'],
  overrideThemeStyles: ({ rhythm }): { h1: { fontSize: string } } => ({
    h1: {
      fontSize: rhythm(2.5),
    },
  }),
});

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
