import createError from 'http-errors';
import Project from '../models/project.js';

//getAll
export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.json({
      success: true,
      message: 'Projects list retrieved successfully.',
      data: projects,
    });
  } catch (err) {
    next(err);
  }
};

//getById
export const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return next(createError(404, 'Project not found.'));
    res.json({
      success: true,
      message: 'Project retrieved successfully.',
      data: project,
    });
  } catch (err) {
    next(err);
  }
};

//add
export const addProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.json({
      success: true,
      message: 'Project added successfully.',
      data: project,
    });
  } catch (err) {
    next(err);
  }
};

//update
export const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
    });
    if (!project) return next(createError(404, 'Project not found.'));
    res.json({ success: true, message: 'Project updated successfully.' });
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return next(createError(404, 'Project not found.'));
    res.json({ success: true, message: 'Project deleted successfully.' });
  } catch (err) {
    next(err);
  }
};