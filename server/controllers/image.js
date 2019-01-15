const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: '3c37a4ac169b4c5f837b1a572be63bdd'
});

const handleAPICall = (req, res) => {
	   app.models
      .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
      .then(data => {
				res.json(data);
			})
			.catch(err => res.status(400).json('unable to work with api'))
}

const handleImage = (req, res, postgres) => {
  const { id } = req.body;
  postgres('users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
      res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get entries'));
};

module.exports = {
  handleImage: handleImage,
	handleAPICall
};
