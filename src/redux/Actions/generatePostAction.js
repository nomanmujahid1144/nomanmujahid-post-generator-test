import  { axiosInstance }  from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { selectProgressBarState } from './ProgressBarActions';


export const generatePosts = ({blogContent}) => {
    return async (dispatch) => {

        try {
            dispatch(selectProgressBarState(true));
            const res = await axiosInstance.post('/api/v1/blog/create-blog-post', { blogContent });
            if (res.data.success === true) {
                dispatch(selectProgressBarState(false))
                dispatch({
                    type: ACTION_TYPES.GENERATE_POSTS_FOR_SOCIAL_MEDIA,
                    payload: res.data.data,
                    message: res.data.message
                })
            }
            else {
                dispatch(selectProgressBarState(false));
                dispatch({
                    type: ACTION_TYPES.GENERATE_POSTS_FOR_SOCIAL_MEDIA,
                    payload: {},
                    message: res.data.message
                })
            }
        } catch (err) {
            console.log(err, 'err')
            dispatch(selectProgressBarState(false));
            dispatch({
                type: ACTION_TYPES.GENERATE_POSTS_FOR_SOCIAL_MEDIA,
                payload: {},
                message: err.response.data.message
            })
        }

    }
}