import express from 'express';
import Record from "../database/schema/record";

const router = express.Router();

router.post('/add', async (req, res, next) => {
    try {
        const {tmp} = req.body;
        console.log(Record);
        const Model = new Record(tmp);
        await Model.save().then(d => {
            res.send({
                errCode: 0,
                msg: '操作成功'
            });
        })
    } catch (e) {
        res.send({
            errCode: -1,
            msg: '添加失败请重试'
        })
    }

});

router.post('/getRecordList', async (req, res, next) => {
    try {
        const result = await Record.find().sort({Created: -1}).exec();
        res.send({
            errCode: 0,
            msg: '',
            data: result
        })
    } catch (e) {
        res.send({
            errCode: -1,
            msg: '获取数据失败请重试'
        })
    }
});

router.post('/deleteOneById', async (req, res, next) => {
    try {
        const {id} = req.body;
        const result = await Record.findOneAndDelete({_id: id}).exec();
        res.send({
            errCode: 0,
            msg: '操作成功',
            data: result
        })
    } catch (e) {
        console.log(e);
        res.send({
            errCode: -1,
            msg: '操作失败请重试'
        })
    }
});

router.post('/editOneById', async (req, res, next) => {
    try {
        const {tmp} = req.body;
        const result = await Record.findOneAndUpdate({_id: tmp._id}, {$set: tmp}).exec();
        res.send({
            errCode: 0,
            msg: '操作成功',
            data: result
        })
    } catch (e) {
        res.send({
            errCode: -1,
            msg: '操作失败请重试'
        })
    }
});

export default router;
