<template>
    <dialog ref="dialog" @click="clickModal">
        <img src="@/assets/images/wxqrcode.jpg" alt="">
    </dialog>
</template>

<script setup lang='ts' >
import { ref } from 'vue';
const dialog = ref<HTMLDialogElement>()

const showDialog = () => {
    dialog.value?.showModal()
}

const clickModal = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.nodeName !== 'DIALOG') {
        return
    }
    (e.target as HTMLDialogElement).close()
}
defineExpose({
    showDialog,
})

</script>

<style scoped lang="less">
dialog {
    opacity: 1;
    transition: all 0.6s ease;
    top: 30%;
    margin: 0 auto;
    transform: scale(1);
    border: none;
    outline: none;
    background-color: transparent;
    transform-origin: center;
    &::backdrop {
        background-color: #000000b6;
    }
}

dialog:not([open]) {
    opacity: 0;
    transform: scale(0.1);
    visibility: hidden;
    display: block;
}

img {
    height: 350px;
    object-fit: contain;
    border-radius: 10px;
    filter: brightness(110%);
}
</style>