<script setup lang="ts">

</script>

<template>
    <header class="py-4 border-b">
        <nav class="flex container items-center">
            <NuxtLink to="/" class="flex gap-1 items-center">
                <NuxtImg src="/icon-green.png" alt="" class="w-14" />
                <span class="text-3xl font-bold">Nuxtcipes</span>
            </NuxtLink>
            <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
                <li><NuxtLink to="/" class="text-gray-500 hover:text-gray-900">Home</NuxtLink></li>
                <li><NuxtLink to="/about" class="text-gray-500 hover:text-gray-900">About</NuxtLink></li>
                <!-- <li><a href="" class="text-gray-500 hover:text-gray-900">Contact</a></li> -->

            </ul>
        </nav>
    </header>
</template>
