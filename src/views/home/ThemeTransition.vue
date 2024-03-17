<template>
    <div class="switch_box">
        <input class="el-switch__input" type="checkbox" role="switch" aria-checked="true" aria-disabled="false" name=""
            true-value="true" false-value="false" id="el-id-8057-6">
    </div>

    <button @click='updateView'>切换主题</button>
</template>

<script setup lang="ts">
declare global {
    interface Document {
        startViewTransition: (fc: Function) => {
            ready: Promise<void>
        };
    }
}
let isDark = false
function changeTheme() {
    // 切换页面主题
    isDark = !isDark;
    document.documentElement.classList.toggle("dark");
}
function updateView(event: MouseEvent) {
    //在不支持的浏览器里不做动画
    if (!document.startViewTransition) {
        changeTheme();
        return;
    }
    // 开始一次视图过渡：
    const transition = document.startViewTransition(() => changeTheme());
    transition.ready.then(() => {
        const x = event.clientX;
        const y = event.clientY;
        //计算按钮到最远点的距离用作裁剪圆形的半径
        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
        );
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
        ];
        //开始动画
        document.documentElement.animate(
            {
                clipPath: isDark ? [...clipPath].reverse() : clipPath,
                // clipPath:[...clipPath].reverse() ,
            },
            {
                duration: 400,
                easing: "ease-in",
                pseudoElement: isDark
                    ? "::view-transition-old(root)"
                    : "::view-transition-new(root)",
            }
        );
    });
}
</script>

<style scoped>
.switch_box {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
}



/* Alternative custom animation style */
</style>