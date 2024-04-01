import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

interface MuiLoader {
	color?: 'primary' | 'secondary' | 'inherit'
}

const MuiLoader: React.FC<MuiLoader> = ({ color = 'primary' }) => {
	return (
		<Box display='flex' justifyContent='center' alignItems='center' minHeight='300px'>
			<CircularProgress color={color} />
		</Box>
	)
}

export default MuiLoader
