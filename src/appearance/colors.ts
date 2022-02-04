export const customColors = {
  available: {
    background: '#6b6e6c',
    text: '#fff',
  },
  failure: {
    background: '#393b3a',
    text: '#fff',
  },
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
    borderColor: customColors.available.background,
    borderWidth: 2,
    color: customColors.available.background,
    paddingHorizontal: 4,
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
