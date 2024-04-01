// src/App.tsx
import React from 'react'
import { CssBaseline, Container } from '@mui/material'
import TagList from './components/TagList'
import Controls from './components/Controls'

const App: React.FC = () => {
	return (
		<>
			<CssBaseline />
			<Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
				<Controls />
				<TagList />
			</Container>
		</>
	)
}

export default App
