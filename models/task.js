'use strict';

module.exports = function(sequelize, DataTypes) {
	var Task = sequelize.define('task', {
		title: DataTypes.STRING
	}, {
		paranoid: true, // deletedAtを設定する
		underscored: true, // アンダースコアをつける ex) updatedAt -> updated_at
		classMethods: {
			associate: function(models) {
				Task.belongsTo(models.user, {
					onDelete: 'CASCADE',
					foreignKey: {
            			allowNull: false
          			}
				});
			}
		}
	});

	return Task;
}