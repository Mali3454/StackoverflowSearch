import React from 'react'
import { Box, IconButton } from '@mui/material'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

interface Pagination {
	onPrev: () => void
	onNext: () => void
	isPrevDisabled: boolean
	prevButtonStyle?: React.CSSProperties
	nextButtonStyle?: React.CSSProperties
}

const Pagination: React.FC<Pagination> = ({ onPrev, onNext, isPrevDisabled, prevButtonStyle, nextButtonStyle }) => (
	<Box display='flex' justifyContent='center' padding='8px'>
		<IconButton onClick={onPrev} disabled={isPrevDisabled} style={prevButtonStyle}>
			<KeyboardArrowLeft />
		</IconButton>
		<IconButton onClick={onNext} style={nextButtonStyle}>
			<KeyboardArrowRight />
		</IconButton>
	</Box>
)

export default Pagination
