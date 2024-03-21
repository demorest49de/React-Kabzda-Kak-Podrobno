import {Meta, StoryObj} from '@storybook/react'
import {Select} from "./Select";
import {items} from "../../App";
import React from 'react';

const meta: Meta<typeof Select> = {
    args: {
        items: items
    },
    component: Select
}

export default meta;
type Story = StoryObj<typeof Select>;

export const SecondStory: Story = {
    args: {
        items
    },
};

export const SelectStory = () => {
    return <Select items={items}/>
}