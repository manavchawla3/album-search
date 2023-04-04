// import './App.css
import { Provider } from 'react-redux';
import configureStore from './utilities/configureStore';

import Homepage from './pages/Homepage';

const store = configureStore({});

const App = () => {
	return (
		<Provider store={store}>
			<div className="App">
				<Homepage></Homepage>
			</div>
		</Provider>
	);
};

export default App;
