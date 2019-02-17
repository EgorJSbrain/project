const ADD_PRODUCT = 'DM/CATALOG_PAGE/ADD_PRODUCT';
const ADD_TITLE = 'DM/CATALOG_PAGE/ADD_TITLE';
const ADD_URL_IMG = 'DM/CATALOG_PAGE/ADD_URL_IMG';
const ADD_DESCRIPTION = 'DM/CATALOG_PAGE/ADD_DESCRIPTION';

let initialState = { 
        products: [
            {
                id: 1,
                img: 'https://content2.onliner.by/catalog/device/header/f05ace8977f07aff539fb4421bc896b2.jpeg',
                title: 'Honor',
                shortDescription: 'Android, экран 5.84" IPS (1080x2280), HiSilicon Kirin 970, ОЗУ 4 ГБ, флэш-память 128 ГБ, камера 16 Мп, аккумулятор 3400 мАч, 2 SIM, цвет синий'
            },
            {
                id: 2,
                img: 'https://content2.onliner.by/catalog/device/header/7b809895488980811292228b9885292c.jpeg',
                title: 'Xiaomi',
                shortDescription: 'Android, экран 6.39" AMOLED (1080x2340), Qualcomm Snapdragon 845, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 3200 мАч, 2 SIM, цвет черный'
            },
            {
                id: 3,
                img: 'https://content2.onliner.by/catalog/device/header/e62bf283f99f7d3539eac6ab4e859d11.jpeg',
                title: 'Huawei',
                shortDescription: 'Android, экран 5.84" IPS (1080x2280), HiSilicon Kirin 659, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 16 Мп, аккумулятор 3000 мАч, 2 SIM, цвет черный'
            },
            {
                id: 4,
                img: 'https://content2.onliner.by/catalog/device/header/a83458571f2c39fc9c435bd1116b4876.jpeg',
                title: 'Iphone',
                shortDescription: 'Apple iOS, экран 5.8" AMOLED (1125x2436), Apple A11 Bionic, ОЗУ 3 ГБ, флэш-память 64 ГБ, камера 12 Мп, аккумулятор 2716 мАч, 1 SIM, цвет темно-серый'
            }

           
        ],
        newProduct: {
            id: 5,
            urlImg: '',
            title: '',
            shortDescription: ''
        }
};

const catalogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            {
                let copyOfObj = {...state.newProduct};
                state.products.push(copyOfObj);
                return state;        
            };
        break;
        case ADD_TITLE:
            {
                state.newProduct.title = action.title;
                return state;
            };
        break;
        case ADD_URL_IMG:
            {
                state.newProduct.urlImg = action.urlImg;
                return state;
            };
        break;
        case ADD_DESCRIPTION:
            {
                state.newProduct.shortDescription = action.shortDescription;
                return state;
            };

        default:
            return state;
    }
};




export const addProductActionCreater = () => {
    return {
        type: ADD_PRODUCT
    }
};

export const addTitleActionCreater = (titleProduct) => {
    return {
        type: ADD_TITLE,
        title: titleProduct
    }
};

export const addUrlImgActionCreater = (url) => {
    return {
        type: ADD_URL_IMG,
        urlImg: url
    }
};

export const addShortDescriptionActionCreater = (description) => {
    return {
        type: ADD_DESCRIPTION,
        shortDescription: description
    }
};



export default catalogPageReducer;