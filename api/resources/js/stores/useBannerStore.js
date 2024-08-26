import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomID } from '@/utils/helpers'
import { Howl } from 'howler'

export const useBannerStore = defineStore('banner', () => {
    let id = ref(null)
    // States
    let show = ref(false)
    let type = ref('default')
    let placement = ref('top')
    let variant = ref('neutral') // neutral, light
    let size = ref(null)
    let message = ref(null)
    let autodismiss = ref(false)
    let backdropBlur = ref(true)
    let payload = ref(null)
    let props = ref(null)
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
        id.value = 'banner-' + randomID(15)
        show.value = true
        $patch(params)
        playAdd('info')
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
        if (k == 'backdropBlur') {
            if (v) {
                backdropBlur.value = true
            } else {
                backdropBlur.value = false
            }
        }
        if (k == 'payload') {
            payload.value = v
        }
        if (k == 'props') {
            props.value = v
        }
    }
    function $reset() {
        id.value = null
        show.value = false
        type.value = 'default'
        placement.value = 'top'
        variant.value = 'neutral'
        size.value = null
        message.value = null
        autodismiss.value = false
        backdropBlur.value = true
        payload.value = null
        props.value = null

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
        backdropBlur,
        payload,
        props,
        playAdd,
        playRemove,
        $patch,
        add,
        $set,
        $reset
    }
})
