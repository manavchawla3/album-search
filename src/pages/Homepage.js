import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbumsRequest } from '../actions/homepageActions';
import SearchBar from '../components/SearchBar';
import AlbumList from '../components/AlbumList';

function Homepage() {
	const dispatch = useDispatch();

	const handleChange = event => {
		dispatch(fetchAlbumsRequest({ value: event.target.value }));
	};

	return (
		<div className="Layout">
			<SearchBar handleChange={handleChange}></SearchBar>
			<AlbumList></AlbumList>
		</div>
	);
}

export default Homepage;
