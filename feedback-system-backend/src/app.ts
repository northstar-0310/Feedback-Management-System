import express from 'express';
import feedbackRoutes from './routes/feedback.routes';
import rateLimit from 'express-rate-limit';

const app = express();
app.use(express.json());

const limiter = rateLimit({
  windowMs: 10 * 1000, // 10 seconds
  max: 1, // Limit each IP to 1 request per windowMs
  message: 'You can only submit feedback once every 10 seconds'
});

app.use('/api/feedback', limiter);
app.use('/api/feedback', feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
