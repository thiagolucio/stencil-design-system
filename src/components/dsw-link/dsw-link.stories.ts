export default {
  title: 'Components/DswLink',
  parameters: {

  },
};

const Template = (args: { url: any; target: any; appearance: any; text: any; }) => `<dsw-link url="${args.url}" target="${args.target}" appearance="${args.appearance}" text="${args.text}" ></dsw-link>`;

export const LinkXXXL = Template.bind({});
LinkXXXL.args = {
  url: '#',
  target: '_blank',
  appearance: 'link-xxxl',
  text: 'Link XXXL',
};

export const LinkXXL = Template.bind({});
LinkXXL.args = {
  url: '#',
  target: '_blank',
  appearance: 'link-xxl',
  text: 'Link XXL',
};

export const LinkXL = Template.bind({});
LinkXL.args = {
  url: '#',
  target: '_blank',
  appearance: 'link-xl',
  text: 'Link XL',
};

export const LinkLG = Template.bind({});
LinkLG.args = {
  url: '#',
  target: '_self',
  appearance: 'link-lg',
  text: 'Link LG',
};


export const LinkMD = Template.bind({});
LinkMD.args = {
  url: '#',
  target: '_self',
  appearance: 'link-md',
  text: 'Link MD',
};

export const LinkSM = Template.bind({});
LinkSM.args = {
  url: '#',
  target: '_self',
  appearance: 'link-sm',
  text: 'Link SM',
};
