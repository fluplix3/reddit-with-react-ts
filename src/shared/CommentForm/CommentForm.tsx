import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import { commentContext } from '../context/commentForm';
import styles from './commentForm.css';

function CommentForm() {
    const { value, onChange } = useContext(commentContext)

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        onChange(event.target.value);
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(value)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input} onChange={handleChange} />
            <button type='submit' className={styles.button}>Комментировать</button>
        </form>
    );
}

export default CommentForm;