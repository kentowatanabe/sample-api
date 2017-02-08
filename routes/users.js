var express = require('express');
var models = require('../models');

module.exports = {

	/**
	 * Read Object
	 */
	index: function(req, res) {
		models.user.findAll().then(function(result) {
			res.send(result);
		});
	},

	/**
	 * Creat Object
	 */
	 create: function(req, res) {
	 	models.user.create({
	 		name: req.params.name
	 	}).then(function(result) {
			res.send(result);
		});
	 },

	/**
	 * Show Object
	 */
	show: function(req, res) {
		models.user.findOne({
			where: {id: req.params.id},
		}).then(function(result) {
			res.send(result);
		});
	},

	/**
	 * Update Object
	 */
	 update: function(req, res) {
	 	models.user.update({
	 		name: req.params.name
	 	}, {
	 		where: {id: req.params.id}
	 	}).then(function(result) {
	 		res.send(result);
	 	});
	 },

	 /**
	 * Delete Object
	 */
	 destroy: function(req, res) {
	 	models.user.destroy({
	 		where: {
	 			id: req.params.id
	 		}
	 	}).then(function() {
	 		res.send('deleted');
	 	});
	 }
}