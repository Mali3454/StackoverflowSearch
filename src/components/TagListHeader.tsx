import React from 'react'
import { ListItem, Typography, Box } from '@mui/material'

interface TagListHeader {
	onSortChange: () => void
	style?: React.CSSProperties
}

const TagListHeader: React.FC<TagListHeader> = ({ onSortChange, style }) => (
	<ListItem
		style={{ ...style, display: 'flex', justifyContent: 'space-between', padding: '10px 16px', background: '#f0f0f0' }}>
		<Box style={{ width: '50%', display: 'flex', cursor: 'pointer' }} onClick={onSortChange}>
			<Typography variant='subtitle1' component='span'>
				Nazwa
			</Typography>
		</Box>
		<Box style={{ width: '50%', display: 'flex', cursor: 'pointer' }} onClick={onSortChange}>
			<Typography variant='subtitle1' component='span'>
				Ilość
			</Typography>
		</Box>
	</ListItem>
)

export default TagListHeader
