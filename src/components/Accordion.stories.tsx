import {Meta, StoryObj} from '@storybook/react'
import React, {ChangeEvent, useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from '@storybook/addon-actions'

const meta: Meta<typeof Accordion> = {
    args: {
        titleValue: 'hello',
        collapsed: true,
    },
    component: Accordion
}

export default meta;
type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    args: {
        titleValue: 'hello',
        collapsed: true,
    },
};

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion onChange={onChangeHandler}   titleValue={'CollapsedAccordion'} collapsed={true}/>
}

export const OpenedAccordion = () => {
    return <Accordion  onChange={onChangeHandler}  titleValue={'OpenedAccordion'} collapsed={false}/>
}

export const DemoAccordion = () => {
    return <Accordion
        titleValue={'DemoAccordion'}
        collapsed={false}
        onChange={onChangeHandler}
    />
}

export const DemoInput = () => {
    const[value, setValue] = useState('123')
    return <input value={value}
                  onChange={(e: ChangeEvent<HTMLInputElement>)=> {
                      setValue(e.currentTarget.value)
                      console.log(e.currentTarget.value)
                  }}
    />
}