<template>
    <ul class="contact-container">
        <li>
            <a href="">
                <div class="icon">
                    <Icon type="github" />
                </div>
                <span>ALoft661</span>
            </a>
        </li>
        <li>
            <a href="malito:3036404130@qq.com">
                <div class="icon">
                    <Icon type="mail" />
                </div>
                <span>3036404130@qq.com</span>
            </a>
        </li>
        <li>
            <a href="tencent://message/?Menu=yes&uin=3036404130&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
                <div class="icon">
                    <Icon type="qq" />
                </div>
                <span>3036404130</span>
            </a>
            <div class="pop">
                <img src="../../../assets/qq.jpg" alt="">
            </div>
        </li>
        <li>
            <a href="">
                <div class="icon weixin">
                    <Icon type="weixin" />
                </div>
                <span>h3036404130</span>
            </a>
            <div class="pop">
                <img src="../../../assets/vx.jpg" alt="">
            </div>
        </li>
    </ul>
</template>

<script>
import Icon from "@/components/Icon";
import "@/styles/global.less";
export default {
    components: {
        Icon
    }
}
</script>

<style scoped lang="less">
    @import "~@/styles/var.less";
    .contact-container {
        list-style: none;
        padding: 20px;
        margin: 0;
        color: @gray;
        @itemHeight: 30px;
        li {
            height: @itemHeight;
            line-height: 30px;
            margin: 14px 0;
            position: relative;
            &:hover {
                .pop {
                    transform: scaleY(1);
                }
            }
            a {
                display: flex;
                align-items: center;
                cursor: pointer;
                font-size: 14px;
                .icon {
                    font-size: 26px;
                    width: 36px;
                    &.weixin {
                        font-size: 32px;
                        text-indent: -3px;
                    }
                }
            }
            .pop {
                position: absolute;
                left: 0;
                bottom: @itemHeight + 5px;
                background: #fff;
                padding: 10px 15px;
                border-radius: 5px;
                transform: scaleY(0);
                transform-origin: center bottom;
                transition: .3s;
                img {
                    width: 150px;
                    height: 150px;
                    object-fit: cover;
                }
                &::after {
                    content: '';
                    position: absolute;
                    left: 50%;
                    bottom: -4px;
                    transform: translate(-50%) rotate(45deg);
                    height: 8px;
                    width: 8px;
                    background: #fff;
                }
            }
        }
    }
</style>