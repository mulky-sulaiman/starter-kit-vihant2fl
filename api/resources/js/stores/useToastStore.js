import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomID } from '@/utils/helpers'
import { Howl } from 'howler'

// export default reactive({
//     items: [],
//     playAdd(soundType) {
//         switch (soundType) {
//             case 'info':
//                 var fileName = 'info'
//                 break;
//             case 'warning':
//                 var fileName = 'warning'
//                 break;
//             case 'error':
//                 var fileName = 'error'
//                 break;
//             case 'success':
//                 var fileName = 'success'
//                 break;
//             default:
//                 var fileName = 'info'
//         }

//         var sound = new Howl({
//             src: ['/assets/audio/' + fileName + '.mp3'],
//             autoplay: true,
//             volume: 0.3,
//             // onplayerror: function () {
//             //     sound.once('unlock', function () {
//             //         sound.play();
//             //     });
//             // }
//         });
//         sound.play();
//     },
//     playRemove() {
//         var sound = new Howl({
//             src: ['/assets/audio/close.mp3'],
//             autoplay: true,
//             volume: 0.3,
//             // onplayerror: function () {
//             //     sound.once('unlock', function () {
//             //         sound.play();
//             //     });
//             // }
//         });
//         sound.play();
//     },
//     add(toast) {
//         this.items.unshift({
//             key: Symbol(),
//             ...toast
//         })
//         this.playAdd(toast.type)
//     },
//     remove(index) {
//         this.items.splice(index, 1)
//         this.playRemove()
//     },
//     $reset() {
//         this.items = [];
//     }
// });

export const useToastStore = defineStore('toast', () => {
    // States
    let items = ref([])
    // Getters

    // Actions
    function playAdd(soundType) {
        switch (soundType) {
            case 'info':
                var fileName = 'info'
                break;
            case 'warning':
                var fileName = 'warning'
                break;
            case 'error':
                var fileName = 'error'
                break;
            case 'success':
                var fileName = 'success'
                break;
            default:
                var fileName = 'info'
        }

        var sound = new Howl({
            src: ['/assets/audio/' + fileName + '.mp3'],
            autoplay: true,
            volume: 0.3,
            // onplayerror: function () {
            //     sound.once('unlock', function () {
            //         sound.play();
            //     });
            // }
        });
        sound.play();
    }
    function playRemove() {
        var sound = new Howl({
            src: ['/assets/audio/close.mp3'],
            autoplay: true,
            volume: 0.3,
            // onplayerror: function () {
            //     sound.once('unlock', function () {
            //         sound.play();
            //     });
            // }
        });
        sound.play();
    }
    function add(toast) {
        const id = randomID(15)
        items.value.unshift({
            key: 'toast-' + id,
            ...toast
        })
        playAdd(toast.type)
    }
    function remove(index) {
        items.value.splice(index, 1)
        playRemove()
    }
    function $reset() {
        items.value = [];
    }
    return {
        items,
        playAdd,
        playRemove,
        add,
        remove,
        $reset
    }
})
