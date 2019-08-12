import hackerNewsApi from 'services/hnapi'


const NAMESPACE = "@hn/story";

export const actionTypes = {
	FETCH_STORY_IDS_REQUEST : `${NAMESPACE}/FETCH_STORY_IDS_REQUEST`,
	FETCH_STORY_IDS_SUCCESS: `${NAMESPACE}/FETCH_STORY_IDS_SUCCESS`,
	FETCH_STORY_IDS_FAILURE: `${NAMESPACE}/FETCH_STORY_IDS_FAILURE`, 

	FETCH_STORIES_REQUEST: `${NAMESPACE}/FETCH_STORIES_REQUEST`, 
	FETCH_STORIES_SUCCESS: `${NAMESPACE}/FETCH_STORIES_SUCCESS`, 
	FETCH_STORIES_FAILURE: `${NAMESPACE}/FETCH_STORIES_FAILURE`
}

const action = (type, payload) => ({type, payload});

const actions = {
	fetchStoryIds: (payload = {}) => {
		return dispatch => {
			dispatch(action(actionTypes.FETCH_STORY_IDS_REQUEST), payload)

			return hackerNewsApi
					.getTopStoryIds()
					.then(storyIds =>{
						console.log("the value is ", storyIds)
						dispatch({type: actionTypes.FETCH_STORY_IDS_SUCCESS, payload: {storyIds}})
						dispatch(actions.fetchStories({storyIds, page: 0}))
					})
					.catch(err => dispatch(action(actionTypes.FETCH_STORY_IDS_FAILURE, err)))
		}
	}, 

	fetchStories: (payload = {}) => {
		return dispatch => {
			const { storyIds, page } = payload;

			dispatch(action(actionTypes.FETCH_STORIES_REQUEST), payload)

			return hackerNewsApi
					.getStoriesByPage(storyIds, page)
					.then(stories => dispatch(action(actionTypes.FETCH_STORIES_SUCCESS, { stories })))
					.catch(err => dispatch(action(actionTypes.FETCH_STORIES_FAILURE, err)))
		}
	}
}


export default actions;

















