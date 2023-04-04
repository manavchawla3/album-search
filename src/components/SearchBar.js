import { TextField } from '@mui/material';

export default function SearchBar({ handleChange }) {
	return (
		<>
			<TextField onChange={handleChange} id="outlined-basic" label="Outlined" variant="outlined"></TextField>
		</>
	);
}
