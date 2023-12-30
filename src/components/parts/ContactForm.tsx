// ContactForm.tsx

import { useState } from 'react';
import { MenuTitle, Description } from '../parts';
import '../../style/components/parts/ContactForm.scss'; // SCSS ファイルのインポート

interface ContactFormProps {
    menuTitle: any;
    description: any;
}

const ContactForm = (props: ContactFormProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // フォーム送信のロジックを追加する場合はここに書く
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="contactContent">
            <MenuTitle menuTitle={props.menuTitle} />
            <Description description={props.description} />
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">お名前:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">メールアドレス:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">お問い合わせ内容:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">送信</button>
            </form>
        </div>
    );
};

export default ContactForm;
