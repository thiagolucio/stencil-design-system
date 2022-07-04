export default {
  title: 'Components/DswLogo',
  parameters: {
  },
};

const Template = (args) => `<dsw-logo url="${args.url}" width="${args.width}"></dsw-logo>`;

export const Logo = Template.bind({});
Logo.args = {
  url: ' http://localhost:3333/assets/img/logo-svg.svg',
  width: 120,
};
