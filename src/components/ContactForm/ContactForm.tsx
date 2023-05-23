import emailjs from "@emailjs/browser";
import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import styles from "./styles.module.css";

const FORM_INITIAL_VALUES = { name: "", email: "", subject: "", message: "" };

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState(FORM_INITIAL_VALUES);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const disabledSend = () => {
    if (!formValue.name || !formValue.email || !formValue.subject || !formValue.message) return true;

    return false;
  };

  const handleChangeField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, "template_wotpibf", formValue, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      setFormValue(FORM_INITIAL_VALUES);
      setEmailSent(true);
      setError(null);
    } catch (err) {
      setError("An error ocurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (emailSent)
    return (
      <div className={styles["sent-message"]}>
        <h1>¡Your message was sent successfully!</h1>
        <p>I'll be contacting you as soon as possible.</p>
      </div>
    );

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit} className={styles.container}>
        <input id="name" name="name" placeholder="What's your name?" value={formValue.name} onChange={handleChangeField} disabled={loading} minLength={3} />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
          value={formValue.email}
          onChange={handleChangeField}
          disabled={loading}
          minLength={10}
        />

        <input
          id="subject"
          name="subject"
          placeholder="Email subject"
          value={formValue.subject}
          onChange={handleChangeField}
          disabled={loading}
          minLength={10}
        />

        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          value={formValue.message}
          onChange={handleChangeField}
          disabled={loading}
          minLength={20}
        />

        <button className={styles["send-button"]} type="submit" disabled={disabledSend()}>
          {loading ? <Spinner /> : "Send"}
        </button>
      </form>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default ContactForm;
