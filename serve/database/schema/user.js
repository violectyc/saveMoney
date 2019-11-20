import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
        UserName: {
            unique: true,
            type: String,
            default: ''
        },
        NickName: {
            type: String,
            default: 'violet'
        },
        Password: {
            type: String,
            default: '123456'
        },
        Email: {
            type: String,
            default: ''
        },
        ActiveEmail: {
            type: Number,
            default: 1
        },
        Avatar: {
            type: String,
            default: 'images/avatar.jpeg'
        },
        Description: {
            type: String,
            default: '好久不见'
        }
        ,
        Created: {
            type: Date,
            default:
                Date.now()
        }
        ,
        Updated: {
            type: Date,
            default:
                Date.now()
        }
    })
;
const User = mongoose.model('User', UserSchema);
export default User;
