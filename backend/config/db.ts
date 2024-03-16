import mongoose from "mongoose"
import Apartment from "../src/models/apartmentModel";

// dotenv.config()

export const connectDB = async () => {
    try {
        const dbUri = process.env.MONGO_URI;
        if (dbUri)
            mongoose.connect(dbUri)
        const db = mongoose.connection;

        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        db.once('open', () => {
            console.log('Connected to MongoDB database successfully!');
        });

        db.on('disconnected', () => {
            console.log('MongoDB connection disconnected');
        });

        db.on('reconnected', () => {
            console.log('MongoDB connection reconnected');
        });
    } catch (err) {
        console.log(err);
    }
}

export const seedDB = async () => {
    try {
        const seedApartments = [
            {
                title: "super duplex apartment",
                description: "sha2a gamda awy el7a2 now",
                address: {
                    street: "2A",
                    city: "Nasr city",
                    state: "Egypt",
                    postalCode: 25567
                },
                price: 3000000,
                area: 175,
                bedrooms: 3,
                bathrooms: 2,
                floor: 6,
                buildingName: "lotus",
                yearBuilt: 2000,
                condition: "new",
                "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
                "contactInfo": {
                    "name": "Yasser Nasser",
                    "email": "yassernasser200@gmail.com",
                    "phone": "01142267889"
                }
            },
            {
                title: "super duplex villa",
                description: "sha2a gamda awy el7a2 now",
                address: {
                    street: "2A",
                    city: "sheikh zayed",
                    state: "Egypt",
                    postalCode: 25567
                },
                price: 6000000,
                area: 175,
                bedrooms: 3,
                bathrooms: 2,
                floor: 0,
                buildingName: "sunset",
                yearBuilt: 2000,
                condition: "used",
                "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
                "contactInfo": {
                    "name": "Hassan Fathi",
                    "email": "HasssanFathi200@gmail.com",
                    "phone": "01066767889"
                }
            },
            {
                title: "super duplex apartment",
                description: "sha2a gamda awy el7a2 now",
                address: {
                    street: "2A",
                    city: "Maadi",
                    state: "Egypt",
                    postalCode: 25567
                },
                price: 2500000,
                area: 175,
                bedrooms: 3,
                bathrooms: 2,
                floor: 6,
                buildingName: "icebox",
                yearBuilt: 2000,
                condition: "used",
                "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
                "contactInfo": {
                    "name": "Ahmed Gad",
                    "email": "ahmedgad200@gmail.com",
                    "phone": "01142267889"
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
                price: 2646000,
                area: 175,
                bedrooms: 3,
                bathrooms: 2,
                floor: 6,
                buildingName: "breeze",
                yearBuilt: 2000,
                condition: "used",
                "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
                "contactInfo": {
                    "name": "Amr Omar",
                    "email": "Amr Omar200@gmail.com",
                    "phone": "01142267889"
                }
            }
        ];
        const documents = await Apartment.countDocuments();
        if(documents==0){
            await Apartment.deleteMany({});
            await Apartment.insertMany(seedApartments);
        }
    }
    catch (err) {
        console.log(err);
    }   
}