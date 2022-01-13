<template>
    <div class="site-footer">
        Copyright © 2021 <a class="vitepress" :href="website">{{ webTitle }}</a
        >
    </div>
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'

const { site, theme } = useData()
const website = theme.value.website
const webTitle = site.value.title
</script>

<style>
.site-footer {
    color: #000;
    height: 50px;
    text-align: center;
    font-size: 0.75rem;
    width: 100vw;
    margin-top: 60px;
}
.vitepress {
    color: #222;
    font-weight: 700;
}
</style>
