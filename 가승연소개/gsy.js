document.addEventListener("DOMContentLoaded", function() {
    const profileImg = document.querySelector(".profile-image");
    const profileInfo = document.querySelector(".profile-info");
    const bestPlaylist = document.querySelector(".best-playlist"); 
    const playlist = document.querySelector(".playlist");
    const bestMovie = document.querySelector(".best-movie");
    const movie = document.querySelector(".movie"); 
    const bestMenu = document.querySelector(".best-menu");
    const menu = document.querySelector(".menu"); 
    const bestHobby = document.querySelector(".best-hobby");
    const hobby = document.querySelector(".hobby"); 
    const myTmi = document.querySelector(".my-tmi");
    const tmi = document.querySelector(".tmi"); 

    profileImg.addEventListener("mouseover", function() {
        profileInfo.style.display = "block"; 
    });

    profileImg.addEventListener("mouseout", function() {
        profileInfo.style.display = "none";
    });

    bestPlaylist.addEventListener("mouseenter", function() {
        playlist.style.display = "block"; 
      });
    
    bestPlaylist.addEventListener("mouseleave", function() {
        playlist.style.display = "none"; 
      });

    bestMovie.addEventListener("mouseover", function() {
        movie.style.display = "block"; 
    });

    bestMovie.addEventListener("mouseout", function() {
        movie.style.display = "none"; 
    });
    
    bestMenu.addEventListener("mouseover", function() {
        menu.style.display = "block"; 
    });

    bestMenu.addEventListener("mouseout", function() {
        menu.style.display = "none"; 
    });
    bestHobby.addEventListener("mouseover", function() {
        hobby.style.display = "block"; 
    });

    bestHobby.addEventListener("mouseout", function() {
        hobby.style.display = "none"; 
    });
    myTmi.addEventListener("mouseover", function() {
        tmi.style.display = "block"; 
    });

    myTmi.addEventListener("mouseout", function() {
        tmi.style.display = "none"; 
    });
});

