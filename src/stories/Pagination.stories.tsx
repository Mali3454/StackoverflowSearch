import { Meta, StoryObj } from '@storybook/react'
import Pagination from '../components/Pagination'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Pagination> = {
	title: 'Example/Pagination',
	component: Pagination,
	tags: ['autodocs'],
	argTypes: {
		isPrevDisabled: {
			control: 'boolean',
			description: 'Czy wygaszony',
		},
		prevButtonStyle: {
			control: 'object',
			description: 'Dodatkowy CSS',
		},
		nextButtonStyle: {
			control: 'object',
			description: 'Dodatkowy CSS',
		},
	},
	args: {
		onPrev: action('Poprzednia strona'),
		onNext: action('Następna strona'),
		isPrevDisabled: false,
		prevButtonStyle: {},
		nextButtonStyle: {},
	},
}

export default meta

type Story = StoryObj<typeof meta>

export const PaginationBtns: Story = {
	args: {
		prevButtonStyle: { backgroundColor: 'red' },
		nextButtonStyle: { backgroundColor: 'blue' },
	},
}
