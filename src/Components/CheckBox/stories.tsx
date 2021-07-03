import React from "react";
import { Story, Meta } from "@storybook/react";

import CheckBox, { CheckBoxProps } from ".";

export default {
  title: "CheckBox",
  component: CheckBox,
} as Meta;

const Template: Story<CheckBoxProps> = (args) => <CheckBox {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  checked: false,
  onChange: () => {},
};