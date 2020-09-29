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
    allowNull:true,
    comment: "ユーザー名",
  },
  sub_id: {
    type: Sequelize.STRING,
    unique: true,
    comment: "サブID(Auth0で一意のキー)",
  }
});

userModel.sync();
export default userModel;