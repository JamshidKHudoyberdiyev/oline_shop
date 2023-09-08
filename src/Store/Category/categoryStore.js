import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCategoryStore = defineStore('categryStore', () => {
    const categoryList = ref([])
    const isLoading = ref(true)
    const errorMessage = ref('')

    function setCategoryList(data) {
        return (categoryList.value = data)
    }

    function setLoading() {
        return (isLoading.value = false)
    }

    function setErrorMessage(message) {
        return (errorMessage.value = message)
    }

    return {
        categoryList,
        isLoading,
        errorMessage,
        setCategoryList,
        setLoading,
        setErrorMessage
    }
})