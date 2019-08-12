import { connect } from 'react-redux';
import actions from 'store/story/action'
import App from './App'

const mapStateToProps = state => ({
	isFetching: state.story.isFetching
})

const mapDispatchToProps = dispatch => ({
	fetchStoriesForThePage: () => dispatch(actions.fetchStoryIds())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);