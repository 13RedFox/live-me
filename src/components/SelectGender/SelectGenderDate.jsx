import React from 'react';
import styles from './SelectGender.module.scss';

const date = [
  { date: 'Date', id: '00' },
  { date: '01', id: '01' },
  { date: '02', id: '02' },
  { date: '03', id: '03' },
  { date: '04', id: '04' },
  { date: '05', id: '05' },
  { date: '06', id: '06' },
  { date: '07', id: '07' },
  { date: '08', id: '08' },
  { date: '09', id: '09' },
  { date: '10', id: '10' },
  { date: '11', id: '11' },
  { date: '12', id: '12' },
  { date: '13', id: '13' },
  { date: '14', id: '14' },
  { date: '15', id: '15' },
  { date: '16', id: '16' },
  { date: '17', id: '17' },
  { date: '18', id: '18' },
  { date: '19', id: '19' },
  { date: '20', id: '20' },
  { date: '21', id: '21' },
  { date: '22', id: '22' },
  { date: '23', id: '23' },
  { date: '24', id: '24' },
  { date: '25', id: '25' },
  { date: '26', id: '26' },
  { date: '27', id: '27' },
  { date: '28', id: '28' },
  { date: '29', id: '29' },
  { date: '30', id: '30' },
  { date: '31', id: '31' },
];

const SelectGenderDate = () => {
  return (
    <select className={styles.dateForm} name="Month" defaultValue="Date">
      {date.map((day) => (
        <option value={day.date} key={day.id}>
          {day.day}
        </option>
      ))}
    </select>
  );
};

export default SelectGenderDate;
