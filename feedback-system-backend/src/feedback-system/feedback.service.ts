import { Feedback } from '../models/feedback';

let feedbacks: Feedback[] = [];
let currentId = 1;

export const getAllFeedback = (): Feedback[] => {
  return feedbacks;
};

export const addFeedback = (name: string, feedback: string): Feedback => {
  const newFeedback: Feedback = { id: currentId++, name, feedback };
  feedbacks.push(newFeedback);
  return newFeedback;
};
