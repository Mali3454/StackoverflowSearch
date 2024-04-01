import React, { useState, useEffect } from 'react'
import { useSnapshot } from 'valtio'
import store from '../store/store'
import api from '../api/api'
import { Paper, List } from '@mui/material'
import Loader from './MuiLoader'
import ErrorAlertek from './MuiAlertek'
import TagListHeader from './TagListHeader'
import TagListItem from './TagListItem'
import Pagination from './Pagination'

const TagList: React.FC = () => {
	const snap = useSnapshot(store)
	const [error, setError] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		const fetchTags = async () => {
			setIsLoading(true)
			try {
				setError(null)
				const response = await api.get('/tags', {
					params: {
						pagesize: snap.pageSize,
						order: snap.sortOrder,
						sort: snap.sortBy,
						page: snap.currentPage,
					},
				})
				store.tags = response.data.items
			} catch (error) {
				console.error(error)
				setError('Coś poszło nie tak.')
			} finally {
				setIsLoading(false)
			}
		}

		fetchTags()
	}, [snap.pageSize, snap.sortOrder, snap.sortBy, snap.currentPage])

	const handlePrevPage = () => {
		store.currentPage = Math.max(1, snap.currentPage - 1)
	}

	const handleNextPage = () => {
		store.currentPage += 1
	}

	const toggleSortOrder = () => {
		store.sortOrder = store.sortOrder === 'asc' ? 'desc' : 'asc'
	}

	return (
		<Paper elevation={2}>
			{isLoading ? (
				<Loader />
			) : error ? (
				<ErrorAlertek message={error} />
			) : (
				<>
					<List>
						<TagListHeader onSortChange={toggleSortOrder} />
						{snap.tags.map(tag => (
							<TagListItem key={tag.name} tag={tag} />
						))}
					</List>
					<Pagination onPrev={handlePrevPage} onNext={handleNextPage} isPrevDisabled={snap.currentPage === 1} />
				</>
			)}
		</Paper>
	)
}

export default TagList
