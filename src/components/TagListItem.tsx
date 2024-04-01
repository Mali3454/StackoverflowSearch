import React from 'react'
import { ListItem, Typography, Box } from '@mui/material'

interface Tag {
	name: string
	count: number
}

interface TagListItem {
	tag: Tag
	style?: React.CSSProperties
}

const TagListItem: React.FC<TagListItem> = ({ tag, style }) => (
	<ListItem style={{ ...style, display: 'flex', justifyContent: 'space-between', padding: '10px 16px' }}>
		<Box style={{ width: '50%', display: 'flex' }}>
			<Typography variant='body1' component='span'>
				{tag.name}
			</Typography>
		</Box>
		<Box style={{ width: '50%', display: 'flex' }}>
			<Typography variant='body1' component='span'>
				{tag.count}
			</Typography>
		</Box>
	</ListItem>
)

export default TagListItem
