import { useState } from 'react';
import SyllabusSync from '../components/syllabus/SyllabusSync';
import QuestMap from '../components/syllabus/QuestMap';
import AIMentor from '../components/syllabus/AIMentor';

const SyllabusSyncPage = () => {
  const [questsGenerated, setQuestsGenerated] = useState(false);

  const handleAnalyzeSyllabus = (syllabusText) => {
    // Here you would normally send the syllabus to your AI backend
    // For demo purposes, we'll just show the quest map
    console.log('Analyzing syllabus:', syllabusText);
    setQuestsGenerated(true);
  };

  return (
    <div className="relative">
      {/* Syllabus Sync Portal */}
      <SyllabusSync onAnalyze={handleAnalyzeSyllabus} />

      {/* Quest Map - Always visible with default quests */}
      <QuestMap />

      {/* AI Mentor - Floating Assistant */}
      <AIMentor />
    </div>
  );
};

export default SyllabusSyncPage;
