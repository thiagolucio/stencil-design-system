export default {
  title: 'Components/DswSubtitle',
  parameters: {
  },
};

const Template = (args) => `<dsw-subtitle appearence="${args.appearence}" text="${args.text}"></dsw-subtitle>`;

export const SubtitleHudge = Template.bind({});
SubtitleHudge.args = {
  appearence: 'subtitle-huge',
  text: 'Subtitle Hudge',
};

export const SubtitleXXXXL = Template.bind({});
SubtitleXXXXL.args = {
  appearence: 'subtitle-xxxxl',
  text: 'Subtitle XXXXL',
};

export const SubtitleXXXL = Template.bind({});
SubtitleXXXL.args = {
  appearence: 'subtitle-xxxl',
  text: 'Subtitle XXXL',
};

export const SubtitleXXL = Template.bind({});
SubtitleXXL.args = {
  appearence: 'subtitle-xxl',
  text: 'Subtitle XXL',
};

export const SubtitleXL = Template.bind({});
SubtitleXL.args = {
  appearence: 'subtitle-xl',
  text: 'Subtitle xl',
};

export const SubtitleLR = Template.bind({});
SubtitleLR.args = {
  appearence: 'subtitle-lr',
  text: 'Subtitle LR',
};

export const SubtitleLG = Template.bind({});
SubtitleLG.args = {
  appearence: 'subtitle-lg',
  text: 'Subtitle LG',
};

export const SubtitleMM = Template.bind({});
SubtitleMM.args = {
  appearence: 'subtitle-mm',
  text: 'Subtitle MM',
};

export const SubtitleMD = Template.bind({});
SubtitleMD.args = {
  appearence: 'subtitle-md',
  text: 'Subtitle MD',
};
