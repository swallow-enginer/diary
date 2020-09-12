import Sequelize from 'sequelize';
import DbConfig from '../db/dbConfig'

const memoModel = DbConfig.define('memo', {
  memo_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    comment: "メモID"
  },
  memo: {
    type: Sequelize.TEXT,
    comment: "メモ"
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "ユーザーID"
  },
  category_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "カテゴリーID"
  },
  create_date: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.literal('current_date'),
    comment: "作成日"
  }
}, {
  freezeTableName: true,
});

memoModel.sync();
export default memoModel;