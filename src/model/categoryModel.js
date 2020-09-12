import Sequelize from 'sequelize';
import DbConfig from '../../src/db/dbConfig'

/**
 * category テーブルの Entity モデル
 */
const categoryModel = DbConfig.define('category', {
  category_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    comment: "カテゴリーID"
  },
  category_nm: {
    type: Sequelize.STRING,
    allowNull:false,
    comment: "カテゴリー名"
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull:false,
    comment: "ユーザーID"
  }
}, {
  freezeTableName: true,
});

categoryModel.sync();
export default categoryModel;