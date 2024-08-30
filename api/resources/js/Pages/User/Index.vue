<script lang="ts" setup>
import LayoutsDefault from '@/Layouts/Default.vue'
import LayoutsLanding from '@/Layouts/Landing.vue'
import UICard from '@/Components/UI/Card/Index.vue';
import UIContainerLayout from '@/Components/UI/Container/Layout/Index.vue'
import UIContainerLayoutItem from '@/Components/UI/Container/Layout/Item.vue'
import { Icon } from '@iconify/vue'
import UIAvatar from '@/Components/UI/Avatar/Index.vue'
import UIButton from '@/Components/UI/Button.vue'
import { useForm } from '@inertiajs/vue3'
import UIBadge from '@/Components/UI/Badge.vue'
import UIPagination from '@/Components/UI/Pagination/Index.vue'
import FormSearchBar from '@/Components/Form/Search/Bar.vue'
import FormSearchSimple from '@/Components/Form/Search/Simple.vue'
import UIPageHeader from '@/Components/UI/Page/Header/Index.vue'
import UIPageLayoutWrapper from '@/Components/UI/Page/Layout/Wrapper.vue'

const props = defineProps({
    users: Object,
    layout: {
        type: String,
        default: 'list'
    },
    search: {
        type: String,
        default: ''
    }
})

const form = useForm({
    search: props.search,
    layout: props.layout,
})

const submit = () => {
    form.get(route('user.index'), { preserveScroll: true, replace: true })
}

const updateLayout = (val) => {
    form.layout = val
    submit()
}

const breadcrumbs = {
    0: {
        label: 'User',
        link: 'user.index'
    },
    1: {
        label: 'List',
        link: ''
    },
}

defineOptions({
    layout: [LayoutsDefault, LayoutsLanding]
})

</script>
<template>
    <UIHead v-bind:title="$t('global.user')" v-bind:description="$t('global.user')" />
    <UIPageLayoutWrapper class="!px-4 !pt-20">
        <UIPageHeader mode="grid" title="User" v-bind:breadcrumbs="breadcrumbs" />
        <!-- <div class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:pb-16 lg:gap-8 xl:gap-0 lg:py-16"> -->
        <UIContainerLayout v-bind:layout="layout" v-on:change-layout="updateLayout($event)">
            <template #left>
                <FormSearchBar identifier="search" v-model="form.search" v-bind:placeholder="$t('global.search')"
                    v-bind:formIsDirty="form.isDirty" v-on:search-submit="submit"
                    v-on:search-reset="form.search = ''; submit()" v-bind:error="users.data.length ? null : 'error'"
                    v-bind:success="users.data.length && search ? 'success' : null" v-bind:processing="form.processing"
                    icon="user-circle" />
            </template>
            <UIContainerLayoutItem v-if="users.data.length" v-for="user in users.data" v-bind:key="user.id">
                <UICard size="full">
                    <div class="flex items-center justify-start gap-4" v-if="layout === 'list'">

                        <UIAvatar v-bind:id="user.username + '-list'" size="xl" rounded="full" v-bind:tooltip="true"
                            v-bind:src="user.avatar_url" v-bind:alt="user.name" v-bind:indicator="false"
                            placement="bottom" v-bind:color="user.active ? 'success' : 'danger'" />

                        <div class="w-full">
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white" v-text="user.name"></h5>
                            <div class="mb-4 text-sm text-gray-500 dark:text-gray-400 " v-text="'@' + user.username">
                            </div>
                            <UIBadge size="xs" v-bind:border="true" v-bind:type="user.active ? 'success' : 'danger'">
                                {{ user.active ? 'Active' : 'Inactive' }}
                            </UIBadge>
                            <div class="flex justify-end w-full mt-4 md:mt-6">
                                <UIButton as="link" type="light" class="hidden md:flex"
                                    v-bind:href="route('profile.show', { username: user.username })">
                                    <Icon icon="tabler:eye" class="mr-2 size-5" />
                                    <span class="truncate">View Profile</span>
                                </UIButton>
                                <UIButton size="xs" as="link" type="light" class="md:hidden"
                                    v-bind:href="route('profile.show', { username: user.username })">
                                    <Icon icon="tabler:eye" class="size-6" />
                                </UIButton>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center" v-else-if="layout === 'grid'">
                        <UIAvatar v-bind:id="user.username + '-grid'" size="lg" rounded="full" v-bind:tooltip="true"
                            v-bind:src="user.avatar_url" v-bind:alt="user.name" v-bind:indicator="false"
                            placement="bottom" v-bind:color="user.active ? 'success' : 'danger'" />
                        <h5 class="mt-2 text-xl font-medium text-gray-900 dark:text-white" v-text="user.name"></h5>
                        <div class="mb-2 text-sm text-gray-500 dark:text-gray-400" v-text="'@' + user.username"></div>
                        <UIBadge size="xs" v-bind:border="true" v-bind:type="user.active ? 'success' : 'danger'">
                            {{ user.active ? 'Active' : 'Inactive' }}
                        </UIBadge>
                        <div class="flex mt-4 md:mt-6">
                            <UIButton as="link" type="light" class="hidden md:flex"
                                v-bind:href="route('profile.show', { username: user.username })">
                                <Icon icon="tabler:eye" class="mr-2 size-5" />
                                <span class="truncate">View Profile</span>
                            </UIButton>
                            <UIButton size="xs" as="link" type="light" class="md:hidden"
                                v-bind:href="route('profile.show', { username: user.username })">
                                <Icon icon="tabler:eye" class="size-6" />
                            </UIButton>
                        </div>
                    </div>
                </UICard>
            </UIContainerLayoutItem>
        </UIContainerLayout>
        <UIPagination v-bind:pagination="users.meta" v-if="users.data.length" />
        <UICard size="full" class="mx-4" v-else>
            <p class="p-4 tracking-widest text-center text-gray-400 uppercase dark:text-gray-300"
                v-text="$t('global.nothing_found')"></p>
        </UICard>
        <!-- </div> -->
    </UIPageLayoutWrapper>
</template>
<style scoped></style>
