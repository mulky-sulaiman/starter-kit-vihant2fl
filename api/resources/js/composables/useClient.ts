import { Ref, computed } from 'vue'

export default function useClient(): { isClient: Ref<boolean> } {
    const isClient: Ref<boolean> = computed(() => {
        return (typeof window === 'undefined') ? false : true
    })
    return {
        isClient
    }
}

// import { ref } from 'vue'

// export default function useClient() {
//     const isClient = ref((typeof window === 'undefined') ? true : false)
//     return {
//         isClient
//     }
// }
