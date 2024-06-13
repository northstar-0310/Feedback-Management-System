"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/feedback');
      setFeedbacks(response.data);
    };

    const intervalId = setInterval(fetchData, 10000);

    fetchData();  // Initial fetch

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Feedback List</h2>
      <ul>
        {feedbacks.map((feedback: any) => (
          <li key={feedback.id}>
            <strong>{feedback.name}</strong>: {feedback.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList
