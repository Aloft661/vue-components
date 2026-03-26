import Mock from "mockjs";
import avatarImg from "@/assets/avatar.jpg";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    siteTitle: "阿轩的个人空间",
    github: "https://github.com/Aloft661",
    qq: "3036404130",
    weixin: "3036404130h",
    mail: "3036404130z@gmai.com",
    icp: "鄂ICP备12345678号",
    githubName: "Aloft661",
    favicon: avatarImg,
  },
});

