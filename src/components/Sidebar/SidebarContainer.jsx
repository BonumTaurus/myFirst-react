import { connect } from 'react-redux';
import Sidebar from './Sidebar';

const mapStateToProps = (state) => {
	return {
		sidebarPage: state.sidebarPage,
	}
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;