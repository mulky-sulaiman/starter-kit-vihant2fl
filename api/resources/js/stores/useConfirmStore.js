import { ref } from 'vue'
import { defineStore } from 'pinia'
import { randomID } from '@/utils/helpers'

export const useConfirmStore = defineStore('confirm', () => {
    const id = randomID(15)
    // States
    let key = ref('confirm-' + id)
    let opened = ref(false)
    let type = ref('warning')
    let size = ref('md')
    let useIcon = ref(true)
    let headTitle = ref('confirm.headTitle')
    let title = ref('confirm.title')
    let message = ref('confirm.message')
    let useCancel = ref(true)
    let labelCancel = ref('confirm.labelCancel')
    let useOk = ref(true)
    let labelOk = ref('confirm.labelOk')
    let placement = ref('left')
    let target = ref(null)
    let maxWidth = ref('md')
    let isConfirmed = ref(false)
    let backdropBlur = ref(true)
    // Getters
    const isValidConfirmation = (valueToWatch) => {
        return isConfirmed.value && target.value === valueToWatch
    }
    // Actions
    // function setValidConfirm() {
    //     isConfirmed.value = true
    //     opened.value = false
    // }
    function $patch(params) {
        Object.keys(params).forEach(function (key) {
            $set(key, params[key])
        })
    }
    function $set(k, v) {
        if (k == 'key') {
            key.value = v
        }
        if (k == 'opened') {
            if (v) {
                opened.value = true
            } else {
                opened.value = false
            }
        }
        if (k == 'type') {
            type.value = v
        }
        if (k == 'size') {
            size.value = v
        }
        if (k == 'useIcon') {
            if (v) {
                useIcon.value = true
            } else {
                useIcon.value = false
            }
        }
        if (k == 'headTitle') {
            headTitle.value = v
        }
        if (k == 'title') {
            title.value = v
        }
        if (k == 'message') {
            message.value = v
        }
        if (k == 'useCancel') {
            if (v) {
                useCancel.value = true
            } else {
                useCancel.value = false
            }
        }
        if (k == 'labelCancel') {
            labelCancel.value = v
        }
        if (k == 'useOk') {
            if (v) {
                useOk.value = true
            } else {
                useOk.value = false
            }
        }
        if (k == 'labelOk') {
            labelOk.value = v
        }
        if (k == 'placement') {
            placement.value = v
        }
        if (k == 'target') {
            target.value = v
        }
        if (k == 'maxWidth') {
            maxWidth.value = v
        }
        if (k == 'isConfirmed') {
            if (v) {
                isConfirmed.value = true
            } else {
                isConfirmed.value = false
            }
        }
        if (k == 'backdropBlur') {
            if (v) {
                backdropBlur.value = true
            } else {
                backdropBlur.value = false
            }
        }
    }
    function $reset() {
        key.value = 'confirm-dialog-' + id
        opened.value = false
        type.value = 'warning'
        size.value = 'md'
        useIcon.value = true
        headTitle.value = 'confirm.headTitle'
        title.value = 'confirm.title'
        message.value = 'confirm.message'
        useCancel.value = true
        labelCancel.value = 'confirm.labelCancel'
        useOk.value = true
        labelOk.value = 'confirm.labelOk'
        placement.value = 'left'
        target.value = null
        maxWidth.value = 'md'
        isConfirmed.value = false
        backdropBlur.value = true
    }
    return {
        key,
        opened,
        type,
        size,
        useIcon,
        headTitle,
        title,
        message,
        useCancel,
        labelCancel,
        useOk,
        labelOk,
        placement,
        target,
        maxWidth,
        isConfirmed,
        backdropBlur,
        isValidConfirmation,
        // setValidConfirm,
        $patch,
        $set,
        $reset
    }
})
