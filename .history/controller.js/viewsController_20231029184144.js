

exports.getverview = (req, res) => {
  res.status(200).render('overview', {
    title: 'All Tours',
  });
};
