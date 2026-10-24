import createError from 'http-errors';
import User from '../models/user.js';

//getAll
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({
      success: true,
      message: 'Users list retrieved successfully.',
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

//getById
export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(createError(404, 'User not found.'));
    res.json({
      success: true,
      message: 'User retrieved successfully.',
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

//add
export const addUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json({
      success: true,
      message: 'User added successfully.',
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

//update
export const updateUser = async (req, res, next) => {
  try {
    // refresh the "updated" date every time a user is changed
    const changes = { ...req.body, updated: Date.now() };
    const user = await User.findByIdAndUpdate(req.params.id, changes, {
      runValidators: true,
    });
    if (!user) return next(createError(404, 'User not found.'));
    res.json({ success: true, message: 'User updated successfully.' });
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return next(createError(404, 'User not found.'));
    res.json({ success: true, message: 'User deleted successfully.' });
  } catch (err) {
    next(err);
  }
};