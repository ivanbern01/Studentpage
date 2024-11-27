import React, { useEffect, useState } from 'react';
import styles from './Schedule.module.css';

const Schedule = () => {
  const [subjects, setSubjects] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch('/api/subjects'); // Update with your API endpoint
        const data = await response.json();
        setSubjects(data);
      } catch (error) {
        console.error('Failed to fetch subjects:', error);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div className={styles.container}>
      <h2>School Year 2425 - First Semester</h2>
      <h3>LOQUE, MARK FUCKINGBERN (20222-61615-MN-0)</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Subject Code</th>
            <th>Description</th>
            <th>Lec</th>
            <th>Lab</th>
            <th>Unit</th>
            <th>Schedule</th>
            <th>Faculty</th>
          </tr>
        </thead>
        <tbody>
          {subjects.length > 0 ? (
            subjects.map((subject) => (
              <tr key={subject.id}>
                <td>{subject.id}</td>
                <td>{subject.code}</td>
                <td>{subject.description}</td>
                <td>{subject.lec}</td>
                <td>{subject.lab}</td>
                <td>{subject.unit}</td>
                <td>{subject.schedule}</td>
                <td>{subject.faculty}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;