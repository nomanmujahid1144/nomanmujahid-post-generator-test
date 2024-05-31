import { ACTION_TYPES } from "../ActionTypes/ActionTypes";

const initialState = {
    generatePost: {},
    message: ''
};

const generatePosts = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GENERATE_POSTS_FOR_SOCIAL_MEDIA: {
            return {
                ...state,
                generatePost: action.payload,
                message: action.message,
            };
        }
        default: {
            return state;
        }
    }
};
export default generatePosts;