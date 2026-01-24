import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import PageTransitionOverlay from "./components/PageTransitionOverlay";
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import WorkPermit from './pages/WorkPermit';
import Recommendations from './pages/Recommendations';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Layout from './Layout';
import Music from './pages/Music';
import Resume from './pages/Resume';
import Timeline from "./components/Timeline";
import BehindTheScenes from "./pages/BehindTheScenes";
import WorkStories from "./pages/WorkStories";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";


const App: React.FC = () => {
    const [transitionOn, setTransitionOn] = useState(false);
  return (
      <>
        <ScrollToTop />
          <PageTransitionOverlay active={transitionOn} />
    <Routes>
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse setTransitionOn={setTransitionOn} />} />
      <Route
          path="/profile/:profileName"
          element={
            <Layout>
              <ProfilePage setTransitionOn={setTransitionOn} />
            </Layout>
          }
      />
      <Route path="/work-permit" element={<Layout><WorkPermit /></Layout>} />
      <Route path="/work-experience" element={<Layout><Timeline /></Layout>} />
      <Route path="/recommendations" element={<Layout><Recommendations /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
      <Route path="/music" element={<Layout><Music /></Layout>} />
      <Route path="/behind-the-scenes" element={<Layout><BehindTheScenes /></Layout>} />
      <Route path="/work-stories" element={<Layout><WorkStories /></Layout>} />
      {/*<Route path="/certifications" element={<Layout><Certifications /></Layout>} />*/}
        <Route path="/resume" element={<Layout><Resume /></Layout>} />

    </Routes>
        <Analytics />
          </>
  );
};

export default App;
