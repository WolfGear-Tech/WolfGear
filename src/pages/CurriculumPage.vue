<template>
    <q-page class="q-pa-lg bg-grey-3 flex justify-center">
        <div>
            <div class="flex justify-between">
                <p>Last Update: {{ curriculumData.lastUpdate }}</p>
                <button @click="exportToPDF">Export to PDF</button>
            </div>
            <div id="curriculum" class="row page" style="max-width: 210mm; min-height: 296.5mm">
                <q-list class="col-3 bg-orange-4 text-white"  style="min-width: 315px">
                    <q-item class="flex flex-center">
                        <q-avatar size="200px">
                            <q-img src="~assets/img/avatar.png"/>
                        </q-avatar>
                    </q-item>
                    <q-item>
                        <q-item-section>
                            <q-item-label class="text-h5">Sobre</q-item-label>
                            <q-separator style="width: 80px; margin-bottom: 1rem;"/>
                            <q-item-label class="text-body2">{{ curriculumData.about }}</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item class="col" v-for="info in curriculumData.personalInfo" :key="info">
                        <q-item-section>
                            <q-item-label class="text-h5">{{info.label}}</q-item-label>
                            <q-separator style="width: 150px; margin-bottom: 5px;"/>
                            <q-item v-for="item in info.itens" :key="item" class="q-pa-none" dense>
                                <q-item-section avatar class="items-center justify-center">
                                    <q-icon v-if="!item.level" :name="item.icon || curriculumData.icon" :size="item.icon ? 'sm' : '8px'" />
                                    <div  v-if="item.level" class="row">
                                        <div v-for="level in item.level" :key="level">
                                            <q-icon :name="curriculumData.icon" />
                                        </div>
                                        <div v-for="level in (4 - item.level)" :key="level">
                                            <q-icon :name="curriculumData.icon" color="grey-4" />
                                        </div>
                                    </div>
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>{{item.description}}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-item-section>
                    </q-item>
                </q-list>
                <q-list class="col bg-white text-orange-4" style="min-width: 315px">
                    <q-item>
                        <q-item-section class="text-center">
                            <q-item-label class="text-h2">{{ curriculumData.name }}</q-item-label>
                            <q-separator size="3px" style="width: 100px" />
                            <q-item-label class="text-h4 text-grey-6">{{ curriculumData.occupation }}</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item class="col" v-for="info in curriculumData.experiencesList" :key="info">
                        <q-item-section>
                            <q-item-label class="text-h5">{{info.label}}</q-item-label>
                            <q-item v-for="item in info.itens" :key="item" class="q-pa-none items-center" dense>
                                <q-icon :name="curriculumData.icon" size="8px"/>
                                <q-item-section class="q-py-sm">
                                    <q-item-label class="q-pl-sm text-grey-8">{{item.label}}</q-item-label>
                                    <q-item-label class="q-pl-md text-grey-5">{{item.description1}}</q-item-label>
                                    <q-item-label class="q-pl-md text-grey-5">{{item.description2}}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import html2pdf from "html2pdf.js";
import curriculumData from '../assets/data/curriculumData.json'

export default defineComponent({
    name: 'CurriculumPage',
    data() {
        return {
            curriculumData
        }
    },
    methods: {
		exportToPDF() {
            const filename = this.curriculumData.name.replace(" ","_") + "-curriculum.pdf";
            html2pdf(
                    document.getElementById('curriculum'),
                    {
                        filename: filename,
                    }
                );
		},
	},
})
</script>