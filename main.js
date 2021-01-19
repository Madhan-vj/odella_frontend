import {fetchModuleData} from './module.js';
import {fetchCategoryData} from './module.js';

const moduleSelectTag = document.querySelector('#module');
const categorySelectTag = document.querySelector('#category');
const submitBtnTag = document.querySelector('.submit-btn');

let moduleData;
let categoryData;
const initializer = async () => {
    moduleData = await fetchModuleData();
    moduleData = await moduleData.module;
    categoryData = await fetchCategoryData();
    categoryData = await categoryData.category
}

initializer().then(()=>{
    let Moduletemplate;
    let Categorytemplate;
    moduleData.forEach(module => {
        Moduletemplate += `
            <option value="${module.id}">
                ${module.name}
            </option>
        `
    })
    moduleSelectTag.innerHTML = Moduletemplate;

    categoryData.forEach(category => {
        Categorytemplate += `
            <option value="${category.id}">
                ${category.name}
            </option>
        `
    })
    categorySelectTag.innerHTML = Categorytemplate;


    submitBtnTag.addEventListener('click',Form_data)
});

function Form_data(){
const Title = document.getElementById('name').value;
const moduleId = document.getElementById('module').value;
const categoryId = document.getElementById('category').value;
const locationName = document.getElementById('locationName').value;
const trainer = document.getElementById('trainer').value;
const Schedule = document.getElementById('Schedule').value;
const DocumentName = document.getElementById('DocumentName').value;
const Description = document.getElementById('Description').value;
const trainingPrice1 = document.getElementById('trainingPrice1').value;
const trainingTax1 = document.getElementById('trainingTax1').value;
const trainingOffer1 = document.getElementById('trainingOffer1').value;
const trainingDiscount1 = document.getElementById('trainingDiscount1').value;

const data = {
    name: Title,
    moduleId: moduleId,
    categoryId: categoryId,
    locationName: locationName,
    trainer: trainer,
    Schedule: Schedule,
    DocumentName: DocumentName,
    trainingDescription: Description,
    trainingPrice: trainingPrice1,
    trainingTax: trainingTax1,
    trainingOffer: trainingOffer1,
    trainingDiscount: trainingDiscount1
    }
    console.log(data,'DATA');
}