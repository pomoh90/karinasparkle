// app/page.js
'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Mali } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Lora } from 'next/font/google';
import { Sacramento } from 'next/font/google';
import Logo from './components/Logo';
import { contactInfo } from './components/info';
import Popup from './components/pop';
import { Dancing_Script } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'], weight: ['300', '400', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });
const mali = Mali({ subsets: ['latin'], weight: ['200', '300', '400', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });
const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] });
const sacramento = Sacramento({ subsets: ['latin'], weight: '400' });
const dancingScript = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'] });

const images = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  '/images/photo5.jpg',
  '/images/photo6.jpg',
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [hearts, setHearts] = useState([]);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('popup-open', !popupClosed);
  }, [popupClosed]);

  const popupEnabled = 0; // 1 - включить попап, 0 - отключить

  useEffect(() => {
    document.body.classList.toggle('popup-open', popupEnabled === 1 && !popupClosed);
  }, [popupClosed, popupEnabled]);

  useEffect(() => {
    if (popupEnabled === 0 || popupClosed) {
      AOS.init();

      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);

      const heartInterval = setInterval(() => {
        setHearts((prev) => {
          if (prev.length >= 10) return prev.slice(1);
          return [
            ...prev,
            {
              id: Math.random(),
              left: Math.random() * 100,
              top: Math.random() * 100,
              size: Math.random() * 20 + 10,
              opacity: Math.random() * 0.7 + 0.3,
            },
          ];
        });
      }, 500);

      const observer = new IntersectionObserver(
        ([entry]) => setIsFooterVisible(entry.isIntersecting),
        { threshold: 0.1 }
      );

      const footer = document.querySelector('footer');
      if (footer) observer.observe(footer);

      return () => {
        clearInterval(interval);
        clearInterval(heartInterval);
        if (footer) observer.unobserve(footer);
      };
    }
  }, [popupClosed, popupEnabled]);

  return (
    <>
      {popupEnabled === 1 && !popupClosed && <Popup onClose={() => setPopupClosed(true)} />}
      <Head>
        <title>Karina Sparkle</title>
        <meta name="description" content="Karina Sparkle | Girl next door" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Karina Sparkle escort services, luxury, companionship, exclusive connections" />
        <meta name="author" content="Karina Sparkle" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <div
        className={`${styles.container} ${nunito.className} ${!popupClosed ? 'page-blurred' : ''}`}
        style={{
          fontWeight: 200,
          backgroundColor: '#2F4037',
          color: '#f0f0f0',
          overflowX: 'hidden',
          padding: '0 2vw',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <header className={styles.header} style={{ textAlign: 'center' }}>
          <h1 className={dancingScript.className} style={{ color: '#d6ac66', fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            Karina Sparkle
          </h1>
          <p className={lora.className} style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
            Your girl next door
          </p>
        </header>

        <section
          className={styles.gallery}
          style={{
            textAlign: 'center',
            position: 'relative',
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            className={styles.imageContainer}
            data-aos="fade-up"
            style={{
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: '3/4', // Соотношение сторон для книжного формата
            }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index}`}
                className={styles.image}
                style={{
                  width: '100%',
                  height: 'auto', // Высота подстраивается под ширину
                  objectFit: 'contain', // Сохраняем пропорции для книжного формата
                  opacity: currentImage === index ? 1 : 0,
                  position: 'absolute',
                  transition: 'opacity 1s ease-in-out',
                }}
              />
            ))}

            <Logo
              style={{
                position: 'absolute',
                bottom: '1vw',
                right: '1vw',
                zIndex: 10,
              }}
            />
          </div>

          <div
            className={styles.thumbnailContainer}
            style={{
              marginTop: '1vw',
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5vw',
              overflowX: 'auto',
              width: '100%',
              maxWidth: '1200px',
            }}
          >
            {images.map((src, index) => (
              <img
                key={`thumb-${index}`}
                src={src}
                alt={`Thumbnail ${index}`}
                className={styles.thumbnail}
                onClick={() => setCurrentImage(index)}
                style={{
                  width: 'clamp(35px, 5vw, 50px)',
                  height: 'clamp(35px, 5vw, 50px)',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  border: currentImage === index ? '2px solid #d6ac66' : '2px solid transparent',
                  borderRadius: '5px',
                }}
              />
            ))}
          </div>
        </section>

        <section
          className={styles.contentSection}
          style={{
            width: '100%', // Адаптируем под ширину экрана
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Уменьшаем минимальную ширину для маленьких экранов
            gridTemplateRows: 'auto auto',
            gap: 'clamp(10px, 2vw, 20px)',
            padding: 'clamp(20px, 3vw, 40px) clamp(10px, 2vw, 20px)', // Добавляем горизонтальные отступы
            boxSizing: 'border-box', // Учитываем padding в ширине
          }}
        >
          <div data-aos="fade-right" style={{ gridColumn: '1 / -1', textAlign: 'left' }}>
            <h2 className={playfair.className} style={{ color: '#d6ac66', fontWeight: 300, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              Hi gentlemen
            </h2>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>
              If you are looking to have a wonderful time with a Beautiful and experienced woman then you have found it with me! I am very discreet and open minded to any GENTELMEN who I encounter and I will make sure you enjoy every min with me.... Whether you're on vacation, business or a getaway from life back at home give me a call...... My personality, not to mention looks will bring your stress to an ease.....
            </p>
            <h3 className={playfair.className} style={{ fontWeight: 300, color: '#d6ac66', textAlign: 'right', fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}>
              Your Karina
            </h3>
          </div>

          <div data-aos="fade-left" style={{ textAlign: 'left' }}>
            <h2 className={playfair.className} style={{ fontWeight: 300, color: '#d6ac66', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              Donation
            </h2>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>Incall $800</p>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>Outcall $800 + Taxi</p>
          </div>

          <div data-aos="fade-up" style={{ textAlign: 'left' }}>
            <h2 className={playfair.className} style={{ fontWeight: 300, color: '#d6ac66', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              Details about me
            </h2>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>Location - Manhattan</p>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>Age - 26</p>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>Height - 5ft 6in</p>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>Weight - 120ibs</p>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>Measurements - 32 B</p>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>Body type - Athletic</p>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>Ethnicity - White</p>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>Hair - Blond</p>
          </div>

          <div data-aos="fade-up" style={{ gridColumn: '1 / -1', textAlign: 'left' }}>
            <h2 className={playfair.className} style={{ fontWeight: 300, color: '#d6ac66', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              Contact Me
            </h2>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>
              Phone: <a href={`tel:${contactInfo.phone}`} style={{ color: '#d6ac66', textDecoration: 'none' }}>{contactInfo.phone}</a>
            </p>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>
              Email: <a href={`mailto:${contactInfo.email}`} style={{ color: '#d6ac66', textDecoration: 'none' }}>{contactInfo.email}</a>
            </p>
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>
              My reviews: <a href={contactInfo.ter} style={{ color: '#d6ac66', textDecoration: 'none' }}>{contactInfo.terShort}</a>
            </p>
          </div>
        </section>

        <footer className={styles.footer} style={{ textAlign: 'center', padding: 'clamp(10px, 2vw, 20px) 0', backgroundColor: '#1e1e1e' }}>
          <span style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1rem)' }}>
            © 2025 Karina Sparkle. All rights reserved.
          </span>
        </footer>

        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-50px);
              opacity: 0;
            }
          }

          @keyframes blink {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}</style>
      </div>
    </>
  );
}