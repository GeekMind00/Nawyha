const connectDB = require("./backend/config/db.ts")
const Apartment = require('./src/backend/models/apartmentModel')
const mongoose = require('mongoose') 

connectDB()

const seedApartments = [
    {
        title: "super duplex apartment",
        description: "sha2a gamda awy el7a2 now",
        address: {
            street: "2A",
            city: "sheikh zayed",
            state: "Egypt",
            postalCode: 25567
        },
        price: 2000000,
        area: 175,
        bedrooms: 3,
        bathrooms: 2,
        floor: 6,
        buildingName: "lotus",
        yearBuilt: 2000,
        condition: "used",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
        "contactInfo": {
            "name": "Yasser Nasser",
            "email": "yassernasser200@gmail.com",
            "phone": "55555555555"
        }
    },
    {
        title: "super duplex apartment",
        description: "sha2a gamda awy el7a2 now",
        address: {
            street: "2A",
            city: "sheikh zayed",
            state: "Egypt",
            postalCode: 25567
        },
        price: 2000000,
        area: 175,
        bedrooms: 3,
        bathrooms: 2,
        floor: 6,
        buildingName: "lotus",
        yearBuilt: 2000,
        condition: "used",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
        "contactInfo": {
            "name": "Yasser Nasser",
            "email": "yassernasser200@gmail.com",
            "phone": "01142238534"
        }
    },
    {
        title: "super duplex apartment",
        description: "sha2a gamda awy el7a2 now",
        address: {
            street: "2A",
            city: "sheikh zayed",
            state: "Egypt",
            postalCode: 25567
        },
        price: 2000000,
        area: 175,
        bedrooms: 3,
        bathrooms: 2,
        floor: 6,
        buildingName: "lotus",
        yearBuilt: 2000,
        condition: "used",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
        "contactInfo": {
            "name": "Yasser Nasser",
            "email": "yassernasser200@gmail.com",
            "phone": "01142238534"
        }
    },
    {
        title: "super duplex apartment",
        description: "sha2a gamda awy el7a2 now",
        address: {
            street: "2A",
            city: "sheikh zayed",
            state: "Egypt",
            postalCode: 25567
        },
        price: 2000000,
        area: 175,
        bedrooms: 3,
        bathrooms: 2,
        floor: 6,
        buildingName: "lotus",
        yearBuilt: 2000,
        condition: "used",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
        "contactInfo": {
            "name": "Yasser Nasser",
            "email": "yassernasser200@gmail.com",
            "phone": "01142238534"
        }
    }
];

const seedDB = async() => {
    await Apartment.deleteMany({});
    await Apartment.insertMany({});
};

seedDB().then(()=>{
    mongoose.connection.close();
})