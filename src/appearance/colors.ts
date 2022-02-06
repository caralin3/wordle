export const lightColors = {
  available: {
    background: '#828181',
    text: '#fff',
  },
  black: '#000',
  border: '#eee',
  gray: '#828181',
  failure: {
    background: '#393b3a',
    text: '#fff',
  },
  label: '#000',
  red: '#f01c05',
  success: {
    background: '#0e8f33',
    disabled: '#34543d',
    text: '#fff',
  },
  unset: {
    background: '#c7dff0',
    text: '#000',
  },
  wrong: {
    background: '#f2c511',
    text: '#fff',
  },
  white: '#fff',
};

export const darkColors = {
  available: {
    background: '#8F8F8F',
    text: '#fff',
  },
  black: '#000',
  border: '#eee',
  gray: '#8F8F8F',
  failure: {
    background: '#000',
    text: '#fff',
  },
  label: '#fff',
  red: '#f01c05',
  success: {
    background: '#0e8f33',
    disabled: '#34543d',
    text: '#fff',
  },
  unset: {
    background: '#393b3a',
    text: '#fff',
  },
  wrong: {
    background: '#f2c511',
    text: '#fff',
  },
  white: '#fff',
};

export const getColorStatus = (darkMode: boolean) => {
  const colors = darkMode ? darkColors : lightColors;
  return {
    available: {
      backgroundColor: colors.available.background,
      color: colors.available.text,
    },
    unset: {
      backgroundColor: colors.unset.background,
      borderColor: colors.gray,
      color: colors.unset.text,
    },
    set: {
      backgroundColor: colors.unset.background,
      borderColor: colors.unset.text,
      borderWidth: 2,
      color: colors.unset.text,
    },
    success: {
      backgroundColor: colors.success.background,
      borderColor: colors.gray,
      color: colors.success.text,
    },
    wrong: {
      backgroundColor: colors.wrong.background,
      borderColor: colors.gray,
      color: colors.wrong.text,
    },
    failure: {
      backgroundColor: colors.failure.background,
      borderColor: colors.gray,
      color: colors.failure.text,
    },
  };
};
