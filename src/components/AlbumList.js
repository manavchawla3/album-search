import { useSelector } from 'react-redux';

function renderList(data) {
	const list = data.map((item, index) => <li key={index}>{item.name}</li>);

	return <ul>{list}</ul>;
}

export default function AlbumList() {
	const albums = useSelector(state => state.data.albums);
	const isLoading = useSelector(state => state.data.isLoading);
	const renderedAlbumList = renderList(albums);

	return (
		<>
			{isLoading && 'Loading'}
			{!isLoading && albums.length > 0 && renderedAlbumList}
		</>
	);
}
