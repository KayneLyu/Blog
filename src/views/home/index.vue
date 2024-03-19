<template>
    <div class="kan_fixed"></div>
    <div class="home_container">
        <main>
            <aside>
                <div class="avatar">
                </div>
                <div class="kan_position">
                    <ShadowContainer>
                        <p><i>
                                <PositionIcon />
                            </i> China-Guangdong</p>
                        <p><i>
                                <UniversityIcon />
                            </i> Hubei University</p>
                    </ShadowContainer>
                </div>
                <div class="kan_labels">
                    <ShadowContainer>
                        <ul>
                            <li v-for="(item, index) in tagLists" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                    </ShadowContainer>
                </div>
                <div class="kan_news">
                    <ShadowContainer>
                        <div class="moment_container">
                            <MomentComponent />
                        </div>
                    </ShadowContainer>
                </div>
            </aside>
            <header>Hi, I'm <span>Kayne</span></header>
            <div class="kan_description">
                <p>
                    <i>
                        <JobIcon />
                    </i>
                    A <span>Frontend</span> Developer
                </p>
                <p>
                    <i>
                        <WordsIcon />
                    </i>
                    The <span>magic</span> you are looking for is in the work you're <span>avoiding</span>
                </p>
            </div>
            <div class="kan_useful">
                <dialog>
                    sss
                </dialog>
                <ul>
                    <li v-for="(item, index) in usefulLists" @click="item.methods" :key="index">
                        <i>
                            <component :is="item.icon" />
                        </i>
                    </li>
                    <li>
                        <div class="switch_container">
                            <ThemeTransition />
                        </div>
                    </li>
                </ul>
            </div>
            <div class="snake_container">
                <img src="@/assets/snake.svg" alt="">
            </div>
            <div></div>
            <div></div>
            <section></section>
        </main>
        <!-- <header>
            <ThemeTransition />
        </header> -->
    </div>
</template>

<script setup lang='ts' >
import { ref } from 'vue';
import ThemeTransition from '@/components/ThemeTransition.vue';
import ShadowContainer from '@/components/ShadowContainer.vue';
import MomentComponent from './moment.vue';

import GithubIcon from '@/components/icons/github.vue'
import JobIcon from '@/components/icons/Job.vue'
import WordsIcon from '@/components/icons/Words.vue'
import EmailIcon from '@/components/icons/Email.vue'
import WeChatIcon from '@/components/icons/Wechat.vue'
import PositionIcon from '@/components/icons/Position.vue'
import UniversityIcon from '@/components/icons/University.vue'

import avatar from '@/assets/images/avatar.jpg';

const toGithub = () => {
    console.log(1);
}
const showDialog = () => {

}
const usefulLists = [
    {
        icon: GithubIcon,
        methods: toGithub
    },
    {
        icon: EmailIcon,
        methods: toGithub
    },
    {
        icon: WeChatIcon,
        methods: showDialog
    },
]

const tagLists = [
    'MusicLover',
    'CodeWriter',
    'BasketballEnthusiast',
    'Gamer',
    'InternetAddict',
    'CarEnthusiast',
    'LifelongLearner'
]

</script>

<style scoped lang="less">
.home_container {
    overflow: auto;
    width: 100%;
    height: 100vh;
}

.kan_fixed {
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 100%;
    z-index: -666;
    // background-image: url('@/assets/images/home_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transform: scale(1.1);
    filter: blur(var(--back-blur));
}

main {
    display: grid;
    margin: 0 auto;
    margin-top: 50px;
    max-width: 1150px;
    grid-template-columns: 23% 77%;
    grid-template-rows: 100px 80px 60px 165px 150px 150px 150px;
    min-height: 1000px;
}

aside {
    /* 简写 */
    grid-row: 1 / 7;
    /* background-color: pink; */
    margin-right: 50px;
    min-width: 200px;
}

section {
    // background-color: purple;
}

@keyframes huerotate {
    to {
        filter: hue-rotate(360deg);
    }
}

header {
    font-size: 55px;
    font-weight: 800;

    span {
        color: transparent;
        background: linear-gradient(120deg, #bd34fe, pink 30%, #41d1ff 60%);
        background-clip: text;
        animation: huerotate 5s ease-in-out infinite;
    }
}

.avatar {
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: url('@/assets/images/avatar.jpg');
    background-size: cover;
    background-position: center;
}

.kan_position {
    margin: 15px 0;

    p {
        font-size: 14px;

        i {
            margin-right: 5px;
            vertical-align: middle;
            font-size: 20px;
        }
    }
}

.kan_labels {
    ul {
        display: flex;
        flex-wrap: wrap;

        li {
            padding: 3px 5px;
            margin: 5px 0;
            margin-right: 8px;
            font-size: 13px;
            background-color: var(--tag-back);
            border-radius: 5px;

            &:hover {
                color: #d06cff;
                cursor: pointer;
            }
        }
    }
}

.kan_news {
    margin: 15px 0;
    height: 300px;
    .moment_container {
        height: 100%;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 0;
        }
    }
}

.kan_description {
    font-size: 20px;

    span {
        display: inline-block;
        padding: 0 4px;
        border-radius: 6px;
        color: #d06cff;
        background-color: #bfbfbf80;
    }

    p {
        i {
            font-size: 24px;
            color: red;
            vertical-align: middle;
            margin-right: 10px;
        }
    }

    & p:last-child {
        margin-top: 10px;
    }
}

.kan_useful {
    margin-top: 20px;

    ul {
        display: flex;

        li {
            margin-right: 10px;
            padding: 10px;
            background-color: var(--container-back);
            box-sizing: border-box;
            height: 50px;
            min-width: 50px;
            text-align: center;
            cursor: pointer;
            border-radius: 6px;

            i {
                font-size: 30px;
            }

            .switch_container {
                display: flex;
                height: 100%;
                align-items: center;
            }
        }
    }
}


.snake_container {
    margin-top: 20px;
    text-align: left;

    img {
        height: 100%;
        object-fit: contain;
    }
}
</style>