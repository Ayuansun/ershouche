<template>
    <div>
        <div class="search">
            <Row>
                <Col span="12">
                    <Input v-model="keyword" placeholder="请输入姓名或手机号查询" />
                    <b>共 {{$store.state.usersState.count}} 条信息</b>
                </Col>
            </Row>
        </div>

        <Table :columns="col" :data="$store.state.usersState.results" @on-sort-change="changeSort">
        </Table>

        <div class="page">
            <Page show-sizer show-elevator
                :total="$store.state.usersState.count"
                :current="$store.state.usersState.page"
                @on-change="changePage"
                @on-page-size-change="changePageSize"
            />
        </div>
    </div>
</template>
<script>
    export default {
        created(){
            this.$store.dispatch("user_init");
        },
        data(){
            return {
                col:[
                    {title:"编号", key:'id', sortable:'custom'},
                    {title:"用户名", key:'name',},
                    {title:"年龄", key:'age', sortable:'custom'},
                    {title:"电话", key:'tel'}
                ]
            }
        },
        computed:{
            keyword:{
                get(){
                    return this.$store.state.usersState.keyword
                },
                set(v){
                    var keyword = v.replace(/\s/g,",")
                    this.$store.dispatch("changeUserKeyword",{keyword})
                }
            }
        },
        methods:{
            //分页
            changePage(page){
                this.$store.dispatch("changeUserPage", {page})
            },
            //页数量
            changePageSize(pagesize){
                this.$store.dispatch("changeUserPageSize", {pagesize})
            },
            //排序
            changeSort({key,order}){
                this.$store.dispatch("changeUserSort", {
                    sortby:key,
                    sortdirection:order == "asc" ? 1 : -1
                })
            }
        }
    }
</script>
<style>
    .page{margin:20px;}
    .search{
        margin-bottom:10px;
    }
    .search b{font-size:18px;line-height: 40px;}
</style>