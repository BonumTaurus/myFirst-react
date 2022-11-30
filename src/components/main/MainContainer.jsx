import Main from './Main';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

const MainConteiner = connect(mapStateToProps)(Main);

export default MainConteiner;