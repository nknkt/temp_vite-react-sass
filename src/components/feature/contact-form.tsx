import React from 'react';
import Button from '../common/button';

const ContactForm: React.FC = () => (
  <form className="p-contact-form">
    <div className="p-contact-form__field">
      <label htmlFor="name" className="p-contact-form__label p-contact-form__label--required">お名前</label>
      <input id="name" name="name" type="text" className="p-contact-form__input" />
    </div>
    <div className="p-contact-form__field">
      <label htmlFor="email" className="p-contact-form__label p-contact-form__label--required">メールアドレス</label>
      <input id="email" name="email" type="email" className="p-contact-form__input" />
    </div>
    <div className="p-contact-form__field">
      <label htmlFor="message" className="p-contact-form__label p-contact-form__label--required">お問い合わせ内容</label>
      <textarea id="message" name="message" rows={4} className="p-contact-form__textarea" />
    </div>
    <Button type="submit" className="p-contact-form__submit-button">送信</Button>
  </form>
);

export default ContactForm;