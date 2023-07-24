"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ThongBao extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ThongBao.init(
        {
            ma_tb: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            tieu_de: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            noi_dung: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            thoi_gian: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            nguoi_dang: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: "ThongBao",
            tableName: "ThongBao",
        }
    );
    return ThongBao;
};
