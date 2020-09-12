import Db from '../../src/db/dbConfig';
import MemoModel from '../../src/model/memoModel.js';
import DiaryConst from '../../src/util/DiaryConst.js';
import Util from '../../src/util/Util.js';

export default (req, res) => {
    if (req.method === DiaryConst.HTTP_METHOD.GET) {
        getMemo(req, res);
    } else if (req.method === DiaryConst.HTTP_METHOD.POST) {
        insertMemo(req, res);
    } else if (req.method === DiaryConst.HTTP_METHOD.PUT) {
        updateMemo(req, res);
    } else if (req.method === DiaryConst.HTTP_METHOD.DELETE) {
        deleteMemo(req, res);
    }
}

//取得
const getMemo = (req, res) => {
    MemoModel
    .findAll({
        where:{user_id : req.query.user_id}
    })
    .then(function(memo) {
        res.json(memo);
    }).catch(function(err) {
        res.send(err);
    });
};

//登録
const insertMemo = (req, res) => {
    getMaxMemoId()
    .then(function(row) {
        return row.max_memo_id
    })
    .then(function(value) {
        var values = Util.getMapByList(req.query, Object.keys(MemoModel.rawAttributes));
        values.["memo_id"] = value;
        MemoModel
        .create(values)
        .then(function(values) {
            res.json(values);
        }).catch(function(err) {
            res.send(err);
        });
    })
    .catch(function(err) {
        res.send(err);
    })
};

//更新
const updateMemo = (req, res) => {
    MemoModel
    .update(Util.getMapByList(req.query, MemoModel.getFields()), {
        where : {memo_id : req.query.memo_id}
    })
    .then(function() {
        MemoModel.findAll({
            where:{memo_id : req.query.memo_id}
        }).then(function(values) {
            res.json(values);
        }).catch(function(err) {
            res.send(err);
        })
    }).catch(function(err) {
        res.send(err);
    })
};

//削除
const deleteMemo = (req, res) => {
    MemoModel
    .destroy({
        where: {memo_id:req.query.memo_id}
    })
    .then(function() {
        res.json();
    }).catch(function(err) {
        res.send(err);
    })
};

function getMaxMemoId() {
    return Db.query(`
        SELECT COALESCE(MAX(memo_id),0) + 1 AS max_memo_id
        FROM memo`, {
            plain : true,
            raw   : true,
            type  : Db.QueryTypes.SELECT
        }
    );
}