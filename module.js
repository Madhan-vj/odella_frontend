import {BASE_URL} from './constants.js';

export const fetchModuleData = async () => {
    const response = await fetch(`${BASE_URL}/module`);
    return response.json();
}
export const fetchCategoryData = async () => {
    const response = await fetch(`${BASE_URL}/category`);
    return response.json();
}