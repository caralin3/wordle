export const customColors = {
  available: {
    background: '#6b6e6c',
    text: '#fff',
  },
  black: '#000',
  border: '#eee',
  gray: '#6b6e6c',
  failure: {
    background: '#393b3a',
    text: '#fff',
  },
  red: '#f01c05',
  success: {
    background: '#0e8f33',
    disabled: '#34543d',
    text: '#fff',
  },
  unset: {
    background: '#c7dff0',
    text: 'black',
  },
  wrong: {
    background: '#f2c511',
    text: '#fff',
  },
  white: '#fff',
};

export const ColorStatusTheme = {
  available: {
    backgroundColor: customColors.available.background,
    color: customColors.available.text,
  },
  unset: {
    backgroundColor: customColors.unset.background,
    color: customColors.unset.text,
  },
  set: {
    backgroundColor: customColors.unset.background,
    borderColor: customColors.black,
    borderWidth: 2,
    color: customColors.black,
  },
  success: {
    backgroundColor: customColors.success.background,
    color: customColors.success.text,
  },
  wrong: {
    backgroundColor: customColors.wrong.background,
    color: customColors.wrong.text,
  },
  failure: {
    backgroundColor: customColors.failure.background,
    color: customColors.failure.text,
  },
};
