/*
*home
* */
import express from 'express';
import Record from "../database/schema/record";
import moment from "moment";

const router = express.Router();
// 饼图数据
router.get('/chart', async (req, res, next) => {
    const {date} = req.query;
    const d = moment(date).add(1, 'month');
    const result = await Record.find({opertionType: 0, Created: {$gte: new Date(date), $lt: new Date(d)}}).exec();
    const aggre = await Record.find({opertionType: 1, Created: {$gte: new Date(date), $lt: new Date(d)}}).exec();
    let food = 0;
    let shopping = 0;
    let traffic = 0;
    let doctor = 0;
    let play = 0;
    let live = 0;
    let edu = 0;
    let human = 0;
    let huabei = 0;
    let snacks = 0;
    let other = 0;
    result.filter(item => item.payType === '餐饮').forEach(item => {
        food += item.payNumber
    });
    result.filter(item => item.payType === '购物').forEach(item => {
        shopping += item.payNumber
    });
    result.filter(item => item.payType === '交通').forEach(item => {
        traffic += item.payNumber
    });
    result.filter(item => item.payType === '医疗').forEach(item => {
        doctor += item.payNumber
    });
    result.filter(item => item.payType === '娱乐').forEach(item => {
        play += item.payNumber
    });
    result.filter(item => item.payType === '居住').forEach(item => {
        live += item.payNumber
    });
    result.filter(item => item.payType === '教育').forEach(item => {
        edu += item.payNumber
    });
    result.filter(item => item.payType === '人情').forEach(item => {
        human += item.payNumber
    });
    result.filter(item => item.payType === '花呗').forEach(item => {
        huabei += item.payNumber
    });
    result.filter(item => item.payType === '零食').forEach(item => {
        snacks += item.payNumber
    });
    result.filter(item => item.payType === '其他').forEach(item => {
        other += item.payNumber
    });
    const allType = [
        {
            name: '餐饮',
            value: food
        }, {
            name: '购物',
            value: shopping

        }, {
            name: '交通',
            value: traffic
        }, {
            name: '医疗',
            value: doctor
        }, {
            name: '娱乐',
            value: play
        }, {
            name: '居住',
            value: live
        }, {
            name: '教育',
            value: edu
        }, {
            name: '人情',
            value: human
        }, {
            name: '花呗',
            value: huabei
        }, {
            name: '零食',
            value: snacks
        }, {
            name: '其他',
            value: other
        }
    ]
    let inCome = 0;
    result.forEach(item => {
        inCome += item.payNumber;
    });
    let aggreTotla = 0;
    aggre.forEach(item => {
        aggreTotla += item.payNumber;
    });
    res.send({errCode: 0, data: allType, inCome, aggre: aggreTotla});
})
;

export default router;
