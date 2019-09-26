import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import { saveMyPomodoroToDatabase } from 'components/Molecules/Timer/Requests';

const PomdoroHistoryContent = () => {
  const date = new Date().getTime();
  const userId = firebase.auth().currentUser.uid;
  const database = firebase.database();

  // tak będziemy pobierać klucz dla naszych pomodorów
  // const newPomodoroKay = database
  //   .ref()
  //   .child(`users/${userId}/hostoryOfPomdoro`)
  //   .push().key;
  // console.log(newPomodoroKay);

  // dodaawnie do bazy danych
  // firebase
  //   .database()
  //   .ref(`users/${userId}/hostoryOfPomdoro/${newPomodoroKay}`)
  //   .set({
  //     date: 64,
  //     name: 'kot',
  //     time: '25min',
  //   });

  // tak się sortuje według wprowadzonej wartości
  // const myPomodoros = database
  //   .ref(`users/${userId}/hostoryOfPomdoro`)
  //   .orderByChild('name')
  //   .equalTo('to ja najstarszy 2');
  // myPomodoros.once('value', snap => {
  //   if (snap.val()) {
  //     console.log(snap.val());
  //   }
  // });

  // tak się sortuje aby były po koleji

  // const myPomodoros = database.ref(`users/${userId}/hostoryOfPomdoro`);
  // myPomodoros
  //   .orderByChild(`date`)
  //   // .equalTo(9  11)

  //   .on('child_added', snap => {
  //     console.log(snap.val());
  //   });

  // console.log(date);
  // console.log(new Date(date));
  saveMyPomodoroToDatabase();

  return (
    <>
      <p>content</p>
    </>
  );
};

export default PomdoroHistoryContent;
