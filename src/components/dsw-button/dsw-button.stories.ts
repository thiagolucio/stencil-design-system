export default {
  title: 'Components/DswButton',
  parameters: {
    actions: {
      argTypesRegex: '^on.*'
    }
  },
  argTypes: {
    text: { control: 'text' },
    type: {
      control: { type: 'select'},
      options: ['button', 'submit', '...'],
    },
    appearance: {
      control: { type: 'select' },
      options: ['button-primary-large', 'button-secondary-large', 'button-ghost-large'],
    },

  },
};

const Template = (args: { appearance: string; text: string; type: string; }) => `<dsw-button appearance="${args.appearance}" alt="${args.text}" type="${args.type}" text="${args.text}"></dsw-button>`;

export const ButtonPrimaryLarge = Template.bind({});
ButtonPrimaryLarge.args = {
ButtonPrimaryLarge: true,
text: 'Button Primary Large',
type: 'button',
appearance: 'button-primary-large',
};


export const ButtonSecondaryLarge = Template.bind({});
ButtonSecondaryLarge.args = {
ButtonSecondaryLarge: true,
text: 'Button Secondary Large',
type: 'button',
appearance: 'button-secondary-large',
};


export const ButtonGhostLarge = Template.bind({});
ButtonGhostLarge.args = {
ButtonGhostLarge: true,
text: 'Button Ghost Large',
type: 'button',
appearance: 'button-ghost-large',
};
