import * as TYPES from '../constants/actionTypes';

const albums = (
	state = {
		isLoading: false,
		error: null,
		albums: []
	},
	action
) => {
	switch (action.type) {
		case TYPES.FETCH_ALBUMS_REQUEST:
			return {
				...state,
				isLoading: true
			};

		case TYPES.FETCH_ALBUMS_SUCCESS:
			const {
				results: {
					albummatches: { album }
				}
			} = action.data;
			return {
				...state,
				isLoading: false,
				error: null,
				albums: album
			};

		case TYPES.FETCH_ALBUMS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.error,
				albums: []
			};

		default:
			return state;
	}
};

export default albums;
