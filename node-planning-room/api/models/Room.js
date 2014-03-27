/**
 * Room
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        id: {
            type: 'string',
            required: true
        }
    },

    beforeValidation: function(values, cb){
        values.id = values.id.replace(/ /g, '_');
        cb();
    },
   
};