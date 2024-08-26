// import Alpine from '../../../node_modules/alpinejs'
document.addEventListener('alpine:init', () => {
    Alpine.store('global', () => ({

        //on: Alpine.$persist(true).as('darkMode_on')

        // Modal Store
        modal: {
            show: false,
            maxWidth: 'md',
            fullScreen: false,
            $patch(options) {
                const set = (key, value) => {
                    if (key == 'show') {
                        if (value) {
                            this.show = true
                        } else {
                            this.show = false
                        }
                    }
                    if (key == 'maxWidth') {
                        this.maxWidth = value
                    }
                    if (key == 'fullScreen') {
                        if (value) {
                            this.fullScreen = true
                        } else {
                            this.fullScreen = false
                        }
                    }
                }
                Object.keys(options).forEach(function (key) {
                    set(key, options[key])
                })
            },
            $reset() {
                this.show = false
                this.maxWidth = 'md'
                this.fullScreen = false
            },
        },
        // Drawer Store
        drawer: {
            show: false,
            extraWidth: null,
            placement: 'left',
            $patch(options) {
                const set = (key, value) => {
                    if (key == 'show') {
                        if (value) {
                            this.show = true
                        } else {
                            this.show = false
                        }
                    }
                    if (key == 'extraWidth') {
                        this.extraWidth = value
                    }
                    if (key == 'placement') {
                        this.placement = value
                    }
                }
                Object.keys(options).forEach(function (key) {
                    set(key, options[key])
                })
            },
            $reset() {
                this.show = false
                this.extraWidth = null
                this.placement = 'left'
            },
        },
        // Confirm Store
        confirm: {
            show: false,
            type: 'warning',
            size: 'md',
            useIcon: true,
            headTitle: 'Confirmation Needed',
            title: 'Are you sure you want to do this operation?',
            message: 'Click OK to continue, or CANCEL to abort the operation',
            useCancel: true,
            labelCancel: 'Cancel',
            useOk: true,
            labelOk: 'OK',
            placement: 'left',
            target: '',
            opened: false,
            backdropBlur: false,
            $patch(options) {
                const set = (key, value) => {
                    if (key == 'show') {
                        if (value) {
                            this.show = true
                        } else {
                            this.show = false
                        }
                    }
                    if (key == 'type') {
                        this.type = value
                    }
                    if (key == 'size') {
                        this.size = value
                    }
                    if (key == 'useIcon') {
                        if (value) {
                            this.useIcon = true
                        } else {
                            this.useIcon = false
                        }
                    }
                    if (key == 'headTitle') {
                        this.headTitle = value
                    }
                    if (key == 'title') {
                        this.title = value
                    }
                    if (key == 'message') {
                        this.message = value
                    }
                    if (key == 'useCancel') {
                        if (value) {
                            this.useCancel = true
                        } else {
                            this.useCancel = false
                        }
                    }
                    if (key == 'labelCancel') {
                        this.labelCancel = value
                    }
                    if (key == 'useOk') {
                        if (value) {
                            this.useOk = true
                        } else {
                            this.useOk = false
                        }
                    }
                    if (key == 'labelOk') {
                        this.labelOk = value
                    }
                    if (key == 'placement') {
                        this.placement = value
                    }
                    if (key == 'target') {
                        this.target = value
                    }
                    if (key == 'opened') {
                        if (value) {
                            this.opened = true
                        } else {
                            this.opened = false
                        }
                    }
                    if (key == 'backdropBlur') {
                        if (value) {
                            this.backdropBlur = true
                        } else {
                            this.backdropBlur = false
                        }
                    }
                }
                Object.keys(options).forEach(function (key) {
                    set(key, options[key])
                })
            },
            $reset() {
                this.show = false,
                    this.type = 'warning'
                this.size = 'md'
                this.useIcon = true
                this.headTitle = 'Confirmation Needed'
                this.title = 'Are you sure you want to do this operation?'
                this.message = 'Click OK to continue, or CANCEL to abort the operation'
                this.useCancel = true
                this.labelCancel = 'Cancel'
                this.useOk = true
                this.labelOk = 'OK'
                this.placement = 'left'
                this.target = ''
                this.opened = false
                this.backdropBlur = false
            },
            handleConfirm() {
                // return htmx.trigger(window, this.target)
                window.dispatchEvent(new CustomEvent(this.target, { bubbles: true }))
                this.$reset()
            }
        },
        // Toast Store
        toaster: {
            toasts: [],
            show: false,
            playAdd(soundType) {
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
                });
                sound.play();
            },
            playRemove() {
                var sound = new Howl({
                    src: ['/assets/audio/close.mp3'],
                    autoplay: true,
                    volume: 0.3,
                });
                sound.play();
            },
            add(toast) {
                this.toasts.unshift({
                    key: Symbol(),
                    ...toast
                })
                this.show = true
                this.playAdd(toast.type)
            },
            remove(index) {
                this.toasts.splice(index, 1)
                // this.playRemove()
            },
            $reset() {
                this.toasts = []
                this.show = false
            }
        },
        // Alert Store
        alert: {
            id: null,
            show: false,
            type: 'default',
            placement: 'top',
            variant: 'info',
            size: null,
            message: null,
            autodismiss: true,
            playAdd(soundType) {
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
                });
                sound.play();
            },
            playRemove() {
                var sound = new Howl({
                    src: ['/assets/audio/close.mp3'],
                    autoplay: true,
                    volume: 0.3,
                });
                sound.play();
            },
            $patch(options) {
                const set = (k, v) => {
                    if (k == 'id') {
                        this.id = v
                    }
                    if (k == 'show') {
                        if (v) {
                            this.show = true
                        } else {
                            this.show = false
                        }
                    }
                    if (k == 'type') {
                        this.type = v
                    }
                    if (k == 'placement') {
                        this.placement = v
                    }
                    if (k == 'variant') {
                        this.variant = v
                    }
                    if (k == 'size') {
                        this.size = v
                    }
                    if (k == 'message') {
                        this.message = v
                    }
                    if (k == 'autodismiss') {
                        if (v) {
                            this.autodismiss = true
                        } else {
                            this.autodismiss = false
                        }
                    }
                }
                Object.keys(options).forEach(function (key) {
                    set(key, options[key])
                })
            },
            add(params) {
                this.$reset()
                this.id = 'alert-' + randomID(15)
                this.show = true
                this.$patch(params)
                this.playAdd(this.variant)
            },
            $reset() {
                this.id = null
                this.show = false
                this.type = 'default'
                this.placement = 'top'
                this.variant = 'info'
                this.size = null
                this.message = null
                this.autodismiss = true
                this.playRemove()
            },
        },
        // Banner Store
        banner: {
            id: null,
            show: false,
            type: 'default',
            placement: 'top',
            variant: 'neutral',
            size: null,
            message: null,
            autodismiss: true,
            backdropBlur: true,
            payload: null,
            playAdd() {
                var sound = new Howl({
                    src: ['/assets/audio/info.mp3'],
                    autoplay: true,
                    volume: 0.3,
                });
                sound.play();
            },
            playRemove() {
                var sound = new Howl({
                    src: ['/assets/audio/close.mp3'],
                    autoplay: true,
                    volume: 0.3,
                });
                sound.play();
            },
            $patch(options) {
                const set = (k, v) => {
                    if (k == 'id') {
                        this.id = v
                    }
                    if (k == 'show') {
                        if (v) {
                            this.show = true
                        } else {
                            this.show = false
                        }
                    }
                    if (k == 'type') {
                        this.type = v
                    }
                    if (k == 'placement') {
                        this.placement = v
                    }
                    if (k == 'variant') {
                        this.variant = v
                    }
                    if (k == 'size') {
                        this.size = v
                    }
                    if (k == 'message') {
                        this.message = v
                    }
                    if (k == 'autodismiss') {
                        if (v) {
                            this.autodismiss = true
                        } else {
                            this.autodismiss = false
                        }
                    }
                    if (k == 'backdropBlur') {
                        if (v) {
                            this.backdropBlur = true
                        } else {
                            this.backdropBlur = false
                        }
                    }
                    if (k == 'payload') {
                        this.payload = v
                    }
                }
                Object.keys(options).forEach(function (key) {
                    set(key, options[key])
                })
            },
            add(params) {
                this.$reset()
                this.id = 'banner-' + randomID(15)
                this.show = true
                this.$patch(params)
                this.playAdd()
            },
            $reset() {
                this.id = null
                this.show = false
                this.type = 'default'
                this.placement = 'top'
                this.variant = 'neutral'
                this.size = null
                this.message = null
                this.autodismiss = true
                this.backdropBlur = true
                this.payload = null
                this.playRemove()
            },
        },
    }))
})

//Alpine.start()
