import mongoose from "mongoose"

const apartmentSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
        max: 100,
        min: 3,
    },
    description: {
        type:String,
        required: true,
        max: 1000,
        min: 3,
    },
    address: {
        street: {
            type:String,
            required: true,
        },
        city: {
            type:String,
            required: true,
        },
        state: {
            type:String,
            required: true,
        },
        postalCode: {
            type:String,
            required: true,
        }
    },
    price: {
        type:Number,
        required: true,
    },
    area: {
        type:Number,
        required: true,
    },
    bedrooms: {
        type:Number,
        required: true,
    },
    bathrooms: {
        type:Number,
        required: true,
    },
    floor: {
        type:Number,
        required: true,
    },
    buildingName: {
        type:String,
        required: true,
    },
    yearBuilt: {
        type:Number,
        required: true,
    },
    condition: {
        type:String,
        required: true,
    },
    image: {
        type:String,
        required: true,
    },
    contactInfo: {
        name: {
            type:String,
            required: true,
        },
        email: {
            type:String,
            required: true,
        },
        phone: {
            type:String,
            required: true,
        }
    }
})
const Apartment = mongoose.model("Apartment", apartmentSchema);

export default Apartment;
