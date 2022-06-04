import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const isDev = process.env.NODE_ENV === 'development'

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware()
	const middlewares = [sagaMiddleware]
	const enhancer = !isDev
		? compose(applyMiddleware(...middlewares))
		: composeWithDevTools(applyMiddleware(...middlewares))

	const store = createStore(rootReducer, enhancer)
	store.sagaTask = sagaMiddleware.run(rootSaga)

	return store
}

export default configureStore
