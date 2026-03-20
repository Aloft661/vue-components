<template>
    <nav class="menu-container">
        <a v-for="item in items" :key="item.link" :href="item.link" :class="{ selected: isSelected(item) }">
            <div class="icon">
                <Icon :type="item.icon"/>
            </div>
            <span>{{ item.title }}</span>
        </a>
    </nav>
</template>

<script>
    import Icon from '@/components/Icon';
    export default {
        components: {
            Icon
        },
        data () {
            return {
                items: [
                    {
                        link: '/',
                        title: '首页',
                        icon: 'home'
                    },
                    {
                        link: '/blog',
                        title: '文章',
                        icon: 'blog',
                        startWith: true // 只要当前路径义link开头，当前菜单就是选中的
                    },
                    {
                        link: '/about',
                        title: '关于我',
                        icon: 'about'
                    },
                    {
                        link: '/project',
                        title: '项目&效果',
                        icon: 'code'
                    },
                    {
                        link: '/message',
                        title: '留言板',
                        icon: 'chat'
                    }
                ]
            }
        },
        methods: {
            isSelected (item) {
                const link = item.link.toLowerCase();
                const curPathName = location.pathname.toLowerCase();
                if (item.startWith) {
                    return curPathName.startsWith(link);
                }
                return link === curPathName;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";
    .menu-container {
        color: @gray;
        margin: 24px 0;
        a {
            padding: 0 50px;
            display: flex;
            align-items: center;
            height: 45px;
            .icon {
                width: 24px;
            }
            &:hover {
                color: #fff;
            }
            &.selected {
                background: #2d2d2d;
            }
        }
    }
</style>