import express from 'express'
import md5 from 'md5'
import jwt from 'jsonwebtoken'
import config from '../config'
import User from "../database/schema/user";

const router = express.Router();

router.post('/register', async (req, res, next) => {
    try {
        const {name, password} = req.body;
        const dupUserName = await User.findOne({UserName: name}).exec();
        if (!dupUserName) {
            const Model = new User({UserName: name, Password: md5(password)});
            await Model.save().then(d => {
                const token = jwt.sign({
                    exp: Date.now() / 1000 + (60 * 60),
                    data: [name, d['_id']]
                }, config.key);
                d['Avatar'] = `${config.baseUrl}/${d['Avatar']}`;
                res.send({
                    errCode: 0,
                    token: token,
                    data: d,
                    msg: '注册成功'
                });
            }).catch(err => {
                console.log(err);
            });
        } else {
            res.send({
                errCode: 1,
                data: {},
                msg: '用户名已存在'
            })
        }
    } catch (e) {
        res.send({
            errCode: 1,
            data: {},
            msg: '服务异常'
        })
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const {name, password} = req.body;
        const result = await User.findOne({UserName: name}).exec();
        if (result) {
            const isP = result.Password === md5(password);
            if (isP) {
                const token = jwt.sign({
                    exp: Date.now() / 1000 + (60 * 60),
                    data: [name, result['_id']]
                }, config.key);
                result['Avatar'] = `${config.baseUrl}/${result['Avatar']}`;
                res.send({
                    errCode: 0,
                    token: token,
                    data: result,
                    msg: '登陆成功'
                });
            } else {
                res.send({
                    errCode: 1,
                    data: {},
                    msg: '密码不正确，请重新输入'
                });
            }
        } else {
            res.send({
                errCode: 1,
                data: {},
                msg: '用户名不存在'
            });
        }
    } catch (e) {
        res.send({
            errCode: 1,
            data: {},
            msg: '服务异常'
        });
    }
});

export default router;
