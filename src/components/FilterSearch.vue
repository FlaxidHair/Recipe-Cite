<template>
    <v-dialog max-width="800">
        <template v-slot:activator="{ props: activatorProps }">
            <div class="d-flex ga-5 flex-wrap justify-center">
                <div v-for="recipe in store.getterShow" :key="recipe" class="d-flex w-25 ga-5 mb-7">
                    <v-hover v-slot="{ isHovering, props }" open-delay="50">
                        <div @click="() => {
                            store.selectRecipe = recipe;
                            store.dialogRecipe = true;
                            store.stat = recipe.Favorite
                        }
                            " :item="recipe" class="w-100 cursor-pointer d-flex" v-bind="activatorProps">
                            <v-card class="d-flex flex-column align-center" height="600" :class="(isHovering, props)"
                                v-bind="props" :elevation="isHovering ? 8 : 2">
                                <v-card-title class="mr-auto ml-auto d-flex">{{
                                    recipe.Name
                                    }}
                                    <v-icon color="yellow-darken-1 ml-2 align-self-center">{{
                                        store.showFavoriteStatus(recipe.Favorite) }}</v-icon></v-card-title>
                                <div class="d-flex w-100 justify-center">
                                    <div class="border-thin ml-1 pa-1 align-self-center">
                                        {{ recipe.Category }}
                                    </div>
                                    <v-card-subtitle class="w-50 pa-1 align-self-center">{{
                                        recipe.Ingridients
                                        }}</v-card-subtitle>
                                    <div class="border-thin mr-1 pa-1 align-self-center">
                                        {{ recipe.Time }}
                                    </div>
                                </div>
                                <v-card-text class="h-25 text-caption">{{
                                    recipe.Description
                                    }}</v-card-text>
                                <img :src="recipe.Image" class="w-100 h-50" alt="Тут могло быть изображения еды" />
                            </v-card>
                        </div>
                    </v-hover>
                </div>
            </div>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card v-show="store.dialog" class="d-flex flex-column">
                <div class="d-flex mt-1">
                    <v-card-title class="d-flex ">
                        <div class="d-flex border-thin pa-2">
                            <h4 class="">{{ store.selectRecipe.Name }}</h4>
                        </div>
                        <v-btn width="150px" class="ml-5 mt-3 bg-red" :disabled="!userStore.isLogin ? true : false" text="Удалить"
                            @click="store.dialog = true"></v-btn>
                        <v-btn
                        :disabled="!userStore.isLogin ? true : false"
                            @click="() => { store.patchFavoriteStatus(); store.selectRecipe.Favorite = !store.selectRecipe.Favorite }"
                            class="ml-5 align-self-end elevation-0 border-thin" width="40px" height="40px"
                            icon=""><v-icon
                                color="yellow-darken-1">{{ store.showFavoriteStatus(store.selectRecipe.Favorite)
                                }}</v-icon></v-btn>
                    </v-card-title>
                    <v-card-actions class="ml-auto mr-2">
                        <v-spacer></v-spacer>
                        <v-btn text="Закрыть" @click="isActive.value = false"></v-btn>
                    </v-card-actions>
                </div>
                <div class="d-flex">
                    <div class="d-flex mt-5">
                        <h4 class="ml-5 align-self-center">Категория:</h4>
                        <v-card-text class="border-thin py-2 px-1 ml-1">
                            {{ store.selectRecipe.Category }}</v-card-text>

                    </div>
                    <div class="ml-auto d-flex border-thin py-1 px-1 mr-5">
                        <h4 class="align-self-center mr-1">Время:</h4>
                        <v-card-subtitle class="ma-0 pa-0 align-self-center">
                            {{ store.selectRecipe.Time }}</v-card-subtitle>
                    </div>
                </div>
                <h4 class="ml-5 mt-5">Ингридиенты</h4>
                <v-card-text>{{ store.selectRecipe.Ingridients }}</v-card-text>
                <h4 class="ml-5">Описание</h4>
                <v-card-text>{{ store.selectRecipe.Description }}</v-card-text>
                <img :src="store.selectRecipe.Image" alt="Изображение блюда" />
            </v-card>
        </template>
    </v-dialog>
    <v-dialog v-model="store.dialog" max-width="300">
        <v-card title="Удалить рецепт?">
            <v-card-actions>
                <v-btn text="Да" class="bg-red" variant="text" @click="() => {
                    store.deleteRecipe(store.selectRecipe.ID);
                }
                    "></v-btn>
                <v-spacer></v-spacer>
                <v-btn text="Нет" variant="text" @click="store.dialog = false"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-divider></v-divider>
</template>

<script setup>
import { useStoreRecipies } from "../stores/storeRecipies";
import { useUser } from "../stores/user";
const userStore = useUser();
const store = useStoreRecipies();
</script>
