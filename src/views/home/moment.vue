<template>
    <ul>
        <li v-for="(item, index) in momentLists" :key="index">
            <i>
                <component :is="item.type" />
            </i>
            <div>
                <p>{{ item.title }}</p>
                <p>{{ item.date }}</p>
            </div>
        </li>
    </ul>
</template>

<script setup lang='ts' >
import EmotionIcon from '@/components/icons/Emotion.vue';
import StudyIcon from '@/components/icons/Study.vue'
import UpdateIcon from '@/components/icons/Update.vue'
import CodeIcon from '@/components/icons/Coding.vue'

const momentLists = [
    {
        type: UpdateIcon,
        title: '创建blog',
        date: '2019.03.23',
    },
    {
        type: EmotionIcon,
        title: '说说',
        date: '2024.01.30',
    },
    {
        type: StudyIcon,
        title: '学习记录',
        date: '2024.01.30',
    },
    {
        type: UpdateIcon,
        title: '网站更新',
        date: '2024.01.30',
    },
    {
        type: EmotionIcon,
        title: '说说',
        date: '2024.01.30',
    },
    {
        type: CodeIcon,
        title: '写下代码',
        date: '2024.01.30',
    },
]
momentLists.reverse()
</script>

<style scoped lang="less">
ul {
    position: relative;
    width: 100%;

    // height: 100%;
    // overflow-y: scroll;
    &::after {
        content: '';
        z-index: -9;
        min-height: 100%;
        position: absolute;
        left: 15px;
        top: 0;
        border-left: 2px solid var(--border-color)
    }

    li {
        display: flex;
        align-items: center;
        height: 70px;

        i {
            font-size: 30px;
            margin-right: 10px;
        }

        p {
            max-width: 70px;
            font-size: 14px;
        }
        p:last-of-type {
            font-size: 13px;
        }
    }
}</style>