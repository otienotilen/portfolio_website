import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import AppContact from '../components/home/contact';

export default function AppHome() {
    return (
        <div className = "main">
          <AppHero/>
          <AppAbout/>
          <AppFeature/>
          <AppContact/>
        </div>
    );
}


