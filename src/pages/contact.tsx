import React from 'react';
import MainVisual from '../components/common/main-visual';
import ContactForm from '../components/feature/contact-form';

const Contact: React.FC = () => (
  <div className="p-contact">
    <MainVisual page="Contactページ" lead="フォームページ" />
    <div className="u-inner">
      <section className="p-contact__section">
        <div className="p-contact__content">
          <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
        </div>
        <div className="p-contact__form-wrapper">
          <ContactForm />
        </div>
      </section>
    </div>
  </div>
);

export default Contact;