<template>
<div class="columns">
 <div class="column is-3"><NavSection></NavSection></div>

 <div class="column is-9 main-section"><MainSection></MainSection></div>
</div>
</template>

<script>
import NavSection from '@/components/layout/NavSection.vue'
import MainSection from '@/components/MainSection.vue'

export default {
    components: {
        NavSection,
        MainSection
    }
}


</script>

<style>



</style>