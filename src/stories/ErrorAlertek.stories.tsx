import { Meta, StoryObj } from '@storybook/react'
import ErrorAlertek from '../components/MuiAlertek'

const meta: Meta<typeof ErrorAlertek> = {
	title: 'Example/ErrorAlertek',
	component: ErrorAlertek,
	tags: ['autodocs'],
	argTypes: {
		message: {
			control: 'text',
			description: 'Wyświetlana wiadomość',
		},
		severity: {
			control: 'select',
			options: ['error', 'warning', 'info', 'success'],
			description: 'Ustaw typ',
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Error: Story = {
	args: {
		message: 'Coś poszło nie tak',
		severity: 'error',
	},
}
