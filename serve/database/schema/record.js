import mongoose from "mongoose";

const Schema = mongoose.Schema;
const RecordSchema = new Schema({
        UserId: {
            type: String,
            default: ''
        },
        opertionType: {
            type: Number,
            default: 0
        },
        payNumber: {
            type: Number,
            default: 0
        },
        payMethod: {
            type: String,
            default: '',
        },
        payType: {
            type: String,
            default: ''
        },
        reMark: {
            type: String,
            default: ''
        },
        updated: {
            type: Date,
            default:
                Date.now()
        },
        Created: {
            type: Date,
            default:
                Date.now()
        }
    })
;
const Record = mongoose.model('Record', RecordSchema);
export default Record;
