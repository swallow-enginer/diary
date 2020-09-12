import Db from '../../src/db/dbConfig';
import CategoryModel from '../../src/model/categoryModel.js';
import DiaryConst from '../../src/util/DiaryConst.js';

export default (req, res) => {
    if (req.method === DiaryConst.HTTP_METHOD.GET) {
        getCategory(req, res);
    } else if (req.method === DiaryConst.HTTP_METHOD.POST) {
        insertCategory(req, res);
    } else if (req.method === DiaryConst.HTTP_METHOD.PUT) {
        updateCategory(req, res);
    } else if (req.method === DiaryConst.HTTP_METHOD.DELETE) {
        deleteCategory(req, res);
    }
}

//取得
const getCategory = (req, res) => {
    CategoryModel
    .findAll({
        where : {user_id : req.query.user_id}
    })
    .then(function(category) {
        res.json(category);
    }).catch(function(err) {
        res.send(err);
    });
};

//登録
const insertCategory = (req, res) => {
    getMaxCategoryId()
    .then(function(row) {
        return row.max_category_id
    })
    .then(function(value) {
        CategoryModel
        .create({
            category_id      : value,
            user_nm          : req.query.user_nm,
            user_id          : req.query.user_id }
            )
        .then(function(category) {
            res.json(category);
            // res.json(category);
        }).catch(function(err) {
            res.send(err);
        });
    })
    .catch(function(err) {
        res.send(err);
    })
};

//更新
const updateCategory = (req, res) => {
    CategoryModel
        .update({
            user_nm  : req.query.user_nm,
        }, {
            where : 
                {category_id : req.query.category_id}
        })
        .then(function(result) {
            res.json(result);
        }).catch(function(err) {
            res.send(err);
        })
};

//削除
const deleteCategory = (req, res) => {
    CategoryModel
    .destroy({
        where: {category_id:req.query.category_id}
    })
    .then(function() {
        res.json();
    }).catch(function(err) {
        res.send(err);
    })
};

function getMaxCategoryId() {
    return Db.query(`
        SELECT COALESCE(MAX(category_id),0) + 1 AS max_category_id
        FROM category`, {
            plain : true,
            raw   : true,
            type  : Db.QueryTypes.SELECT
        }
    );
}