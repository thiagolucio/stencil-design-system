import {DswHeading} from "./dsw-heading";

export default {
  title: 'Heading',
  component: DswHeading,
};

const Template = (args) => `<dsw-heading appearence="${args.appearence}" text="${args.text}"></dsw-heading>`;

export const HeadingDisplay5 = Template.bind({});
HeadingDisplay5.args = {
  appearence: 'heading-display5',
  text: 'Heading Display5',  // text to display\
};

export const HeadingDisplay4 = Template.bind({});
HeadingDisplay4.args = {
  appearence: 'heading-display4',
  text: 'Heading Display4',
};

export const HeadingDisplay3 = Template.bind({});
HeadingDisplay3.args = {
  appearence: 'heading-display3',
  text: 'Heading Display3',
};

export const HeadingXXXXXL = Template.bind({});
HeadingXXXXXL.args = {
  appearence: 'heading-xxxxxl',
  text: 'Heading xxxxxl',
};

export const HeadingXXXXL = Template.bind({});
HeadingXXXXL.args = {
  appearence: 'heading-xxxxxl',
  text: 'Heading xxxxl',
};

export const HeadingXXXL = Template.bind({});
HeadingXXXL.args = {
  appearence: 'heading-xxxxl',
  text: 'Heading xxxl',
};

export const HeadingXXL = Template.bind({});
HeadingXXL.args = {
  appearence: 'heading-xxxl',
  text: 'Heading xxl',
};
