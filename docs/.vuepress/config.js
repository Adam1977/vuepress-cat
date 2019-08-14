module.exports = {
    title: '个人博客',  // 设置网站标题
    description : 'myBlog',
    // base : '/',
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
                "/", //指的是根目录的md文件 也就是 README.md 里面的内容
            ]
        },
        sidebarDepth : 2
    },
    plugins: [
        "vuepress-plugin-cat",
    ]
}
