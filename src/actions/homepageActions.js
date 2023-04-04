import { FETCH_ALBUMS_REQUEST, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_ERROR } from '../constants/actionTypes';
import { FETCH_ALBUMS_URL, API_KEY } from '../constants/apiUrls';
import api from '../utilities/configureAxios';

export const fetchAlbumsRequest =
	({ value = 'nirvana' } = {}) =>
	dispatch => {
		dispatch({
			type: FETCH_ALBUMS_REQUEST
		});

		const url = `${FETCH_ALBUMS_URL}&api_key=${API_KEY}&album=${value}`;

		api.get(url).then(
			data => dispatch({ type: FETCH_ALBUMS_SUCCESS, data }),
			err => dispatch({ type: FETCH_ALBUMS_ERROR, err })
		);
	};
