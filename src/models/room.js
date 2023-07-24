"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Phong extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Phong.init(
        {
            ma_phong: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            ten_phong: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            loai: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            suc_chua: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            toa_nha: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            gia_tien: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: "Phong",
            tableName: "Phong",
        }
    );
    return Phong;
};
