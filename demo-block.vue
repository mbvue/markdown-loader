<template>
    <div class="markdown-demo-block">
        <div class="markdown-demo-block-source"><slot name="source"></slot></div>
        <div class="markdown-demo-block-button" @click="showCode = !showCode">CODE</div>
        <div v-show="showCode" class="markdown-demo-block-code"><slot name="highlight"></slot></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showCode: false
        }
    }
}
</script>

