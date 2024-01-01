<template>
    <div class="tags">
        <span @click="toggleTag(key)" v-for="(item, key) in data" class="tag">
            {{ key }} <strong>{{data[key].length}}</strong>
        </span>
    </div>
    <div class="header">{{ selectTag }}</div>
    <a :href="withBase(article.regularPath)" v-for="(article, index) in data[selectTag]" :key="index" class="article">
        <div class="title">
            <div class="title-o"></div>
            {{ article.frontMatter.title }}
        </div>
        <div class="date blog-list-time">{{ formatDateWithMonthAndYearOnly(article.frontMatter.date) }}</div>
    </a>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData,withBase } from 'vitepress'
import { initTags, formatDateWithMonthAndYearOnly } from '../functions'

const { theme } = useData()
const data = computed(() => initTags(theme.value.posts))
let selectTag = ref('')
const toggleTag = (tag: string) => {
    selectTag.value = tag
}
</script>

<style scoped>
.tags {
    margin-top: 14px;
    display: flex;
    flex-wrap: wrap;

}
.tag {
    display: inline-block;
    padding: 4px 16px;
    margin: 6px 8px;
    font-size: 0.875rem;
    line-height: 25px;
    transition: 0.4s;
    border-radius: 3px;
     border: 2px solid var(--title-color);
    background-color: var(--title-color);
    cursor: pointer;
    color: #F7FFF5;
}
.tag strong {color:#F7FFF5}
.header {
    font-size: 2rem;
    font-weight: 600;
    margin: 1rem 0;
    text-align: center;
    color:var(--c-text-light);
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

@media screen and (max-width: 700px) {
    .header {
        font-size: 1.5rem;
    }
    .date {
        font-size: 0.75rem;
    }
}
</style>
