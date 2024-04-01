import { Meta, StoryObj } from '@storybook/react'
import MuiTextField from '../components/MuiTextField'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof MuiTextField> = {
	title: 'Example/MuiTextField',
	component: MuiTextField,
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'Label',
		},
		value: {
			control: 'text',
			description: 'Wartość',
		},
		type: {
			control: 'select',
			options: ['text', 'number', 'password', 'email'],
			description: 'Typ',
		},
		select: {
			control: 'boolean',
			description: 'Czy select',
		},
		menuItems: {
			control: 'object',
			description: 'Pola wyboru',
		},
		style: {
			control: 'object',
			description: 'Dodatkowe style CSS',
		},
	},
	args: {
		onChange: action('changed'),
		style: {},
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Input: Story = {
	args: {
		label: 'Input',
		value: '',
		type: 'text',
		select: false,
		menuItems: [],
		style: { width: '200px' },
	},
}

export const Select: Story = {
	args: {
		label: 'Select',
		value: '',
		select: true,
		menuItems: [
			{ value: 'option1', label: 'Option 1' },
			{ value: 'option2', label: 'Option 2' },
		],
		style: { width: '200px' },
	},
}
