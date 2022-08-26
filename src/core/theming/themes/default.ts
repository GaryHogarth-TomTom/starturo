export type ThemeProps = {
  colorScheme: string;
  colorMode: 'light' | 'dark';
};
export const theme = {
  components: {
    Button: {
      variants: {
        primary: ({ colorMode }: ThemeProps) => {
          return {
            backgroundColor: colorMode === 'dark' ? 'red.300' : 'blue.300',
            rounded: 'full',
          };
        },
      },
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        fontSize: 20,
        rounded: 'full',
      },
    },
    Select: {
      baseStyle: ({ colorScheme, colorMode }: ThemeProps) => {
        return {
          borderColor: colorMode === 'dark' ? 'red.300' : 'blue.300',
          borderWidth: '1',
          borderRadius: '32',
        };
      },
    },
    Icon: {
      baseStyle: ({ colorMode }: ThemeProps) => {
        return {
          color: colorMode === 'dark' ? 'red.300' : 'yellow.300',
        };
      },
    },
  },
};
