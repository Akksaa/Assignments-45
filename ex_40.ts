// ex 40: Album:
// solve:
 function makeAlbum(artistName: string , albumName: string , tracks? : number){
    let album : {Artist :string , Album : string  , Tracks? : number} = { 
    
            Artist: artistName,
            Album: albumName,
        };
    
    if( tracks !== undefined){
        album.Tracks = tracks
    };
    return album;      

 };

 let album1 = makeAlbum("J-Hope" , "Jack In The Box");

 let album2 = makeAlbum("Taylor Swift" , "Lover" , 18 );

 let album3 = makeAlbum("Zayn" , "Love like this");

 console.log(album1);
 console.log(album2);
 console.log(album3);