import createError from 'http-errors';
import Service from '../models/service.js';

//getAll
export const getAllServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.json({
      success: true,
      message: 'Services list retrieved successfully.',
      data: services,
    });
  } catch (err) {
    next(err);
  }
};

//getById
export const getServiceById = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return next(createError(404, 'Service not found.'));
    res.json({
      success: true,
      message: 'Service retrieved successfully.',
      data: service,
    });
  } catch (err) {
    next(err);
  }
};

//add
export const addService = async (req, res, next) => {
  try {
    const service = await Service.create(req.body);
    res.json({
      success: true,
      message: 'Service added successfully.',
      data: service,
    });
  } catch (err) {
    next(err);
  }
};

//update
export const updateService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
    });
    if (!service) return next(createError(404, 'Service not found.'));
    res.json({ success: true, message: 'Service updated successfully.' });
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return next(createError(404, 'Service not found.'));
    res.json({ success: true, message: 'Service deleted successfully.' });
  } catch (err) {
    next(err);
  }
};

