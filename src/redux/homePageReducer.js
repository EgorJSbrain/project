let initialState = { 
        banner: {
            imgUrl: "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2019/02/mainbanner_s9_samuel1.jpg?resize=1500%2C0&quality=82&strip=all&ssl=1"
        },
        popularProducts: [
            {
                id: 1,
                img: 'https://content2.onliner.by/catalog/device/header/f05ace8977f07aff539fb4421bc896b2.jpeg',
                title: 'Honor'
            },
            {
                id: 2,
                img: 'https://content2.onliner.by/catalog/device/header/7b809895488980811292228b9885292c.jpeg',
                title: 'Xiaomi'
            },
            {
                id: 3,
                img: 'https://content2.onliner.by/catalog/device/header/e62bf283f99f7d3539eac6ab4e859d11.jpeg',
                title: 'Huawei'
            },
            {
                id: 4,
                img: 'https://content2.onliner.by/catalog/device/header/a83458571f2c39fc9c435bd1116b4876.jpeg',
                title: 'Iphone'
            }
        ]
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MD/HOME_PAGE/':
            {
                
            };
            break
        default:
            return state;
    }
};

export default homePageReducer;