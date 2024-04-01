import React from 'react'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

interface MuiAlertek {
	message: string
	severity?: 'error' | 'warning' | 'info' | 'success'
}

const MuiAlertek: React.FC<MuiAlertek> = ({ message, severity = 'error' }) => {
	if (!message) return null

	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity={severity}>{message}</Alert>
		</Stack>
	)
}

export default MuiAlertek
