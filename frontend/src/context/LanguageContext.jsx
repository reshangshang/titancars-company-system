import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
    en: {
        home: 'Home',
        cars: 'Cars',
        about: 'About',
        contact: 'Contact',
        theme: 'Theme',
        selectLanguage: 'Select Language',
        reserve: 'Reserve',
        footer: '© 2025 Titan Cars'
    },
    es: {
        home: 'Inicio',
        cars: 'Autos',
        about: 'Nosotros',
        contact: 'Contacto',
        theme: 'Tema',
        selectLanguage: 'Seleccionar Idioma',
        reserve: 'Reservar',
        footer: '© 2025 Titan Cars'
    },
    it: {
        home: 'Home',
        cars: 'Auto',
        about: 'Chi Siamo',
        contact: 'Contatti',
        theme: 'Tema',
        selectLanguage: 'Seleziona Lingua',
        reserve: 'Prenota',
        footer: '© 2025 Titan Cars'
    },
    fil: {
        home: 'Tahanan',
        cars: 'Mga Kotse',
        about: 'Tungkol',
        contact: 'Makipag-ugnayan',
        theme: 'Tema',
        selectLanguage: 'Pumili ng Wika',
        reserve: 'Magpareserba',
        footer: '© 2025 Titan Cars'
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && translations[savedLanguage]) {
            setLanguage(savedLanguage);
        }
    }, []);

    const changeLanguage = (lang) => {
        if (translations[lang]) {
            setLanguage(lang);
            localStorage.setItem('language', lang);
        }
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
