module.exports = {
    title: 'Adam Blog',  // 设置网站标题
    description : '北巷的个人笔记站点',
    themeConfig : {
        nav : [
            { text: '我的创作', link: '/vue' },
            { text: '我的笔记', link: '/note' },
            { text: '其它', link: '/other' }
        ],
        sidebar: {
            '/' : [
                "vue",  // 根目录创建 vue.md文件
                "note", // 根目录创建 note.md文件
                "other", // 根目录创建 other.md文件,
            ]
        },
        sidebarDepth : 2
    },
    plugins: [
        "vuepress-plugin-cat",
    ]
}
