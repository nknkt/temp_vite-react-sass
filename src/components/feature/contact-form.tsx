import React from 'react';
import Button from '../common/button';

const ContactForm: React.FC = () => (
  <form className="contact-form">
    <div>
      <label htmlFor="name" className="contact-form__label">お名前</label>
      <input id="name" name="name" type="text" className="contact-form__input" />
    </div>
    <div>
      <label htmlFor="email" className="contact-form__label">メールアドレス</label>
      <input id="email" name="email" type="email" className="contact-form__input" />
    </div>
    <div>
      <label htmlFor="message" className="contact-form__label">お問い合わせ内容</label>
      <textarea id="message" name="message" rows={4} className="contact-form__textarea" />
    </div>
    <Button type="submit" className="contact-form__submit-button">送信</Button>
  </form>
);

export default ContactForm;