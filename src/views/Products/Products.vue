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
      <table-head-cell>Narxi</table-head-cell>
      <table-head-cell>Category ID</table-head-cell>
      <table-head-cell>O'chirish</table-head-cell>
      <table-head-cell>Tahrirlash</table-head-cell>
    </table-head>
    <table-body>
      <!-- {{ productStore.productList }} -->
      <table-row v-for="item in productStore.productList.products" :key="item.id">
        <table-cell>{{ item.title }}</table-cell>
        <table-cell>{{ item.rating }}</table-cell>
        <table-cell>{{ item.category }}</table-cell>
        <table-cell>{{ item.price }}</table-cell>
        <table-cell><Button color="default">Tahrirlash</Button></table-cell>
        <table-cell> <Button color="red" @click="DelProduct(item.id)">O'chirish</Button></table-cell>

      </table-row>

    </table-body>
  </Table>

  <n-modal style="width: 700px;" v-model:show="showModal" preset="dialog" title="Dialog">
    <template #header>
      <div>Maxsulot qo'shish</div>
    </template>
    <div>
      <Input placeholder="Maxsulot nomini kiriting" label="Maxsulot nomi"></Input>
      <Input placeholder="Category ID" label="Category ID"></Input>



      <!-- img Upload -->
      <div>
        <n-divider />
        <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :default-file-list="fileList"
          list-type="image-card">
          Rasm yuklash
        </n-upload>
        <n-divider />
        
        <n-modal v-model:show="showModal" preset="card" style="width: 600px" title="A Cool Picture">
          <img :src="previewImageUrl" style="width: 100%">
        </n-modal>
      </div>
      <!-- img Upload -->

      <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
        <img alt="example" style="width: 100%" :src="previewImage" />
      </a-modal>


      <div>
        <editor api-key="5htzl4ypa1oovqrr594pnwhv01yg03xfa2i95w62xy7r65dg" :init="{
          menubar: false,
          plugins: 'lists link image emoticons',
          toolbar: 'styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons'
        }" />

      </div>


    </div>
    <template #action>
      <div>action</div>
    </template>
  </n-modal>
</template>

<script setup>


import { ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'
// img uplod
// Modal
const showModal = ref(false)

import { Table, Input, TableHead, TableBody, TableHeadCell, TableRow, TableCell, Modal,Button } from 'flowbite-vue'
import { apiProducts } from '../../Server/apiProduct';
import { useProductStore } from '../../Store/Product/productStore.js'
import { onMounted } from 'vue'




const productStore = useProductStore()

function getProduct() {
  apiProducts.getProducts().then(res => productStore.setProduct(res.data))
}

function DelProduct(id) {
  apiProducts.deleteProduct(id).then(res => res.data)
    .catch(error => console.log(error))
}


onMounted(() => {
  getProduct()
})

//

// nUpload
const showModalRef = ref(false);
// const previewImageUrlRef = ref("");
// function handlePreview(file) {
//   const { url } = file;
//   previewImageUrlRef.value = url;
//   showModalRef.value = true;
// }
// nUpload


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

.last\:text-right:last-child {
  text-align: start;
}


.n-dialog.n-dialog--closable.n-dialog--icon-left.n-modal {
  width: 6000px !important;
  max-width: 1000px !important;
}
</style> 