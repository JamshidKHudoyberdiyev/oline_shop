<template>
    <div class="searchADD my-5 flex items-cente justify-between ">
        <Input class=" w-2/4" placeholder="enter your first name">
        <template #prefix>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
        </template>
        </Input>
        <n-button type="primary" class=" w-1/4 py-5 rounded-md" @click="showModal = true">
            <n-icon size="30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
                </svg>
            </n-icon> Maxsulot qo'shish
        </n-button>
    </div>


    <Table>
        <table-head>

            <table-head-cell>Category ID</table-head-cell>
            <table-head-cell>Name</table-head-cell>
            <table-head-cell>O'chirish</table-head-cell>
            <table-head-cell>Tahrirlash</table-head-cell>

        </table-head>
        <table-body>
            <table-row v-for="item in 5" :key="item.id">
                <table-cell> item.id </table-cell>
                <table-cell> item.name </table-cell>
                <table-cell><Button color="default">Tahrirlash</Button></table-cell>
                <table-cell> <Button color="red">O'chirish</Button></table-cell>
            </table-row>

        </table-body>
    </Table>





    <n-modal style="width: 700px;" v-model:show="showModal" preset="dialog" title="Dialog">
        <template #header>
            <div>Maxsulot qo'shish</div>
        </template>
        <div>
            <Input placeholder="enter Category ID" label="Id ">
            </Input>
            <Input placeholder="enter Category ID" label="Name">
            </Input>
            <Input placeholder="enter Category ID">
            </Input>
        </div>
        <template #action>
            <div>action</div>
        </template>
    </n-modal>
</template>

<script setup>



// Modal
const showModal = ref(false)

import { Table, Input, TableHead, TableBody, TableHeadCell, TableRow, TableCell, Modal } from 'flowbite-vue'
import { apiProducts } from '../../Server/apiProduct';
import { useProductStore } from '../../Store/Product/productStore.js'
import { onMounted, ref } from 'vue'













</script>



<style lang="scss" scoped>
.modal {
    width: 50%;
}

.searchADD button {
    background-color: rgb(12, 86, 23);
}

.last\:text-right:last-child {
    text-align: start;
}
</style> 