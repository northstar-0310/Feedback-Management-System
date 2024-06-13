import { Router } from 'express';
import { getFeedbacks, createFeedback } from '../feedback-system/feedback.controller';

const router = Router();

router.get('/', getFeedbacks);
router.post('/', createFeedback);

export default router;
