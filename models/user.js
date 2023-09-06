import { Schema, model } from 'mongoose'


const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is mandatory']
    },
    email: {
        type: String,
        required: [true, 'Email is mandatory'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is mandatory'],
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        required: [true, 'Role is mandatory'],
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    active: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
})

module.exports = model('Users', UserSchema);