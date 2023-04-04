import reducers from '../reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';

/**
 * logs store update when dispatching
 *
 * @param  {[type]} store [description]
 * @return {[type]}       [description]
 */

const logger = createLogger();

/**
 * returns list of middlewares
 *
 * @return Array[]
 */
const configureMiddlewares = props => {
	const middlewares = [logger, thunk];

	// if (process.env.NODE_ENV === 'development') {
	//   middlewares.push(logger);
	// }

	return middlewares;
};

/**
 * create a store
 * with configured middleware
 * and tell saga to track actions
 */
const configureReduxStore = initialState => {
	const middlewares = configureMiddlewares();

	const store = createStore(reducers, initialState, applyMiddleware(...middlewares));

	return store;
};

export default configureReduxStore;
