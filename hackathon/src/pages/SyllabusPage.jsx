import { useState } from 'react';
import SyllabusSync from '../components/syllabus/SyllabusSync';
import WeeklySchedule from '../components/syllabus/WeeklySchedule';
import AIMentor from '../components/syllabus/AIMentor';

const SyllabusSyncPage = () => {
  const [scheduleGenerated, setScheduleGenerated] = useState(true); // Show by default
  const [syllabusFile, setSyllabusFile] = useState(null);

  const handleAnalyzeSyllabus = (file, analysisData) => {
    // Store the PDF file and analysis data
    console.log('Analyzing syllabus PDF:', file.name);
    console.log('Analysis data from backend:', analysisData);
    
    setSyllabusFile(file);
    setScheduleGenerated(true);
    
    // Mark that user has uploaded syllabus (for Boss Arena)
    localStorage.setItem('syllabusUploaded', 'true');
    localStorage.setItem('currentWeek', '1');
    localStorage.setItem('currentDay', 'Monday');
    
    // Optionally store syllabus ID if backend returns it
    if (analysisData?.syllabusId) {
      localStorage.setItem('syllabusId', analysisData.syllabusId);
    }
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
