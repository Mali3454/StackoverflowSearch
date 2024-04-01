import React from 'react'
import { useSnapshot } from 'valtio'
import store from '../store/store'
import { Box } from '@mui/material'
import MuiButton from './MuiButton'
import MuiTextField from './MuiTextField'

const Controls: React.FC = () => {
	const snap = useSnapshot(store)
	const [pageSize, setPageSize] = React.useState(snap.pageSize.toString())
	const [sortBy, setSortBy] = React.useState<'name' | 'activity' | 'popular'>(snap.sortBy)

	const handlePageSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPageSize(event.target.value)
	}

	const handleSortByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		if (value === 'name' || value === 'activity' || value === 'popular') {
			setSortBy(value as 'name' | 'activity' | 'popular')
		}
	}

	const applyChanges = () => {
		const newSize = parseInt(pageSize, 10)
		if (!isNaN(newSize) && newSize > 0) {
			store.pageSize = newSize
		}
		store.sortBy = sortBy
	}

	return (
		<Box display='flex' gap={2} marginBottom={2} alignItems='center'>
			<MuiTextField
				select
				label='Sortuj'
				value={sortBy}
				onChange={handleSortByChange}
				menuItems={[
					{ value: 'name', label: 'Nazwa' },
					{ value: 'activity', label: 'Aktywność' },
					{ value: 'popular', label: 'Popularność' },
				]}
			/>
			<MuiTextField label='Ilość elementów' type='number' value={pageSize} onChange={handlePageSizeChange} />
			<MuiButton onClick={applyChanges} label='Zastosuj' />
		</Box>
	)
}

export default Controls
