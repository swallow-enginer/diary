import DiaryConst from "./DiaryConst.js";
import auth0 from "../lib/auth0.js"
import UserModel from '../model/userModel.js';
import Db from '../db/dbConfig.js';

class UtilServer {
  /**
   * ユーザー情報を取得
   * @param {String} sub auth0から渡されたサブ情報
   */
  static getUser = async (sub, req, res) => {
    if (req && res) {
      sub = await this.getSub(req, res);
    }

    const sub_id = sub.split("|")[1];
    let user = await this.getUserDb(sub_id);
    if (!user) {
      user = await this.getInsertUser(sub_id)
    }
    return user;
  }

  static getSub = async (req, res) => {
    const session = await auth0.getSession(req);
    if (!session || !session.user) {
      res.redirect(302, 'http://localhost:3000/api/login/login');
      res.end();
      return;
    }
    console.log(session)
    return session.user.sub;
  }

  /**
   * ユーザー情報の取得
   * @param {String} sub_id サブID
   */
  static getUserDb = async (sub_id) => {
    const user = await UserModel.findOne(
      {where: {
        sub_id : sub_id
    }});
    if (!user) {
      return;
    }
    return {
          user_id : user.user_id
          , user_name: user.user_nm
          , sub_id: sub_id
    };
  }
  
  /**
   * 登録したユーザー情報を取得
   * @param {String} sub_id サブID
   */
  static getInsertUser = async (sub_id) => {
    const ins_user_id = await this.getMaxUserId();
    await this.insertUser(ins_user_id, sub_id);
    return {
      user_id   : ins_user_id,
      user_nm : null,
      sub_id    : sub_id,
    }
  }

  /**
   * ユーザー情報の登録
   * @param {number} user_id ユーザーID
   * @param {String} sub_id  サブID
   */
  static insertUser = async (user_id, sub_id) => {
    await UserModel.create({
            user_id   : user_id,
            sub_id    : sub_id
    });
  }

  /**
   * ユーザーIDの採番値を取得
   * @param {number} sub_id サブID
   */
  static getMaxUserId = async (sub_id) => {
    const result = await Db.query(`
        SELECT COALESCE(MAX(user_id),0) + 1 AS max_user_id
        FROM users`, {
            plain : true,
            raw   : true,
            type  : Db.QueryTypes.SELECT
        }
    );
    if (!result) {
      return;
    }
    return result.max_user_id;
  }
}

export default UtilServer;