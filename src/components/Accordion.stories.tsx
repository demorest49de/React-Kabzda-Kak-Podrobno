import { Meta } from '@storybook/react'
import React from 'react';
import {Accordion} from "./Accordion";

const meta: Meta<typeof Accordion> = {
    component: Accordion
}

export  default meta;

 export const CollapsedAccordion  = () =>{
    return <Accordion titleValue={'CollapsedAccordion'} collapsed={true}/>
}
 export const OpenedAccordion  = () =>{
    return <Accordion titleValue={'OpenedAccordion'} collapsed={false}/>
}