'use client';
import { contactInfo } from './info';
import styles from '../../styles/Home.module.css';

export default function Popup({ onClose }) {
  return (
    <div className="popup-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(30, 30, 30, 0.8)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
    }}>
      <div style={{
        background: '#1e1e1e',
        color: '#f0f0f0',
        padding: '30px',
        borderRadius: '10px',
        position: 'relative',
        maxWidth: '400px',
        textAlign: 'center',
        border: '2px solid #ff69b4',
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.6)',
      }}>
        <button 
          onClick={onClose} 
          style={{
            position: 'absolute',
            top: '10px',
            right: '15px',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            color: '#ff69b4',
            fontSize: '28px',
          }}
        >
          &times;
        </button>
        <h2 className={styles.contentSection} style={{ color: '#ff69b4', marginBottom: '15px' }}>
          I'm back!
        </h2>
        <p style={{ lineHeight: '1.6' }}>
          New phone number: {contactInfo.phone}
        </p>
        <button 
          onClick={onClose} 
          style={{
            marginTop: '20px',
            padding: '8px 16px',
            cursor: 'pointer',
            backgroundColor: '#ff69b4',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
