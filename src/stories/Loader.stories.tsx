import { Meta, StoryObj } from '@storybook/react'
import Loader from '../components/MuiLoader'

const meta: Meta<typeof Loader> = {
	title: 'Example/Loader',
	component: Loader,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		color: {
			control: 'select',
			options: ['primary', 'secondary', 'inherit'],
			description: 'Kolor',
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		color: 'primary',
	},
}
