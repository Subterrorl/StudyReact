const testData = `[
    {
        "_id": 1020155,
        "title": "Headphones Wireless",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "oldPrice": 150,
        "price": 103.2,
        "brand": "next",
        "image": "https://i.ibb.co/zS3k6QB/headphone-1.webp",
        "isNew": true,
        "category": "Headphones"
    },
    {
        "_id": 2025454,
        "title": "Gaming Headphone",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "oldPrice": 300,
        "price": 270,
        "brand": "Techno",
        "image": "https://i.ibb.co/M6nVQ2v/headphone-5.webp",
        "isNew": true,
        "category": "Headphones"
    },
    {
        "_id": 305455,
        "title": "Headphone with Mic",
        "isNew": true,
        "oldPrice": 490,
        "price": 360,
        "description": "You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions.",
        "category": "Headphones",
        "image": "https://i.ibb.co/xDqmwGW/headphone-8.webp",
        "brand": "JBL"
    },
    {
        "_id": 405455,
        "title": "Galaxy Android Tablet",
        "isNew": true,
        "oldPrice": 380,
        "price": 340,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Mobile Tablets",
        "image": "https://i.ibb.co/RpnnGmx/mobile-1.webp",
        "brand": "Samsung"
    },
    {
        "_id": 505455,
        "title": "iPhone 14 Pro",
        "isNew": true,
        "oldPrice": 1399,
        "price": 1350,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Mobile Tablets",
        "image": "https://i.ibb.co/gmdpWtD/mobile-5.webp",
        "brand": "Apple"
    },
    {
        "_id": 605455,
        "title": "Apple iPad Air",
        "isNew": true,
        "oldPrice": 999,
        "price": 949.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Mobile Tablets",
        "image": "https://i.ibb.co/G9ttXCM/ipad-1.webp",
        "brand": "Apple"
    },
    {
        "_id": 705455,
        "title": "Sony Smart Watch",
        "isNew": true,
        "oldPrice": 299,
        "price": 189.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Smart Watch",
        "image": "https://i.ibb.co/sQmZc0x/watch-5.webp",
        "brand": "Sony"
    },
    {
        "_id": 805455,
        "title": "Sony Lady Fitness Watch",
        "isNew": true,
        "oldPrice": 199,
        "price": 169,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Smart Watc",
        "image": "https://i.ibb.co/w4K4TY2/watch-9.webp",
        "brand": "Sony"
    },
    {
        "_id": 905455,
        "title": "Apple Watch Sport Band",
        "isNew": true,
        "oldPrice": 470,
        "price": 399.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Smart Watch",
        "image": "https://i.ibb.co/xqQtGPr/watch-1.webp",
        "brand": "Apple"
    },
    {
        "_id": 1005455,
        "title": "Lenovo Wireless Bluetooth",
        "isNew": true,
        "oldPrice": 99.99,
        "price": 79.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Bluetooth",
        "image": "https://i.ibb.co/0XPd7D4/blutooth-4.webp",
        "brand": "Lenovo"
    },
    {
        "_id": 1105455,
        "title": "Lenovo Sports Bluetooth",
        "isNew": true,
        "oldPrice": 57,
        "price": 49,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Bluetooth",
        "image": "https://i.ibb.co/YNLw2QM/blutooth-1.webp",
        "brand": "Lenovo"
    },
    {
        "_id": 1205455,
        "title": "DeepCool Air Cooler",
        "isNew": true,
        "oldPrice": 130,
        "price": 110,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "CPU Heat Pipes",
        "image": "https://i.ibb.co/2d2qBRb/cpu-1.webp",
        "brand": "IBM"
    },
    {
        "_id": 1305455,
        "title": "Antec Air Cooler",
        "isNew": true,
        "oldPrice": 250,
        "price": 170,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "CPU Heat Pipes",
        "image": "https://i.ibb.co/yqndcgs/cpu-5.webp",
        "brand": "Microsoft"
    },
    {
        "_id": 1405455,
        "title": "Nike Retro GTS-2",
        "isNew": true,
        "oldPrice": 450,
        "price": 399.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Shoes",
        "image": "https://i.ibb.co/WFWKQWZ/shoes-1.webp",
        "brand": "Nike"
    },
    {
        "_id": 1505455,
        "title": "INIKA Mineral Sunkissed",
        "isNew": true,
        "oldPrice": 99,
        "price": 80,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Discover Skincare",
        "image": "https://i.ibb.co/PGRX8wM/powder-1.webp",
        "brand": "Inika"
    },
    {
        "_id": 1605455,
        "title": "Brand Cosmetic Product",
        "isNew": true,
        "oldPrice": 160,
        "price": 120,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Awesome Lip Care",
        "image": "https://i.ibb.co/qkspnNy/cosmetics-1.webp",
        "brand": "Iconic"
    },
    {
        "_id": 1705455,
        "title": "Fortuna Bangle Three-row",
        "isNew": true,
        "oldPrice": 600,
        "price": 499,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Bracelets",
        "image": "https://i.ibb.co/ThVqy07/bracelet-4.webp",
        "brand": "next"
    },
    {
        "_id": 1805455,
        "title": "Tea Tree Lemon For Fine Hair",
        "isNew": true,
        "oldPrice": 70,
        "price": 55,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Discover Skincare",
        "image": "https://i.ibb.co/998PPnW/cosmetics-4.webp",
        "brand": "Iconic"
    },
    {
        "_id": 1905455,
        "title": "Innisfree Face Wash",
        "isNew": true,
        "oldPrice": 130,
        "price": 99.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Awesome Lip Care",
        "image": "https://i.ibb.co/9n6f275/cream-1.webp",
        "brand": "Extras"
    },
    {
        "_id": 2005455,
        "title": "Fortuna Creole Hoop",
        "isNew": true,
        "oldPrice": 550,
        "price": 380,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
        "category": "Earrings",
        "image": "https://i.ibb.co/wNsPjhC/earring-8.webp",
        "brand": "Butterfly"
    }
]`;

var testDataObject = JSON.parse(testData);
export default testData ;
