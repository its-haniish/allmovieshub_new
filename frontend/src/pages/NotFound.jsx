import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404</h1>
            <p style={styles.message}>Oops! The page you are looking for doesn't exist.</p>
            <Link to="/" style={styles.link}>
                Go back to Home
            </Link>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial, sans-serif",
    },
    heading: {
        fontSize: "6rem",
        color: "#FF5733",
    },
    message: {
        fontSize: "1.5rem",
        marginBottom: "20px",
    },
    link: {
        fontSize: "1.2rem",
        textDecoration: "none",
        color: "#007BFF",
        fontWeight: "bold",
    },
};

export default NotFound;
