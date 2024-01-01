<template>
    <div style="padding-top: 10px">
        <div v-bind:key="yearList.index" v-for="yearList in data">
            <div class="year">
                {{ yearList[0].frontMatter.date.split('-')[0] }}
            </div>
            <a :href="withBase(article.regularPath)" v-for="(article, index) in yearList" :key="index" class="article">
                <div class="title">
                    <div class="title-o"></div>
                    {{ article.frontMatter.title }}
                </div>
                <div class="date blog-list-time">{{ formatDateWithMonthAndYearOnly(article.frontMatter.date) }}</div>
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useData,withBase } from 'vitepress'
import { computed } from 'vue'
import { useYearSort, formatDateWithMonthAndYearOnly } from '../functions'

const { theme } = useData()
const data = computed(() => useYearSort(theme.value.posts))

</script>

<style scoped>
.year {
    padding: 16px 0 8px 0;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--c-text-light);
}

.blog-list-time{
    width: 100px;
    padding: 10px;
    border: 2px solid var(--title-color);
    background-color: var(--title-color);
    border-radius: 15px;
    -moz-border-radius: 15px;
    color: #F7FFF5;
}

.title {
    margin-right: 0.75em;
    color: var(--title-color);
}
</style>
