<script defer type="text/javascript" src="{{ asset('assets/js/utils.js') }}"></script>
<script type="text/javascript">
    // Used to add dark mode right away, adding here prevents any flicker
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem('dark_mode') && localStorage.getItem('dark_mode') == 'true') {
            document.documentElement.classList.add('dark');
        }
    }
    // document.addEventListener('alpine:init', () => {

    //     Alpine.store('main', () => ({
    //         // Confirm Dialog Store
    //         opened: false,
    //         type: 'warning',
    //         size: 'md',
    //         useIcon: true,
    //         headTitle: '{{ __('Confirmation Needed') }}',
    //         title: '{{ __('Are you sure you want to do this operation?') }}',
    //         message: '{{ __('Click OK to continue, or CANCEL to abort the operation') }}',
    //         useCancel: true,
    //         labelCancel: '{{ __('Cancel') }}',
    //         useOk: true,
    //         labelOk: '{{ __('OK') }}',
    //         placement: 'left',
    //         target: '',
    //         maxWidth: 'md',
    //         wirePlacement: 'left',
    //         wireExtraWidth: '',
    //         setConfirmDialog(options) {
    //             const set = (k, v) => {
    //                 if (k == 'opened') {
    //                     if (v) {
    //                         this.opened = true
    //                     } else {
    //                         this.opened = false
    //                     }
    //                 }
    //                 if (k == 'type') {
    //                     this.type = v
    //                 }
    //                 if (k == 'size') {
    //                     this.size = v
    //                 }
    //                 if (k == 'useIcon') {
    //                     if (v) {
    //                         this.useIcon = true
    //                     } else {
    //                         this.useIcon = false
    //                     }
    //                 }
    //                 if (k == 'headTitle') {
    //                     this.headTitle = v
    //                 }
    //                 if (k == 'title') {
    //                     this.title = v
    //                 }
    //                 if (k == 'message') {
    //                     this.message = v
    //                 }
    //                 if (k == 'useCancel') {
    //                     if (v) {
    //                         this.useCancel = true
    //                     } else {
    //                         this.useCancel = false
    //                     }
    //                 }
    //                 if (k == 'labelCancel') {
    //                     this.labelCancel = v
    //                 }
    //                 if (k == 'useOk') {
    //                     if (v) {
    //                         this.useOk = true
    //                     } else {
    //                         this.useOk = false
    //                     }
    //                 }
    //                 if (k == 'labelOk') {
    //                     this.labelOk = v
    //                 }
    //                 if (k == 'placement') {
    //                     this.placement = v
    //                 }
    //                 if (k == 'target') {
    //                     this.target = v
    //                 }
    //                 if (k == 'maxWidth') {
    //                     this.maxWidth = v
    //                 }
    //                 if (k == 'wirePlacement') {
    //                     this.wirePlacement = v
    //                 }
    //                 // if (k == 'wireExtraWidth') {
    //                 //     if (v) {
    //                 //         this.wireExtraWidth = true
    //                 //     } else {
    //                 //         this.wireExtraWidth = false
    //                 //     }
    //                 // }
    //                 if (k == 'wireExtraWidth') {
    //                     this.wireExtraWidth = v
    //                 }
    //                 if (k == 'sidebarShow') {
    //                     if (v) {
    //                         this.sidebarShow = true
    //                     } else {
    //                         this.sidebarShow = false
    //                     }
    //                 }
    //             }
    //             Object.keys(options).forEach(function(k) {
    //                 set(k, options[k])
    //             })
    //         },
    //         resetConfirmDialog() {
    //             this.opened = false
    //             this.type = 'warning'
    //             this.size = 'md'
    //             this.useIcon = true
    //             this.headTitle = '{{ __('Confirmation Needed') }}'
    //             this.title = '{{ __('Are you sure you want to do this operation?') }}'
    //             this.message = '{{ __('Click OK to continue, or CANCEL to abort the operation') }}'
    //             this.useCancel = true
    //             this.labelCancel = '{{ __('Cancel') }}'
    //             this.useOk = true
    //             this.labelOk = '{{ __('OK') }}'
    //             this.placement = 'left'
    //             this.target = ''
    //             this.maxWidth = ''
    //             this.wirePlacement = 'left'
    //             this.wireExtraWidth = ''
    //             this.sidebarShow = true
    //         },
    //         // Sidebar Store
    //         sidebarShow: true,
    //         toggleSidebar() {
    //             if (this.sidebarShow) {
    //                 this.sidebarShow = false
    //             } else {
    //                 this.sidebarShow = true
    //             }
    //         },
    //         // Toast Store
    //         toasts: [],
    //         toastShow: false,
    //         toastPlayAdd(soundType) {
    //             switch (soundType) {
    //                 case 'info':
    //                     var fileName = 'info'
    //                     break;
    //                 case 'warning':
    //                     var fileName = 'warning'
    //                     break;
    //                 case 'error':
    //                     var fileName = 'error'
    //                     break;
    //                 case 'success':
    //                     var fileName = 'success'
    //                     break;
    //                 default:
    //                     var fileName = 'info'
    //             }

    //             var sound = new Howl({
    //                 src: ['/assets/audio/' + fileName + '.mp3'],
    //                 autoplay: true,
    //                 volume: 0.3,
    //                 // onplayerror: function () {
    //                 //     sound.once('unlock', function () {
    //                 //         sound.play();
    //                 //     });
    //                 // }
    //             });
    //             sound.play();
    //         },
    //         toastPlayRemove() {
    //             var sound = new Howl({
    //                 src: ['/assets/audio/close.mp3'],
    //                 autoplay: true,
    //                 volume: 0.3,
    //                 // onplayerror: function () {
    //                 //     sound.once('unlock', function () {
    //                 //         sound.play();
    //                 //     });
    //                 // }
    //             });
    //             sound.play();
    //         },
    //         toastAdd(toast) {
    //             this.toasts.unshift({
    //                 key: Symbol(),
    //                 ...toast
    //             })
    //             this.toastShow = true
    //             this.toastPlayAdd(toast.toastType)
    //         },
    //         toastRemove(index) {
    //             this.toasts.splice(index, 1)
    //             // this.toastPlayRemove()
    //         },
    //         toastReset() {
    //             this.toasts = [];
    //         }
    //     }))
    // })
</script>
