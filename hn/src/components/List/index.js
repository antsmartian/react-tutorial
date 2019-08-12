import { connect } from 'react-redux';
import actions from 'store/story/action'
import List from './List'

const mapStateToProps = state => ({
	stories: state.story.stories,
})

export default connect(
	mapStateToProps
)(List);