import { proxy, subscribe } from 'valtio'

interface Tag {
	name: string
	count: number
}

interface StoreState {
	tags: Tag[]
	pageSize: number
	sortOrder: 'asc' | 'desc'
	sortBy: 'name' | 'activity' | 'popular'
	currentPage: number
}

const storeKey = 'storeState'

const loadState = () => {
	const stateFromStorage = sessionStorage.getItem(storeKey)
	return stateFromStorage ? JSON.parse(stateFromStorage) : {}
}

const initialState: StoreState = {
	tags: [],
	pageSize: 10,
	sortOrder: 'desc',
	sortBy: 'popular',
	currentPage: 1,
	...loadState(),
}

const store = proxy<StoreState>(initialState)

subscribe(store, () => {
	sessionStorage.setItem(storeKey, JSON.stringify(store))
})

export default store
