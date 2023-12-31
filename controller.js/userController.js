const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');
const multer = require('multer');
const sharp = require('sharp');

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'pulic/img/users');
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split('/')[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   },
// });
//this way the image will be stored as a buffer
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an Image! Please upload image only', 400), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();
  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);
  next();
});

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
  if (req.file) filteredBody.photo = req.file.filename;
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
