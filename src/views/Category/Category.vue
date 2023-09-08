<template>
    <div v-if="categoryStore.isLoading" role="status" class=" animate-pulse max-w-3xl">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[660px] mb-2.5"></div>
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[630px] mb-2.5"></div>
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[600px] mb-2.5"></div>
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[660px] mb-3"></div>
        <span class="sr-only">Loading...</span>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[660px] mb-2.5"></div>
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[630px] mb-2.5"></div>
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[600px] mb-2.5"></div>
        <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[660px]"></div>
        <span class="sr-only">Loading...</span>
    </div>


    <div v-else>

        <div class="searchADD my-5 flex items-cente justify-between ">
            <Input @input="(e) => searchCategory(e.target.value)" class=" w-2/4" placeholder="enter your first name">
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
                </n-icon> Category qo'shish
            </n-button>
        </div>


        <Table v-if="notCategory" class=" my-5">
            <table-head class="text-center">
                <table-head-cell>id</table-head-cell>
                <table-head-cell>Name</table-head-cell>
                <table-head-cell class="text-center">Ko'rsatish</table-head-cell>
                <table-head-cell>Tahrirlash</table-head-cell>
                <table-head-cell>O'chirish</table-head-cell>


            </table-head>
            <table-body class="text-center">
                <table-row v-for="(item, index) in categoryStore.categoryList" :key="item.id">
                    <table-cell> {{ index + 1 }} </table-cell>
                    <table-cell> {{ item.name.uz }} </table-cell>
                    <table-cell class="text-center">
                        <i class="fa-regular" @click="updateVisible(item.id, item.isVisible)"
                            :class="{ 'fa-eye': item.isVisible, 'fa-eye-slash': !item.isVisible }"></i>
                    </table-cell>
                    <table-cell @click="updateCategory(item.id)"><Button color="default">Taxrirlash</Button> </table-cell>
                    <table-cell class="text-center"> <Button color="red" @click="deleteCategory(item.id)">O'chirish</Button>
                    </table-cell>

                </table-row>
            </table-body>




        </Table>
        <div v-else class="errorModule">
            <div class="errorIcon">
                <i class="fa fa-unlink"></i>
            </div>
            <div class="errorMsg">Oops! Bunday Category yuq</div>
        </div>

        <!-- addModal -->

        <n-modal style="width: 700px;" v-model:show="showModal" preset="dialog" title="Dialog">
            <template #header>
                <div>Category qo'shish</div>
            </template>
            <div>
                <div class="language my-3">
                    <h2>Name </h2>
                    <div class=" flex justify-between my-3  ">
                        <Input placeholder="Uz" v-model="category.name.uz" label="Uz">
                        </Input>
                        <Input placeholder="Ru" v-model="category.name.ru" label="Ru">
                        </Input>
                        <Input placeholder="En" v-model="category.name.eng" label="En">
                        </Input>
                    </div>
                </div>
                <Input class="my-3" placeholder="Img" v-model="category.image" label="Rasm Yuklang">
                </Input>
                <!-- <div class="flex items-center">
                <input checked id="checkbox" type="checkbox" v-model="category.isVisible"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Userga
                    ko'rstish {{ category.isVisible }}</label>
            </div> -->

            </div>
            <template #action>
                <div class="adddelete">
                    <n-button @click="addCategory" type="primary" class=" add  rounded-md">
                        Qo'shish
                    </n-button>
                    <n-button type="primary" @click="bekorq" class=" dell rounded-md">
                        Bekor qilish
                    </n-button>
                </div>
            </template>
        </n-modal>



        <!-- updateModal -->


        <n-modal style="width: 700px;" v-model:show="editShowModal" preset="dialog" title="Dialog">
            <div>
                <div class="language my-3">
                    <h2>Name </h2>
                    <div class=" flex justify-between my-3  ">
                        <Input placeholder="Uz" v-model="categoryUP.name.uz" label="Uz">
                        </Input>
                        <Input placeholder="Ru" v-model="categoryUP.name.ru" label="Ru">
                        </Input>
                        <Input placeholder="En" v-model="categoryUP.name.eng" label="En">
                        </Input>
                    </div>
                </div>
                <Input class="my-3" placeholder="Img" v-model="categoryUP.image" label="Rasm Yuklang">
                </Input>
                <!-- <div class="flex items-center">
                <input checked id="checkbox" type="checkbox" v-model="category.isVisible"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Userga
                    ko'rstish {{ category.isVisible }}</label>
            </div> -->

            </div>
            <template #action>
                <div class="adddelete">
                    <n-button @click="updateCategoryBack" type="primary" class=" add  rounded-md">
                        Saqlash
                    </n-button>
                    <n-button type="primary" @click="bekorq" class=" dell rounded-md">
                        Bekor qilish
                    </n-button>
                </div>
            </template>
        </n-modal>

    </div>
