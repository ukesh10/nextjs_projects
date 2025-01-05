import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.992531326072!2d77.73144487382956!3d12.972329314864838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1202ca48c391%3A0xd0a57bdb75942b42!2sMathrushree%20Lakeview%20PG%20For%20Gents!5e0!3m2!1sen!2sin!4v1687886682325!5m2!1sen!2sin"
                width={100} height={450} style={{ border: '0' }} allowFullScreen="" loading="lazy" className={styles.mapping} referrerPolicy="no-referrer-when-downgrade"></iframe>

        </>
    );
};

export default Contact;