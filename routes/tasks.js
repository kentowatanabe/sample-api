var express = require('express');
var models = require('../models');

module.exports = {
	
	/**
	 * Create Object
	 */
	create: function(req, res) {
		models.task.create({
			title: req.params.title,
			user_id: req.params.id
		}).then(function(result) {
			res.send(result);あ
		});
	},

	/**
	 * Show Object
	 */
	show: function(req, res) {
		models.user.findOne({
			where: {id: req.params.id},
			include: [{model: models.task}]
		}).then(function(result) {
			res.send(result);
		});
	},

	/**
	 * Delete Object
	 */
	 destroy: function(req, res) {
	 	models.task.destroy({
	 		where: {
	 			user_id: req.params.id,
	 			title: req.params.title
	 		}
	 	}).then(function() {
	 		res.send('deleted');
	 	});
	 }

}