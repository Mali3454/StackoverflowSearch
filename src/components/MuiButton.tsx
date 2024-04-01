import React from 'react'
import { Button } from '@mui/material'

interface MuiButton {
	onClick: () => void
	label: string
	variant?: 'contained' | 'outlined' | 'text'
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
	disabled?: boolean
}

const MuiButton: React.FC<MuiButton> = ({
	onClick,
	label,
	variant = 'contained',
	color = 'primary',
	disabled = false,
}) => (
	<Button variant={variant} color={color} onClick={onClick} disabled={disabled}>
		{label}
	</Button>
)

export default MuiButton
