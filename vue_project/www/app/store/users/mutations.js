export default {
    //数据总数
    changeUserCount(state,payload){
        state.usersState.count = payload.count;
    },
    //数据
    changeUserResults(state,payload){
        state.usersState.results = payload.results;
        console.log(state.usersState)
    },
    //分页
    changeUserPage(state,payload){
        state.usersState.page = payload.page;
    },
    //每页数量
    changeUserPageSize(state,payload){
        state.usersState.pagesize = payload.pagesize;
    },
    //排序
    changeUserSort(state,payload){
        state.usersState.sortby = payload.sortby;
        state.usersState.sortdirection = payload.sortdirection;
    },
    changeUserKeyword(state,payload){
        state.usersState.keyword = payload.keyword;
    }
}