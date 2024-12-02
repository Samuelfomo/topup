<template>
    <div class="text-lg mb-8 bg-white border border-gray-400 p-4">
      <p class=" text-center font-roboto pt-2 rounded-2xl"> Retrouvez mon abonnement sur
        <span class="font-bold text-4xl">topup</span>
        <span class="font-bold text-4xl" style="color: #FF4200">+</span>
      </p>
    </div>
  <div class="min-h-screen bg-gray-50 flex items-start justify-center p-4 pt-20">
    <div class="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 space-y-6">
      <div class="text-center">
        <p class="text-gray-800 mb-6 font-roboto">
          Entrez le numéro de votre décodeur
        </p>
      </div>

      <div class="relative">
        <input
            v-model="decoderNumber"
            type="search"
            placeholder="Numéro de décodeur"
            class="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl
                 focus:outline-none focus:border-orange-500 focus:ring-2
                 focus:ring-orange-200 transition duration-300
                 placeholder-gray-400"
        />
        <button
            @click="searchDecoder"
            :disabled="!decoderNumber"
            class="absolute right-2 top-1/2 transform -translate-y-1/2
                 bg-orange-500 text-white p-3 rounded-lg
                 hover:bg-orange-600 transition duration-300
                 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Rechercher
        </button>
        <button
            @click="searchDecoder"
            :disabled="!decoderNumber"
            class="absolute right-2 top-1/2 transform -translate-y-1/2
                 bg-orange-500 text-white p-3 rounded-lg
                 hover:bg-orange-600 transition duration-300
                 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Rechercher
        </button>

      </div>

      <div class="text-center text-sm text-gray-500 mt-4">
        Besoin d'aide ? <a href="#" class="text-orange-600 hover:underline">Contactez-nous</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const decoderNumber = ref('')

const searchDecoder = () => {
  // Logique de recherche à implémenter
  console.log('Recherche pour le décodeur:', decoderNumber.value)
}
</script>

<style scoped>
/* Styles personnalisés supplémentaires si nécessaire */
</style>