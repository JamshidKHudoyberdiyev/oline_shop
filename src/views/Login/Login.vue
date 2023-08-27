<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Login
            </a>
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form @click.prevent="" class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input v-model="adminData.email" type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="inter your email " required="">
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input v-model="adminData.password" type="password" name="password" id="password"
                                placeholder="inter your password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="">
                        </div>

                        <button @click="login" type="submit"
                            class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign
                            in</button>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { authLogin } from '../../Auth/auth.js'

const router = useRouter()

const adminData = ref({
    email: '',
    password: null
})

// authLogin(adminData).then(res=>console.log(res.data,"vggf"))

function login() {

    if (adminData.value.email.length != 0 && adminData.value.password.length != 0) {
        const newdata = {
            ...adminData.value
        }

        authLogin(newdata).then(res => {
            console.log(res.data, "ddsadas")
            // router.push({ name: "dashboard" })
            // localStorage.setItem('token', res.data.token)

        }).catch(error => {
            console.log(error);
        })
    }

    else {
        alert("empetiy or paswort is empty")
    }


}

</script>

<style lang="scss" scoped>
input :focus {
    outline: 0 none;
}
</style>