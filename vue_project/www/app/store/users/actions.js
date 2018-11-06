async function load(commit,{usersState:{page,pagesize,sortby,sortdirection,keyword}}){
    // var page = state.usersState.page;
    // var pagesize = state.usersState.pagesize;
    // var sortby = state.usersState.sortby;
    // var sortdirection = state.usersState.sortdirection;
    // var keyword = state.usersState.keyword;

    //请求
    var {count,results} = await fetch(`/api/users?page=${page}&pagesize=${pagesize}&sortby=${sortby}&sortdirection=${sortdirection}&keyword=${keyword}`).then(data=>data.json());

    //存储
    commit("changeUserResults", {results});
    commit("changeUserCount", {count});
}

export default {
    async user_init({commit,state}){
        await load(commit,state)
    },
    // 分页
    async changeUserPage({commit,state},{page}){
        commit("changeUserPage", {page})
        await load(commit,state);
    },
    //每页数量
    async changeUserPageSize({commit,state},{pagesize}){
        commit("changeUserPage", {page:1})
        commit("changeUserPageSize", {pagesize})
        await load(commit,state);
    },
    //排序
    async changeUserSort({commit,state},{sortby,sortdirection}){
        // commit("changeUserPage", {page:1})
        commit("changeUserSort", {sortby, sortdirection})
        await load(commit,state);
    },
    //关键词查询
    async changeUserKeyword({commit,state},{keyword}){
        commit("changeUserPage", {page:1})
        commit("changeUserKeyword", {keyword})
        await load(commit,state);
    }
}