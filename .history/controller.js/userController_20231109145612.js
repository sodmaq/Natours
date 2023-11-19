const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');
const multer = require('multer');

const upload = multer({ dest: 'pulic/img/users' });
exports.uploadUserPhoto = 

//filter function
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.getAllUsers = factory.getAll(User);
// exports.getAllUsers = catchAsync(async (req, res, next) => {
//   const users = await User.find();

//   return res.status(200).json({
//     status: 'success',
//     result: users.length,
//     data: {
//       users,
//     },
//   });
// });

exports.createUser = (req, res) => {
  return res.status(500).json({
    status: 'error',
    message: 'This route is not define, please signup instead',
  });
};

exports.getUser = factory.getOne(User);

exports.updateMe = catchAsync(async (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  //create error if user POST password data
  if (req.body.password || req.body.confirmPassword) {
    return next(
      new AppError(
        'this route is not for password update, please use /updateMyPassword',
        400
      )
    );
  }

  //filter out unwanted fields name that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');
  //update user document
  const updatedUser = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });

  return res.status(204).json({
    status: 'success',
    data: null,
  });
});
//do not update password with this
exports.updateUser = factory.updateOne(User);
// exports.updateUser = (req, res) => {
//   return res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet implemented',
//   });
// };

exports.deleteUser = factory.deleteOne(User);
// exports.deleteUser = (req, res) => {
//   return res.status(500).json({
//     status: 'error',
//     message: 'This route is not yet implemented',
//   });
// };
