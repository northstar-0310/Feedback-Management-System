import { Request, Response } from 'express';
import { getAllFeedback, addFeedback } from '../feedback-system/feedback.service';

export const getFeedbacks = (req: Request, res: Response) => {
  try {
    const feedbacks = getAllFeedback();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving feedback' });
  }
};

export const createFeedback = (req: Request, res: Response) => {
  const { name, feedback } = req.body;
  if (!name || !feedback) {
    return res.status(400).json({ message: 'Name and feedback are required' });
  }

  try {
    const newFeedback = addFeedback(name, feedback);
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback' });
  }
};
