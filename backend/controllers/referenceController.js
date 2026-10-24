import createError from 'http-errors';
import Reference from '../models/reference.js';

//getAll
export const getAllReferences = async (req, res, next) => {
  try {
    const references = await Reference.find();
    res.json({
      success: true,
      message: 'References list retrieved successfully.',
      data: references,
    });
  } catch (err) {
    next(err);
  }
};

//getById
export const getReferenceById = async (req, res, next) => {
  try {
    const reference = await Reference.findById(req.params.id);
    if (!reference) return next(createError(404, 'Reference not found.'));
    res.json({
      success: true,
      message: 'Reference retrieved successfully.',
      data: reference,
    });
  } catch (err) {
    next(err);
  }
};

//add
export const addReference = async (req, res, next) => {
  try {
    const reference = await Reference.create(req.body);
    res.json({
      success: true,
      message: 'Reference added successfully.',
      data: reference,
    });
  } catch (err) {
    next(err);
  }
};

//update
export const updateReference = async (req, res, next) => {
  try {
    const reference = await Reference.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
    });
    if (!reference) return next(createError(404, 'Reference not found.'));
    res.json({ success: true, message: 'Reference updated successfully.' });
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteReference = async (req, res, next) => {
  try {
    const reference = await Reference.findByIdAndDelete(req.params.id);
    if (!reference) return next(createError(404, 'Reference not found.'));
    res.json({ success: true, message: 'Reference deleted successfully.' });
  } catch (err) {
    next(err);
  }
};