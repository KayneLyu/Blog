<template>
    <div class="filter_container">
        <slot />
    </div>
</template>

<script setup lang='ts' >

</script>

<style scoped>
.filter_container {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 20px;
    background-color: var(--container-back);
}
</style> 