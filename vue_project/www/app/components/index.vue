<template>
    <div>
        <div>
            <ul>
                <li>
                    <router-link to="/carlist">汽车列表</router-link>
                    <small>使用了iview的表格分页，实现和后端交互的分页、筛选、排序</small>
                </li>
                <li>
                    <router-link to="/users">用户中心</router-link>
                    <small>实现了用户模糊查询</small>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
    p{
        font-size:18px;margin:20px 0;
    }
    ul li{
        font-size:22px;
        line-height: 40px;
    }
    small{
        font-size:16px;
    }
</style>