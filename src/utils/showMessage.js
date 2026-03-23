import getComponentRootDom from "./getComponentRootDom";
import Icon from '@/components/Icon';
import styles from './showMessage.module.less';

/**
 * 弹出消息
 * @param { Object } options - 配置选项对象
 * @param { String } [options.content=''] - 消息内容
 * @param { 'info'|'error'|'success'|'warn' } [options.type = 'info'] - 消息类型 info error success warn
 * @param { Number } [options.duration = 2000] - 多久后消失
 * @param { HTMLElement } [options.container = document.body] - 容器，消息会显示到该容器的正中间；如果不传，则显示到页面正中间
 * @param { Function } [options.callback] - 消息关闭后的回调函数
 */
export default function (options = {}) {
    const {
        content = '',
        type = 'info',
        duration = 2000,
        container = document.body
    } = options;
    // 创建消息元素
    const div = document.createElement('div');
    const iconDom = getComponentRootDom(Icon, {
        type
    });

    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
    div.className = `${styles.message} ${styles["message-" + type]}`;
    if (options.container) {
        if (getComputedStyle(container).position === 'static') {
            container.style.position = 'relative';
        }
    }
    container.appendChild(div);
    div.clientHeight;

    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-15px)`;
        div.addEventListener("transitionend", function () {
            div.remove();
            options.callback && options.callback();
        }, { once: true });
    }, duration);
}
