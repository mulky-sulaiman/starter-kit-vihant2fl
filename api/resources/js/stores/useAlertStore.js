import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomID } from '@/utils/helpers'
import { Howl } from 'howler'

export const useAlertStore = defineStore('alert', () => {
    let id = ref(null)
    // States
    let show = ref(false)
    let type = ref('default')
    let placement = ref('top')
    let variant = ref('info')
    let size = ref(null)
    let message = ref(null)
    let autodismiss = ref(true)
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
    function $patch(params) {
        Object.keys(params).forEach(function (key) {
            $set(key, params[key])
        })
    }
    function add(params) {
        $reset()
        id.value = 'alert-' + randomID(15)
        show.value = true
        $patch(params)
        playAdd(variant.value)
    }
    function $set(k, v) {
        if (k == 'id') {
            id.value = v
        }
        if (k == 'show') {
            if (v) {
                show.value = true
            } else {
                show.value = false
            }
        }
        if (k == 'type') {
            type.value = v
        }
        if (k == 'placement') {
            placement.value = v
        }
        if (k == 'variant') {
            variant.value = v
        }
        if (k == 'size') {
            size.value = v
        }
        if (k == 'message') {
            message.value = v
        }
        if (k == 'autodismiss') {
            if (v) {
                autodismiss.value = true
            } else {
                autodismiss.value = false
            }
        }
    }
    function $reset() {
        id.value = null
        show.value = false
        type.value = 'default'
        placement.value = 'top'
        variant.value = 'info'
        size.value = null
        message.value = null
        autodismiss.value = true

        playRemove()
    }
    return {
        id,
        show,
        type,
        placement,
        variant,
        size,
        message,
        autodismiss,
        playAdd,
        playRemove,
        $patch,
        add,
        $set,
        $reset
    }
})
