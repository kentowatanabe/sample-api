'use strict';

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('user', {
		name: DataTypes.STRING,
	}, {
		classMethods: {
			associate: function(models) {
        		User.hasMany(models.task)
      		}
      	},
		paranoid: true, // deletedAtを設定する
		underscored: true, // アンダースコアをつける ex) updatedAt -> updated_at
	});

	return User;
}