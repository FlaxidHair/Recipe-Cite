<template>
    <div class="main d-flex flex-column align-center"  v-if="!store.loading" >
        <h2 class="mt-10 mb-5">Добавить заметку</h2>
        <v-container>
            <div class="w-xl-50 w-lg-50 w-md-50 w-sm-75 w-100 mr-auto ml-auto border-thin mb-5">
                <v-form ref="vform2" v-model="valid" >
                <form ref="forma" @submit.prevent>
                    <div class="d-flex">
                        <v-text-field required :rules="[rules.required]" name="Title" v-model="title" label="Введите заголовок" tile variant="solo"
                            hide-details class=""></v-text-field>
                            <div>
                                <v-btn @click="postNote()" :disabled="userStore.isLogin ? false : true" class="elevation-2" type="submit" width="120px" tile height="56px"
                            flat>Добавить</v-btn>
                                <v-tooltip v-if="!userStore.isLogin" activator="parent" location="end">Войдите что бы добавить!</v-tooltip>
                            </div>
                    </div>
                    <v-textarea v-model="subTitle" name="Subtitle" label="Введите заметку" no-resize max-rows="10" tile
                        variant="filled" hide-details class=""></v-textarea>
                </form>
            </v-form>
            </div>
            <div class="d-flex flex-column align-center">
                <v-dialog max-width="800">
                    <template v-slot:activator="{ props: activatorProps }">
                        <div class="d-flex ga-5 justify-center flex-wrap">
                            <div v-for="note in store.getterNotes" :key="note" class="d-flex  ga-5 mb-7">
                                <v-hover v-slot="{ isHovering, props }" open-delay="50">
                                    <div @click="() => { store.selectNote = note }" :item="note"
                                        class="w-100 cursor-pointer d-flex" v-bind="activatorProps">
                                        <v-card class="d-flex flex-column align-center" min-width="300px" height="200px"
                                            :class="isHovering, props" v-bind="props" :elevation="isHovering ? 8 : 2">
                                            <v-card-title class="mr-auto ml-auto">{{ note.Title }}</v-card-title>
                                            <v-card-text class="h-25 text-caption">{{ note.Subtitle }}</v-card-text>
                                        </v-card>
                                    </div>
                                </v-hover>
                            </div>
                        </div>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card class="d-flex flex-column">
                            <div class="d-flex mt-1">
                                <v-card-title>
                                    {{ store.selectNote.Title }}
                                </v-card-title>
                                <v-card-actions class="ml-auto align-end mr-2">
                                    <v-spacer></v-spacer>
                                    <v-btn text="Закрыть" @click="isActive.value = false"></v-btn>
                                </v-card-actions>
                            </div>
                            <v-card-text>{{ store.selectNote.Subtitle }}</v-card-text>
                            <v-btn :disabled="!userStore.isLogin ? true : false"
                            width="150px" class="ml-auto mr-5 bg-red my-2 mb-5" text="Удалить"
                                @click="store.dialog = true"></v-btn>
                        </v-card>
                    </template>
                </v-dialog>
            </div>
            <v-dialog v-model="store.dialog" max-width="300">
                <v-card title="Удалить заметку?">
                    <v-card-actions>
                        <v-btn text="Да" class="bg-red" variant="text"
                            @click="() => { store.deleteNote(store.selectNote.ID) }"></v-btn>
                        <v-spacer></v-spacer>
                        <v-btn text="Нет" variant="text" @click="store.dialog = false"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-divider></v-divider>
        </v-container>
    </div>
</template>

<script setup>
import { useStoreRecipies } from '../stores/storeRecipies'
import { ref, onMounted } from 'vue'
import { useUser } from "../stores/user";
const userStore = useUser();
onMounted(() => {
    store.getNotes
})
const store = useStoreRecipies();
const forma = ref(null)
const title = ref("")
const subTitle = ref("")
let valid = ref(false)
const vform2 = ref([])
const rules = ref({required: value => !!value || 'Необходимо заполнить поле!',})
function postNote() {
    if(valid) {
    fetch('https://script.google.com/macros/s/AKfycbwf7Ty0tbwPJJbm3gb9FRW0wk0kMRoyqCNeK9xMB9n4a0pfWktu3eiWnbB2dzeLHrcO/exec', {
        method: "POST",
        body: new FormData(forma.value),
    }).then((response) => {
        if (response.status == 200) {
            vform2.value.reset()
            store.getNotes()
            alert("Заметка добавлена")
        }
    })
}
}
</script>