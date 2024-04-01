import { Meta, StoryObj } from '@storybook/react'
import MuiButton from '../components/MuiButton'

const meta: Meta<typeof MuiButton> = {
	title: 'Example/MuiButton',
	component: MuiButton,
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'Wyświetlany tekst',
		},
		variant: {
			control: 'radio',
			options: ['contained', 'outlined', 'text'],
			description: 'Wariant',
		},
		color: {
			control: 'select',
			options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
			description: 'Typ',
		},
		disabled: {
			control: 'boolean',
			description: 'Wygaszenie',
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		label: 'Zastosuj',
		variant: 'contained',
		color: 'primary',
		disabled: false,
	},
}


