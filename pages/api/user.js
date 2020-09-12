import Db from '../../src/db/dbConfig';
import UserModel from '../../src/model/userModel.js';
import DiaryConst from '../../src/util/DiaryConst.js';

export default (req, res) => {
    if (req.method === DiaryConst.HTTP_METHOD.GET) {
        getUser(req, res);
    } else if (req.method === DiaryConst.HTTP_METHOD.POST) {
        insertUser(req, res);
    } else if (req.method === DiaryConst.HTTP_METHOD.PUT) {
        updateUser(req, res);
    } else if (req.method === DiaryConst.HTTP_METHOD.DELETE) {
        deleteUser(req, res);
    }
}

//取得
const getUser = (req, res) => {
    UserModel
    .findAll({
        where:{user_id : req.query.user_id}
    })
    .then(function(user) {
        res.json(user);
    }).catch(function(err) {
        res.send(err);
    });
};

//登録
const insertUser = (req, res) => {
    getMaxUserId()
    .then(function(row) {
        return row.max_user_id
    })
    .then(function(value) {
        UserModel
        .create({
            user_id : value,
            user_nm    : req.query.user_nm}
            )
        .then(function(user) {
            res.json(user);
        }).catch(function(err) {
            res.send(err);
        });
    })
    .catch(function(err) {
        res.send(err);
    })
};

//更新
const updateUser = (req, res) => {
    UserModel
    .update({
        user_nm  : req.query.user_nm,
    }, {
        where : {user_id : req.query.user_id}
    })
    .then(function() {
        UserModel.findAll({
            where:{user_id : req.query.user_id}
        }).then(function(result) {
            res.json(result);
        }).catch(function(err) {
            res.send(err);
        })
    }).catch(function(err) {
        res.send(err);
    })
};

//削除
const deleteUser = (req, res) => {
    UserModel
    .destroy({
        where: {user_id:req.query.user_id}
    })
    .then(function() {
        res.json();
    }).catch(function(err) {
        res.send(err);
    })
};

function getMaxUserId() {
    return Db.query(`
        SELECT COALESCE(MAX(user_id),0) + 1 AS max_user_id
        FROM users`, {
            plain : true,
            raw   : true,
            type  : Db.QueryTypes.SELECT
        }
    );
}