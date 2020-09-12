import Sequelize from 'sequelize';
import DbConfig from '../db/dbConfig'

/**
 * user テーブルの Entity モデル
 */
const userModel = DbConfig.define('user', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    comment: "ユーザーID",
  },
  user_nm: {
    type: Sequelize.STRING,
    allowNull:false,
    comment: "ユーザー名",
  },
});

userModel.sync();
export default userModel;