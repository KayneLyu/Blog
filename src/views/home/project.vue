<template>
    <div class="icon">
        <p>
            <i>
                <component :is="props.icon" />
            </i>
            {{ props.typeName }}
        </p>
    </div>
    <div class="content">
        <ul>
            <li v-for="(item, index) in contentLists" :key="index" :class="item.type == 'project' && 'project'" >
                <a @click="openLink(item.outLink,item.url)" href="javascript:void(0);" class="content_container" >
                    <p>{{ item.title }}</p>
                    <p>{{ item.description }}</p>
                    <div class="lang_types">
                        <p v-for="(type, key) in item.lang" :key="key">{{ type }}</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang='ts' >
import type { Component } from 'vue';
import { useRouter} from 'vue-router'

type IContent = {
    icon: Component,
    typeName: string,
    contentLists: Array<{
        title: string,
        description: string,
        url: string
        outLink: boolean,
        type: string,
        lang?: string[],
    }>
}

const router = useRouter()

const props = defineProps<IContent>()

const openLink = (isOutLink:boolean, url:string) => {
    if(isOutLink) {
        window.open(url)
    } else {
        // router.push('/blog')
    }
}

</script>

<style scoped lang="less">
.icon {
    p {
        font-style: italic;
        font-weight: 700;
        font-size: 26px;

        i {
            vertical-align: middle;
            font-size: 26px;
            margin-right: 5px;
        }
    }
}

.content {
    ul {
        display: flex;
        width: 100%;
        margin-top: 20px;
        padding-left: 10px;
        li {
            width: 25%;
            padding: 5px;
            .content_container {
                display: block;
                padding: 10px 15px;
                border-radius: 8px;
                background-color: var(--container-back);
            }

            p {
                font-size: 14px;
            }

            .content_container>p:first-child {
                font-size: 18px;
                color: #2f81f7;
                margin-bottom: 10px;
            }

            .lang_types {
                display: flex;
                margin-top: 20px;
                p {
                    font-size: 12px;
                    margin-right: 10px;

                    &::before {
                        display: inline-block;
                        content: '';
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background-color: #39d353;
                        margin-right: 2px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 1100px) {
    ul {
        flex-wrap: wrap;
        li {
            width: 45%!important;
        }
    }
}
@media screen and (max-width: 500px) {
    ul {
        flex-wrap: wrap;
        .project {
            width: 90%!important;
        }
    }
}
</style>