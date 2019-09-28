const query = firebase
  .database()
  .ref(`users/${userId}/hostoryOfPomdoro`)
  .orderByChild('dateSerch');

const getData = new Promise((resolve, reject) => {
  query.once('value').then(snapshot => {
    snapshot.forEach(childSnapshot => {
      const thisName = childSnapshot.val().date;
      const thisUid = childSnapshot.key;
      console.log(thisName);
      lists.push(thisName);
      uidList.push(thisUid);
    });
    resolve(lists);
  });
});

getData.then(lists => {
  console.log(lists.length);
});
