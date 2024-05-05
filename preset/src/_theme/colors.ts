import type { Theme } from './types'
export const colors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  brand: {
    1: '#E8F2FF',
    2: '#C0D9FF',
    3: '#98CEFF',
    4: '#6E9EFD',
    5: '#3B71EC',
    6: '#134BEA',
    7: '#0639C3',
    8: '#2038B0'
  },
  error: {
    1: '#FFE8E8',
    2: '#FFCEC6',
    3: '#FFADA4',
    4: '#FF8A82',
    5: '#FF6560',
    6: '#F53C3C',
    7: '#C41424',
    8: '#A6141D'
  },
  warningM: {
    1: '#FFF5E8',
    2: '#FFE2C2',
    3: '#FFCD9C',
    4: '#FFB675',
    5: '#FF9B4F',
    6: '#FF7F29',
    7: '#D25D18',
    8: '#A6400C'
  },
  warningL: {
    1: '#FFFBE0',
    2: '#FFF2BA',
    3: '#FFE68D',
    4: '#FFD65F',
    5: '#FFC532',
    6: '#FFB005',
    7: '#D28A01',
    8: '#A66702'
  },
  success: {
    1: '#E8FFEF',
    2: '#B7F1CB',
    3: '#8AE3AC',
    4: '#62D592',
    5: '#3DC77B',
    6: '#1DB969',
    7: '#139E5B',
    8: '#0A834D'
  },
  alarm: {
    1: '#F6E3E0',
    2: '#EDC6C1',
    3: '#DCA39D',
    4: '#CA817D',
    5: '#B26161',
    6: '#A74748',
    7: '#902E33',
    8: '#7A1A22'
  },
  gray: {
    1: '#F6F7FB',
    2: '#F1F2F5',
    3: '#E9EAF0',
    4: '#CBD0DB',
    5: '#ADB1BC',
    6: '#7E8494',
    7: '#353C51',
    8: '#1E2435',
  },
  forest: {
    1: '#FDFFE8',
    2: '#EAF5BB',
    3: '#D6EB8C',
    4: '#C1E062',
    5: '#ABD63C',
    6: '#94CC19',
    7: '#75AC11',
    8: '#5A8C08',
  },
  sunrise: {
    1: '#FCFBD1',
    2: '#FFF9AE',
    3: '#FEF288',
    4: '#FFE963',
    5: '#FAE04D',
    6: '#F5D400',
    7: '#D2A206',
    8: '#A67A05',
  },
  candy: {
    1: '#E3FAF6',
    2: '#B6F3E8',
    3: '#88E7DD',
    4: '#5BDBD3',
    5: '#36CDC9',
    6: '#15B5B5',
    7: '#0A979C',
    8: '#016D74',
  },
  skyblue: {
    1: '#E3F5FA',
    2: '#C4EFFF',
    3: '#9FE3FF',
    4: '#7DD3FF',
    5: '#57C2FF',
    6: '#32A5F2',
    7: '#1F85D2',
    8: '#1060A6',
  },
  purple: {
    1: '#F7E7FF',
    2: '#EAC9FD',
    3: '#DBAAFB',
    4: '#C98CF8',
    5: '#B76DF5',
    6: '#A250F4',
    7: '#7932CA',
    8: '#551BA0',
  },
  magenta: {
    1: '#FFE8F1',
    2: '#F6C0D6',
    3: '#ED9ABF',
    4: '#E476AB',
    5: '#DB559A',
    6: '#D2368B',
    7: '#B12275',
    8: '#8F125F',
  },
  // font: {
  //   1: '#F6F7FB',
  //   2: '#F1F2F5',
  //   3: '#E9EAF0',
  //   4: '#CBDODB',
  //   5: '#ADB1BC',
  //   6: '#7E8494',
  //   7: '#353C51',
  //   8: '#1E2435',
  // }
} satisfies Theme['colors']

enum colorMap {
  light = 1,
  disabled = 2,
  hover = 4,
  active = 5,
  normal = 6,
}

Object.values(colors as Required<Theme>['colors']).forEach((color) => {
  if (typeof color !== 'string' && color !== undefined) {
    for (let [key, value] of Object.entries(color)) {
      if(typeof key == 'number') {
        const colorKey = colorMap[key]
        if (colorKey) color[colorKey] = value
      }
    }
  }
})