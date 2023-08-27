<template>
 <Navbar/>
 <Sidebar/>
 <Mainloyout><router-view></router-view></Mainloyout>
</template>

<script setup>
import Mainloyout from '../components/MainLoyout/Mainloyout.vue';
import Navbar from '../components/Navbar/Navbar.vue';
import Sidebar from '../components/Sidebar/Sidebar.vue';


</script>

<style lang="scss" scoped></style>