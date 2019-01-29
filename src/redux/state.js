const store = {
    state: {
        homePage: {
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
        },
        catalogPage: {
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
            ]
        },
        productPage: {
           product: {
               title: 'Смартфон Samsung Galaxy S8',
               imgUrl: 'https://content2.onliner.by/catalog/device/header/272d80e5c1b51824c5034a0dffb29254.jpeg',
               discription: 'Android, экран 5.8" AMOLED (1440x2960), Exynos 8895, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты памяти, камера 12 Мп, аккумулятор 3000 мАч, 2 SIM, цвет черный'
             },
            comments: [
                "Телефон не работает",
                "АААААААААААА"
            ]
        }
    }
}

export default store;