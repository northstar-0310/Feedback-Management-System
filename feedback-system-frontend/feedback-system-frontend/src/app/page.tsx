import Image from "next/image";
import styles from "./page.module.css";
import FeedbackForm from "./components/feedbackform";
import FeedbackList from "./components/feebacklist";

export default function Home() {
  return (
    <main className={styles.main}>
      <FeedbackForm/>
      <FeedbackList />
    </main>
  );
}
