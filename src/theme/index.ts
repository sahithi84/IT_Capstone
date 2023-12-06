// @ts-ignore
import {createTheming, DefaultTheme} from '@callstack/react-theme-provider';

// Define the type for your theme
type Theme = DefaultTheme & {
  colors: {
    background: string;
    backgroundBlue: string;
    backgroundOrange: string;
    // ... Add other color properties here
  };
  borderRadius: {
    verySmall: number;
    small: number;
    normal: number;
    large: number;
    xl: number;
    xxl: number;
    round: number;
  };
  borderWidth: {
    verythin: number;
    thin: number;
    normal: number;
    bold: number;
    fat: number;
  };
  fontWeights: {
    normal: string;
    lightBold: string;
    bold: string; // this should be semi-bold
    Bold: string;
    moreBold: string;
    veryBold: string;
    semiBold: string;
  };
  shadow: {
    shadowColor: string;
    shadowOffset: {width: number; height: number};
    shadowRadius: number;
    elevation: number;
  };
  fonts: {
    bold: string;
    semibold: string;
    medium: string;
    regular: string;
    italic: string;
  };
  fontSizes: {
    heading1: {
      fontSize: number;
      lineHeight: number;
    };
    heading2: {
      fontSize: number;
      lineHeight: number;
    };
    heading3: {
      fontSize: number;
      lineHeight: number;
    };
    heading4: {
      fontSize: number;
      lineHeight: number;
    };
    heading5: {
      fontSize: number;
      lineHeight: number;
    };
    heading6: {
      fontSize: number;
      lineHeight: number;
    };
    xlarge: {
      fontSize: number;
      lineHeight: number;
    };
    large: {
      fontSize: number;
      lineHeight: number;
    };
    largeMedium: {
      fontSize: number;
      lineHeight: number;
    };
    medium: {
      fontSize: number;
      lineHeight: number;
    };
    small: {
      fontSize: number;
      lineHeight: number;
    };
    xsmall: {
      fontSize: number;
      lineHeight: number;
    };
  };
};

export const themes: Theme = {
  barStyle: 'light-content',
  colors: {
    background: '#FFFFFF',
    backgroundBlue: '#E9F0FF',
    backgroundOrange: '#FFD3BD',
    backgroundYellow: '#FFFBE6',
    backgroundGrey: '#FCFCFC',
    primary: '#00AE5A',
    primaryBlue: '#003AC9',
    primaryBlue800: '#0746E1',
    primaryBlue600: '#1055FE',
    primaryBlue400: '#336EFF',
    primaryBlue300: '#3F76FF',
    primaryBlue200: '#628FFF',
    primaryBlue100: '#A0BCFF',
    primaryOrange: '#FF5500',
    primaryOrange800: '#FC6A22',
    primaryOrange700: '#FF7954',
    primaryOrange600: '#FF8868',
    primaryOrange400: '#FFAB95',
    primaryOrange200: '#FFC7B8',
    primaryOrange100: '#FFE0D8',
    primaryYellow: '#FFB500',
    primaryYellow800: '#FFC026',
    primaryYellow600: '#FAD266',
    primaryYellow400: '#FCE199',
    primaryYellow200: '#FDF0CC',
    primaryYellow100: '#FFFBE6',
    success: '#10C900',
    info: '#003AC9',
    warning: '#FFB500',
    error: '#F94E6B',
    disable: '#D8D8D8',
    disableButton: '#879AC1',
    greyscale800: '#424242',
    greyscale750: '#676767',
    greyscale700: '#616161',
    greyscale600: '#757575',
    greyscale500: '#9E9E9E',
    greyscale400: '#BDBDBD',
    greyscale300: '#E0E0E0',
    greyscale200: '#EEEEEE',
    greyscale100: '#F5F5F5',
    greyscale50: '#FAFAFA',
    greyscale25: '#F2F0F4',
    greyscale10: '#D1D5DB',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    black: '#000000',
    black800: '#111111',
    darkShade: '#0A0521',
    text: '#212121',
    bodyGray: '#676767',
    textLightWhite: '#C3D4FF',
    black900: '#101A24',
  },
  borderRadius: {
    verySmall: 4,
    small: 6,
    normal: 10,
    large: 12,
    xl: 16,
    xxl: 24,
    round: 84,
  },
  borderWidth: {
    verythin: 0.5,
    thin: 0.6,
    normal: 1,
    bold: 1.5,
    fat: 2,
  },
  fontWeights: {
    normal: 'normal',
    lightBold: '400',
    bold: '500', // this should be semi-bold
    Bold: 'bold',
    moreBold: '600',
    veryBold: '700',
    semiBold: '500',
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 2, height: 4},
    shadowRadius: 10,
    elevation: 5,
  },
  fonts: {
    bold: 'OpenSans-Bold',
    semibold: 'OpenSans-SemiBold',
    medium: 'OpenSans-Medium',
    regular: 'OpenSans-Regular',
    italic: 'OpenSans-Italic',
  },
  fontSizes: {
    heading1: {
      fontSize: 48,
      lineHeight: 52.8,
    },
    heading2: {
      fontSize: 40,
      lineHeight: 44,
    },
    heading3: {
      fontSize: 32,
      lineHeight: 35.2,
    },
    heading4: {
      fontSize: 24,
      lineHeight: 28.8,
    },
    heading5: {
      fontSize: 20,
      lineHeight: 24,
    },
    heading6: {
      fontSize: 18,
      lineHeight: 21.6,
    },
    xlarge: {
      fontSize: 18,
      lineHeight: 25.2,
    },
    large: {
      fontSize: 16,
      lineHeight: 22.4,
    },
    largeMedium: {
      fontSize: 14,
      lineHeight: 24,
    },
    medium: {
      fontSize: 14,
      lineHeight: 19.6,
    },
    small: {
      fontSize: 12,
      lineHeight: 16.34,
    },
    xsmall: {
      fontSize: 10,
      lineHeight: 13.62,
    },
  },
};

const {ThemeProvider, withTheme, useTheme} = createTheming(themes);

export {ThemeProvider, withTheme, useTheme};
