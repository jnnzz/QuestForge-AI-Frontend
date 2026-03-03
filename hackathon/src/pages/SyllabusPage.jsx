import { useState } from 'react';
import SyllabusSync from '../components/syllabus/SyllabusSync';
import WeeklySchedule from '../components/syllabus/WeeklySchedule';
import AIMentor from '../components/syllabus/AIMentor';

const SyllabusSyncPage = () => {
  const [scheduleGenerated, setScheduleGenerated] = useState(true); // Show by default
  const [syllabusFile, setSyllabusFile] = useState(null);

  const handleAnalyzeSyllabus = (file) => {
    // Here you would normally send the PDF to your AI backend
    // For demo purposes, we'll just show the weekly schedule
    console.log('Analyzing syllabus PDF:', file.name);
    setSyllabusFile(file);
    setScheduleGenerated(true);
    
    // Mark that user has uploaded syllabus (for Boss Arena)
    localStorage.setItem('syllabusUploaded', 'true');
    localStorage.setItem('currentWeek', '1');
    localStorage.setItem('currentDay', 'Monday');
  };

  return (
    <div className="relative space-y-8">
      {/* Syllabus Sync Portal */}
      <SyllabusSync onAnalyze={handleAnalyzeSyllabus} />

      {/* Weekly Schedule - Show sample data by default */}
      {scheduleGenerated && <WeeklySchedule />}

      {/* AI Mentor - Floating Assistant */}
      <AIMentor />
    </div>
  );
};

export default SyllabusSyncPage;
