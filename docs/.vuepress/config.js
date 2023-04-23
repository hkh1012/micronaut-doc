import { defineUserConfig,defaultTheme } from 'vuepress'


export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: '你好， Micronaut ！',
    description: '这是一个介绍 Micronaut 站点',
    pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '快速开始',
                link: '/quick-start',
                children: [
                    {
                        text: 'CLI工具',
                        link: '/quick-start/cli'
                    },
                    {
                        text: '官方LAUNCH',
                        link: '/quick-start/launch'
                    },
                    {
                        text: '从IDEA创建',
                        link: '/quick-start/idea'
                    }
                ]
            },
            {
                text: '项目实战',
                link: '/project',
                children: [
                    {
                        text: '数据库',
                        link: '/project/db'
                    },
                    {
                        text: 'Redis',
                        link: '/project/redis'
                    },
                    {
                        text: '消息队列',
                        link: '/project/mq'
                    },
                    {
                        text: 'swagger文档',
                        link: '/project/swagger'
                    }
                ]
            },
        ],
    }),
})

