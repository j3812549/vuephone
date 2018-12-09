var Schema = new mongoose.Schema({
    field: {
	type: mongoose.Schema.Type.ObjectId,
	ref: 'model'
    }
});
Schema.static = {
    fetch: function(cb){
	return this
	      .find({})
	      .populate('field')
	      .exec(cb)
	}
 }
var Model = mongoose.Model('model',Schema );
