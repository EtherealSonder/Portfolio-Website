import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GameProjects from './pages/GameProjects'
import LandingPage from './pages/LandingPage'
import Topbar from './components/Topbar'
import PageBackground from './components/Pagebackground'
import FullStack from './pages/FullStack'
import Resume from './pages/Resume'
import SuperheroUnity from "./pages/unity-projects/superhero-unity";
import BirdphysicsUnity from "./pages/unity-projects/birdphysics-unity";
import VehicleaiUnity from "./pages/unity-projects/vehicleai-unity";
import DogfatherUnity from "./pages/unity-projects/dogfather-unity";
import IntrovertUnity from "./pages/unity-projects/introvert-unity";
import FallhypercasualUnity from "./pages/unity-projects/fallhypercasual-unity";
import StackUnity from "./pages/unity-projects/stack-unity";
import MonsterUnity from "./pages/unity-projects/monster-unity";
import KimgsburgerUnity from "./pages/unity-projects/kimgsburger-unity";
import HarpyUnity from "./pages/unity-projects/harpy-unity";
import BlindspotUnity from "./pages/unity-projects/blindspot-unity";
import BizarreUnity from "./pages/unity-projects/bizarre-unity";
import BrothersUnity from "./pages/unity-projects/brothers-unity";
import EquivalentrationsUnity from "./pages/unity-projects/equivalentrations-unity";
import BullethellUnity from "./pages/unity-projects/bullethell-unity";
import Contact from "./pages/Contact";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
export default function App() {
    return (
        <Router>
            <PageBackground />
            <Topbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/projects" element={<GameProjects />} />


                <Route path="/superhero-unity" element={<SuperheroUnity />} />
                <Route path="/birdphysics-unity" element={<BirdphysicsUnity />} />
                <Route path="/vehicleai-unity" element={<VehicleaiUnity />} />
                <Route path="/dogfather-unity" element={<DogfatherUnity />} />
                <Route path="/introvert-unity" element={<IntrovertUnity />} />
                <Route path="/fallhypercasual-unity" element={<FallhypercasualUnity />} />
                <Route path="/stack-unity" element={<StackUnity />} />
                <Route path="/monster-unity" element={<MonsterUnity />} />
                <Route path="/kimgsburger-unity" element={<KimgsburgerUnity />} />
                <Route path="/harpy-unity" element={<HarpyUnity />} />
                <Route path="/blindspot-unity" element={<BlindspotUnity />} />
                <Route path="/bizarre-unity" element={<BizarreUnity />} />
                <Route path="/brothers-unity" element={<BrothersUnity />} />
                <Route path="/equivalentrations-unity" element={<EquivalentrationsUnity />} />
                <Route path="/bullethell-unity" element={<BullethellUnity />} />


                <Route path="/fullstack" element={<FullStack />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />

                {/* Add later: <Route path="/fullstack" />, <Route path="/aiprojects" />, etc. */}
            </Routes>
        </Router>
    )
}
