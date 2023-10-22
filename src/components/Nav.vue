<template>
    <nav class="bg-[#303030] p-4 fixed w-full">
        <div class="container mx-auto flex justify-between items-center">
            <div class="text-white text-2xl font-semibold">Francis Doble</div>
            <div class="space-x-4">
                <a href="#about" class="text-white hover:text-blue-200">About</a>
                <a href="#projects" class="text-white hover:text-blue-200">Projects</a>
                <a href="#contact" class="text-white hover:text-blue-200">Contact</a>
                <button class="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-600">Download CV</button>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
    name: 'Navbar',
    };
</script>
