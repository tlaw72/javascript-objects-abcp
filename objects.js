var playlist = {
  'John Denver': 'Country Road',
<<<<<<< HEAD
  'Elton John': 'Your Song',
  "Sesame Street": "Elmo's World"
};

function updatePlaylist (playlist, artistName, songTitle) {
 playlist[artistName] = songTitle;
 return playlist;
  
}

function removeFromPlaylist (playlist, artistName) {
 delete playlist[artistName];
  return playlist;
=======
  'Elton John': 'Your Song'
};

function updatePlaylist (object, name, title) {
  object.name = 'title';
  return playlist;
}

function removeFromPlaylist (object, name) {
 delete object.name;
 return playlist;
>>>>>>> 404dd2236fc53c331d4dd9b92e481492fcb4d54a
}