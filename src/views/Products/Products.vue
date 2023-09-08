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
      <table-head-cell>Nomi</table-head-cell>
      <table-head-cell class="text-center">Category</table-head-cell>
      <table-head-cell class="text-center">Narxi</table-head-cell>
      <table-head-cell class="text-center">Ko'satish</table-head-cell>
      <table-head-cell class="text-center">O'chirish</table-head-cell>
      <table-head-cell>Tahrirlash</table-head-cell>
    </table-head>
    <table-body>
      <!-- {{ productStore.productList }} -->
      <table-row v-for="item in productStore?.productList" :key="item.id">
        <!-- {{ item }} -->
        <table-cell>{{ item.title }}</table-cell>
        <table-cell class="text-center">{{ item.categoryId }}</table-cell>
        <table-cell class="text-center">{{ item.cost }}</table-cell>
        <!-- <table-cell>{{ item.category }}</table-cell> -->
        <table-cell class="text-center">
          <i class="fa-regular" @click="updateVisible(item)" :class="{ 'fa-eye': item.isVisible, 'fa-eye-slash': !item.isVisible }"></i>
          {{ item.isVisible }}
        </table-cell>
        <table-cell class="text-center"><Button color="default">Tahrirlash</Button></table-cell>
        <table-cell class="text-center"> <Button color="red" @click="DelProduct(item.id)">O'chirish</Button></table-cell>

      </table-row>

    </table-body>
  </Table>

  <n-modal style="width: 700px;" v-model:show="showModal" preset="dialog" title="Dialog">
    <template #header>
      <div>Maxsulot qo'shish</div>
    </template>
    <div>

      <Input v-model="product.title" placeholder="Maxsulot nomini kiriting" class=" my-2 " label="Maxsulot nomi"></Input>
      <div class="div">
        <h3>Categoryani tanlang</h3>
        <n-select placeholder="Select" v-model:value="product.selectValue" :options="useCategoryStore.categoryList" />
        <!-- <Input v-model="category" placeholder="Category ID" label="Category ID" class=" my-2"></Input> -->
        <!-- v-model:value="model.selectValue" -->
      </div>
      <div class="my-2">
        <h3>Maxsulot haqida ma'lumot kiriting</h3>
        <editor v-model="product.description" api-key="5htzl4ypa1oovqrr594pnwhv01yg03xfa2i95w62xy7r65dg" :init="{
          menubar: false,
          plugins: 'lists link image emoticons',
          toolbar: 'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons'
        }" />
      </div>
      <Input v-model="product.cost" type="number" placeholder="Maxsulot narxini kiriting" label="Narxi"></Input>
      <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
        <img alt="example" style="width: 100%" :src="previewImage" />
      </a-modal>
    </div>
    <template #action>
      <div class="adddelete">
        <n-button @click="addProduct" type="primary" class=" add  rounded-md">
          Qo'shish
        </n-button>
        <n-button type="primary" @click="bekorq" class=" dell rounded-md">
          Bekor qilish
        </n-button>
      </div>
    </template>
  </n-modal>
</template>

<script setup>
import { ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'
import { Table, Input, TableHead, TableBody, TableHeadCell, TableRow, TableCell, Modal, Button } from 'flowbite-vue'
import { apiProducts } from '../../Server/apiProduct';
import { useProductStore } from '../../Store/Product/productStore.js'
import { onMounted } from 'vue'
import { useCategoryStore } from '../../Store/Category/categoryStore.js'
import { apiCategory } from '../../Server/apiCategry.js'

const showModal = ref(false)


const productStore = useProductStore()




onMounted(() => {
  getProduct()
  // apiProducts.searchProduct().then(res => console.log(res.data))
})

//

// nUpload











let product = ref({
  title: '',
  selectValue: null,
  description: '',
  cost: null,
  isVisible: false
})



// getProduct

function getProduct() {
  apiProducts.getProducts().then(res => productStore.setProduct(res.data))
}

// deleteProuct

function DelProduct(id) {
  apiProducts.deleteProduct(id).then(() => getProduct())
    .catch(error => console.log(error))
}


// addProduct

function addProduct() {

  const newProduct = {
    ...product.value
  }

  apiProducts.addNewProduct(newProduct).then(() => {
    getProduct()
  })

  showModal.value = false
  product.value = {
    title: '',
    selectValue: null,
    description: '',
    cost: null
  }

}


// updateVisible


function updateVisible(item) {
  const updateData = { ...item, isVisible: !item.isVisible }
  console.log(updateData);
  // console.log(updateData);
  apiCategory.updateCategory(item.id,updateData).then(()=>getProduct())
}




// closeModal
function bekorq() {

  showModal.value = false
  product.value = {
    title: '',
    selectValue: null,
    description: '',
    cost: null
  }
}



</script>

<style lang="scss" scoped>
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}

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
  text-align: start;
}


.n-dialog.n-dialog--closable.n-dialog--icon-left.n-modal {
  width: 6000px !important;
  max-width: 1000px !important;
}
</style> 