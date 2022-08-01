import ResponsiveDrawer from "./components/common/sidebar/Sidebar";
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <ResponsiveDrawer ></ResponsiveDrawer>
    </Provider>)
}

export default App;
