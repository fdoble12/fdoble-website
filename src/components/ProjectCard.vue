<template>
    <div class="mx-auto my-4 bg-white border-2 border-black relative">
        <img
        :src="project.img"
        :alt="project.title"
        class="w-[360px] h-[480px] object-cover hover:opacity-70"
        />
    </div>    
</template>
<script>
    export default {
        props:{
        project: Object
    },
        name: 'ProjectCard',
    }
</script>

