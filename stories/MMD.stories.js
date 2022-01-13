import { init } from "./MMD";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: "MMD/MMDLoader",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return init();
};

export const Primary = Template.bind({});
