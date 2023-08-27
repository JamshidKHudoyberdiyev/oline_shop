import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
    const productList = ref([])
    const loading = ref(true)
    const errorMessage = ref(null)




    function setProduct(data) {
        productList.value = data
    }

    function setLoading() {
        loading.value = false
    }

    function setErrorMessage(error) {
        errorMessage.value = error
    }

    return {
        productList,
        loading,
        errorMessage,
        setErrorMessage,
        setLoading,
        setProduct
    }
})