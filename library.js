const library = {
       tracks: {
         t01: {
           id: "t01",
           name: "Code Monkey",
           artist: "Jonathan Coulton",
           album: "Thing a Week Three",
         },
         t02: {
           id: "t02",
           name: "Model View Controller",
           artist: "James Dempsey",
           album: "WWDC 2003",
         },
         t03: {
           id: "t03",
           name: "Four Thirty-Three",
           artist: "John Cage",
           album: "Woodstock 1952",
         },
       },
       playlists: {
         p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
         p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
       },
       printTracks: function () {
         const tracks = Object.values(this.tracks);
         for (let track of tracks) {
           console.log(
             `${track.id}: ${track.name} by ${track.artist} (${track.album})`,
           );
         }
       },
       printPlaylists: function () {
         const playlists = Object.values(this.playlists);
         for (let playlist of playlists) {
           console.log(
             `${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`,
           );
         }
       },
       printPlaylist: function (playlistId) {
         const playlist = this.playlists[playlistId];
         console.log(
           `${playlist.id} - ${playlist.name} - ${playlist.tracks.length} tracks`,
         );
         for (let trackId of playlist.tracks) {
           const track = this.tracks[trackId];
           console.log(
             `${track.id} - ${track.name} by ${track.artist} (${track.album})`,
           );
         }
       },
       addTrackToPlaylist: function (trackId, playlistId) {
         const playlist = this.playlists[playlistId];
     
         if (!playlist.tracks.includes(trackId)) {
           playlist.tracks.push(trackId);
         } else {
           console.log(`Track ${trackId} already exists in playlist ${playlistId}`);
         }
       },
       addTrack: function (name, artist, album) {
         let trackNumber = Object.keys(this.tracks).length + 1;
         let id = `t${trackNumber.toString().padStart(2, "0")}`;
     
         this.tracks[id] = {};
         this.tracks[id].name = name;
         this.tracks[id].artist = artist;
         this.tracks[id].album = album;
         this.tracks[id].id = id;
       },
       addPlaylist: function (name) {
         let playlistNumber = Object.keys(this.playlists).length + 1;
         let id = `p${playlistNumber.toString().padStart(2, "0")}`;
     
         this.playlists[id] = { id, name, tracks: [] };
       },
     };
     

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
library.printPlaylists()

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

library.printTracks()




// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
library.printPlaylist('p01');


// adds an existing track to an existing playlist
library.addTrackToPlaylist('t01', 'p02');


   


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
library.addTrack('Random Track', 'Random Artist', 'Random Album');


        


// adds a playlist to the library
library.addPlaylist('Random Playlist');





// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}