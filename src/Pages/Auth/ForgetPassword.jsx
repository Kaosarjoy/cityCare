import React, { useContext, useState } from 'react';
import { AuthContexts } from '../../Content/AuthContexts';

const ForgetPassword = () => {
    // get forgetPassword function from context
    const { forgetPassword } = useContext(AuthContexts);

    // store user email
    const [email, setEmail] = useState('');

    // success message
    const [success, setSuccess] = useState('');

    // error message
    const [error, setError] = useState('');

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // reset previous messages
        setSuccess('');
        setError('');

        // basic validation
        if (!email) {
            setError('Email field is required');
            return;
        }

        // call firebase reset email function
        forgetPassword(email)
            .then(() => {
                setSuccess(
                    'A password reset link has been sent to your email. Please check your inbox.'
                );
            })
            .catch(() => {
                setError('Failed to send reset email. Please try again.');
            });
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2>Forgot Password</h2>

                <p style={styles.text}>
                    Enter your registered email address. We will send you a password reset link.
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />

                    <button type="submit " className='btn btn-primary'>
                        Send Reset Link
                    </button>
                </form>

                {error && <p style={styles.error}>{error}</p>}
                {success && <p style={styles.success}>{success}</p>}
            </div>
        </div>
    );
};

// simple inline styles (no fancy stuff)
const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
    },
    card: {
        width: '350px',
        padding: '25px',
        backgroundColor: '#ffffff',
        borderRadius: '6px',
        boxShadow: '0 0 8px rgba(0,0,0,0.1)',
    },
    text: {
        fontSize: '14px',
        marginBottom: '15px',
        color: '#555',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
   
    error: {
        color: 'red',
        marginTop: '10px',
        fontSize: '14px',
    },
    success: {
        color: 'green',
        marginTop: '10px',
        fontSize: '14px',
    },
};

export default ForgetPassword;
