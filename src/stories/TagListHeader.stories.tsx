import { Meta, StoryObj } from '@storybook/react'
import TagListHeader from '../components/TagListHeader'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof TagListHeader> = {
	title: 'Example/TagListHeader',
	component: TagListHeader,
	tags: ['autodocs'],
	argTypes: {
		style: {
			control: 'object',
			description: 'Dodatkowy CSS',
		},
	},
	args: {
		onSortChange: action('onSortChange'),
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const ListHeader: Story = {
	args: {
		style: {},
	},
}
