<template>
    <div class="layout">
        <Layout >
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="/" @on-select="changeMenu">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="/">
                            <Icon type="ios-navigate"></Icon>
                            首页
                        </MenuItem>
                        <MenuItem name="carlist">
                            <Icon type="ios-keypad"></Icon>
                            汽车列表
                        </MenuItem>
                        <MenuItem name="users">
                            <Icon type="ios-analytics"></Icon>
                            用户中心
                        </MenuItem>
                        <MenuItem name="car3D">
                            <Icon type="ios-paper"></Icon>
                            3D观看
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout >
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem></BreadcrumbItem>
                        <BreadcrumbItem></BreadcrumbItem>
                        <BreadcrumbItem></BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <PicShow v-if="$store.state.picshowState.isShowPic"></PicShow>
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
            <Footer class="layout-footer-center">2017-2018 &copy; ***二手车交易平台</Footer>
        </Layout>
    </div>
</template>
<script>
    import PicShow from "./components/picshow/index.vue";
    export default {
        components:{
            PicShow
        },
        methods:{
            changeMenu(name){
                this.$router.push(`/${name}`)
            }
        }
    }
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 520px;
    margin: 0 auto;
    margin-right: 20px;
}
.ivu-menu-item-active{background: gold;}
.layout-footer-center{text-align:center;}
</style>