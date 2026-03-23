import requset from "./request";

/**
 * 获取博客列表数据 
 */
export async function getBlogs (page = 1, limit = 10, categoryid = -1) {
    return await requset.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid
        }
    });
}

/**
 * 获取博客分类
 */
export async function getBlogCategories () {
    return await requset.get("/api/blogtype");
}

export async function getBlog(id) {
    return await requset.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 */
export async function postComment(commentInfo) {
    return await requset.post("/api/comment", commentInfo);
}

export async function getComments(blogId, page = 1, limit = 10) {
    return await requset.get("/api/comment", {
        params: {
            blogId,
            page,
            limit
        }
    });
}