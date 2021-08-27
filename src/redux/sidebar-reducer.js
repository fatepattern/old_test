const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"


let initialState = {
    amountOfTweets: 777,
    followers: 100500,
    isFollowing: false
}

const sidebarReducer = (state = initialState, action) => {


    switch (action.type){

        case FOLLOW:
            return {
                ...state,
                ...action.data,
                isFollowing: true,
                followers: state.followers + 1
            }

        case UNFOLLOW:
            return {
                ...state,
                isFollowing: false,
                followers: state.followers - 1
            }

        default:
            return state;
    }

}

export const follow = () => ({type: FOLLOW})
export const unfollow = () => ({type: UNFOLLOW})

export default sidebarReducer;