import { Meta, StoryObj } from '@storybook/react'
import TagListItem from '../components/TagListItem'

const meta: Meta<typeof TagListItem> = {
	title: 'Example/TagListItem',
	component: TagListItem,
	tags: ['autodocs'],
	argTypes: {
		tag: {
			control: 'object',
			description: 'Tag',
		},
		style: {
			control: 'object',
			description: 'Dodatkowy CSS',
		},
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const ListItem: Story = {
	args: {
		tag: {
			name: 'Sample Tag',
			count: 100,
		},
		style: {}, 
	},
}
