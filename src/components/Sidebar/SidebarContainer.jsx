import React from "react";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {follow, unfollow} from "../../redux/sidebar-reducer";



class SidebarContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <Sidebar {...this.props} />
    }
}


let mapStateToProps = (state) => {
    return {
        isFollowing: state.sidebar.isFollowing,
        followers: state.sidebar.followers,
        amountOfTweets: state.sidebar.amountOfTweets
    }
}

export default connect(mapStateToProps, {follow, unfollow})(SidebarContainer);