</template>

<script setup>



// Modal

import { Table, Input, TableHead, TableBody, TableHeadCell, TableRow, TableCell, Button } from 'flowbite-vue'
import { onMounted, ref } from 'vue'
import { apiCategory } from '../../Server/apiCategry';
import { useCategoryStore } from '../../Store/Category/categoryStore';
const categoryStore = useCategoryStore()

const showModal = ref(false)
const editShowModal = ref(false)
const notCategory = ref(true)


let category = ref({
    name: {
        uz: "",
        ru: "",
        eng: ''
    },
    image: null,
    isVisible: false
})





// getCategoryAll


function getCategoryAll() {

    try {
        apiCategory.getCategory().then(res => {
            categoryStore.setCategoryList(res.data.content)
            categoryStore.setLoading()
        })
    } catch (error) {
        console.log(error.message);
    }




}


// addCategory

function addCategory() {
    let newCategory = {
        ...category.value
    }


    console.log(newCategory);
    if (newCategory.name.eng.length != 0
        && newCategory.name.uz.length != 0
        && newCategory.name.ru.length != 0
        && newCategory.image.length != 0
    ) {
        apiCategory.addCategory(newCategory).then(() => {
            getCategoryAll()
        })
    }
    else {
        alert("Malumot to'liq kiritilmadi")
    }

    showModal.value = false

    category.value = {
        name: {
            uz: "",
            ru: "",
            eng: ''
        },
        image: null,
        isVisible: false

    }
}


onMounted(() => getCategoryAll())

// deleteCategory

function deleteCategory(id) {
    console.log(id);
    apiCategory.deleteCategory(id).then(() => getCategoryAll())
}

// updateVisibleCategory

function updateVisible(id, isVisible) {



    apiCategory.updateVisibleCategory(id, isVisible).then(() => {
        getCategoryAll()
    })
}



// updateCategory

let categoryUP = ref({})

function updateCategory(id) {
    editShowModal.value = true
    // console.log(id);
    categoryUP.value = categoryStore.categoryList.find(item => item.id == id)
}
function updateCategoryBack() {

    let changecategory = { ...categoryUP.value, isVisible: false }

    apiCategory.updateCategory(changecategory).then(() => getCategoryAll())

    categoryUP.value = {
        name: {
            uz: '',
            ru: '',
            eng: ''
        },
        image: '',
        isVisible: ''
    }

    editShowModal.value = false
}

function searchCategory(name) {

    if (name.trim().length != 0) {
        apiCategory.SearchCategory(name).then(res => {
            console.log(res.data.content == undefined);
            if (res.data.content == undefined) {
                notCategory.value = false

            }
            else {
                notCategory.value = true
                categoryStore.categoryList = res.data.content
            }
        })
    }
    else {
        getCategoryAll()
    }

    // if (name.trim().length != 0) {
    //     apiCategory.SearchCategory(name).then(res => {
    //         if (res.data == 'NO_CONTENT') {
    //             categoryStore.setErrorMessage("Bunday Category mavjud emas")
    //         } else {
    //             categoryStore.categoryList = res.data.content
    //         }
    //     })
    // }
    // else {
    //     getCategoryAll()
    // }
}


// bekorqilish button
function bekorq() {
    showModal.value = false
    editShowModal.value = false
    category.value = {
        name: {
            uz: "",
            ru: "",
            eng: ''
        },
        image: null,
        isVisible: false

    }
}


</script>



<style lang="scss" scoped>
.modal {
    width: 50%;
}

.searchADD button {
    background-color: rgb(12, 86, 23);
}

.adddelete button {
    margin: 0 5px;
    border: none;
    outline: none;

}

.adddelete .add {
    background-color: green;
}

.adddelete .dell {
    background-color: red;
}

.last\:text-right:last-child {
    text-align: center;
}






@mixin scaleTransistion($val) {
    -ms-transform: scale($val);
    -moz-transform: scale($val);
    -webkit-transform: scale($val);
    transform: scale($val);
}

.errorModule {
    width: 50%;
    justify-content: center;
    margin: 40px auto 20px;
    text-align: center;
    color: #A80000;

    .errorIcon {
        font-size: 34px;
        margin: 15px;
        animation: animateIcon 5s infinite;
    }

    .errorMsg {
        font-size: 14px;
    }

    @keyframes animateIcon {
        0% {
            @include scaleTransistion(1)
        }

        50% {
            @include scaleTransistion(2);
        }

        100% {
            @include scaleTransistion(1)
        }
    }
}
</style> 