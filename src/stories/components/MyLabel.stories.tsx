import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        // size: {control: 'select', options: ['normal']}
        color: {control: 'select'},
        colorCustom: { control: 'color' }
    }
} as ComponentMeta <typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> =  (args) => <MyLabel { ...args }/>

export const Basic = Template.bind({});
Basic.args = {
    size: 'h1',
    label: 'Siii Holaaa Mundoo',
    allCaps: true,
    colorCustom: 'blue'
}
export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    label: 'Siii Holaaa Mundoo',
    color: 'secondary',
    allCaps: false
}
export const Secondary = Template.bind({});
Secondary.args = {
    size: 'h2',
    label: 'Color Secondary',
    color: 'tertiary',
    allCaps: false,
    colorCustom: 'green'
}
export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'h3',
    label: 'Tertiary Text',
    allCaps: true
}