import { Meta, Story } from "@storybook/react";

import Table, { TableProps } from "../components/Table/Table";

export default {
  title: "Custom Table",
  component: Table,
} as Meta<TableProps>;

const Template: Story<TableProps> = (args) => <Table {...args} />;

const data = [
  { Name: "John Doe", Age: 25, City: "New York" },
  { Name: "Jane Smith", Age: 30, City: "Los Angeles" },
  { Name: "Bob Johnson", Age: 22, City: "Chicago" },
  { Name: "Sarah Lee", Age: 27, City: "Houston"},
  { Name: "Mike Wu", Age: 31, City: "Philadelphia"},
  { Name: "Jessica Adams", Age: 35, City: "San Diego"},
  { Name: "Chris Davis", Age: 29, City: "Dallas"},
  { Name: "Tina Green", Age: 40, City: "Jacksonville"},
  { Name: "Anthony Griffin", Age: 19, City: "Detroit"},
  { Name: "Candice Wright", Age: 26, City: "Indianapolis"}
];;

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  data,
  backgroundColor: "#B0E1C3",
  fontColor: "black",
  width: "100%",
};


