export default [
    {
        name: "Home",
        path: "/",
        component: () => import("@/views/Home")
    },
    {
        name: "About",
        path: "/about",
        component: () => import("@/views/About")
    },
    {
        name: "Blog",
        path: "/article",
        component: () => import("@/views/Blog")
    },
    {
        name: "CategoryBlog",
        path: "/article/cate/:categoryId",
        component: () => import("@/views/Blog")
    },
    {
        name: "BlogDetail",
        path: "/article/:id",
        component: () => import("@/views/Blog/Detaile")
    },
    {
        name: "Project",
        path: "/project",
        component: () => import("@/views/Project")
    },
    {
        name: "Message",
        path: "/message",
        component: () => import("@/views/Message")
    },
];