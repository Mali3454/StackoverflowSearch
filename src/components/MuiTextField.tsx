import React from 'react'
import { TextField, MenuItem } from '@mui/material'

interface MuiTextField {
	label: string
	value: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	type?: string
	select?: boolean
	menuItems?: { value: string; label: string }[]
	style?: React.CSSProperties
}

const MuiTextField: React.FC<MuiTextField> = ({
	label,
	value,
	onChange,
	type = 'text',
	select = false,
	menuItems = [],
	style = {},
}) => (
	<TextField
		select={select}
		label={label}
		type={type}
		value={value}
		onChange={onChange}
		variant='outlined'
		style={{ minWidth: 'min-content', ...style }}>
		{select &&
			menuItems.map(item => (
				<MenuItem key={item.value} value={item.value}>
					{item.label}
				</MenuItem>
			))}
	</TextField>
)

export default MuiTextField
