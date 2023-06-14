import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./ContactUs.scss"

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Ad alanı zorunludur'),
    email: Yup.string().email('Geçerli bir e-posta girin').required('E-posta alanı zorunludur'),
    message: Yup.string().required('Mesaj alanı zorunludur'),
});

const ContactUs = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className="contact">
            <div className="contact__left">
                <div className="contact__tel">
                    <h5>TELEPHONE</h5>
                    <p>610-403-403</p>
                </div>
                <div className="contact__address">
                    <h5>ADDRESS</h5>
                    <p>diamond</p>
                    <p>9070Green Lake Drive Chevy Chase,</p>
                        <p>MD 20815, USA</p>
                </div>
                <div className="contact__email">
                    <h5>EMAIL</h5>
                    <p>shop@company.com</p>
                </div>
            </div>
            <div className="contact__right">
                <h2>Contact Form</h2>
                <div className="form">
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="name">*Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                        </div>

                        <div>
                            <label htmlFor="email">*E-Mail Address:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="message">*Enquiry:</label>
                            <textarea
                                id="message"
                                name="message"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <div>{formik.errors.message}</div>
                            ) : null}
                        </div>

                        <button type="submit">Gönder</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;
