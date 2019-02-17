const ADD_COMMENT = 'DM/PRODUCT_PAGE/ADD_COMMENT'
let initialState = { 
    product: {
        title: 'Смартфон Samsung Galaxy S8',
        imgUrl: 'https://content2.onliner.by/catalog/device/header/272d80e5c1b51824c5034a0dffb29254.jpeg',
        discription: 'Android, экран 5.8" AMOLED (1440x2960), Exynos 8895, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 12 Мп, аккумулятор 3000 мАч, 2 SIM, цвет черный'
  },
    comments: [
        { 
            id: 1,
            text: "Телефон не работает" 
        },
        { 
            id: 2,
            text: "Отличный телефон! Пользуюсь с удовольствием" 
        },
        { 
            id: 3,
            text: "Отличная покупка! не могу нарадоваться", 
        },
        { 
            id: 4,
            text: "ААА супер телефон!!"
        },    
    ]
};


const productPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            {
                let newComment = {
                    id: 5,
                    text: action.text
                }

                state.comments.push(newComment);
                return state;
            };
        default:
            return state;
    }
};

export const addCommentActionCreator = (commentText) => {
    return {
        type: ADD_COMMENT, 
        text: commentText
    };
};

export default productPageReducer;