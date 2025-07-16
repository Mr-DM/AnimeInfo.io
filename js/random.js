function getRandomAnime() {
    const animes = [
        {
            title: "One Piece",
            image: "../Img/onepiece.jpeg",
            description: "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda.",
            info: "One Piece has been serialized since 1997 and has become one of the most popular manga series of all time. The anime adaptation began airing in 1999 and is still ongoing."
        },
        {
            title: "Naruto",
            image: "../Img/to_naruto.jpg",
            description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto.",
            info: "Naruto has been serialized since 1999 and has become one of the most popular manga series. The anime adaptation began airing in 2002 and concluded in 2017."
        },
        {
            title: "Bleach",
            image: "../Img/bleach.jpg",
            description: "Bleach is a Japanese manga series written and illustrated by Tite Kubo.",
            info: "Bleach has been serialized since 2001 and has become one of the most popular manga series. The anime adaptation began airing in 2004 and has since released over 360 episodes."
        },
        {
            title: "Demon Slayer",
            image: "../Img/demon.jpeg",
            description: "Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge.",
            info: "Demon Slayer has been serialized since 2016 and has quickly gained popularity for its stunning art and emotional storytelling. The anime adaptation premiered in 2019 and has received critical acclaim."
        },
        {
            title: "Jujutsu Kaisen",
            image: "../Img/jjk2.png",
            description: "Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami.",
            info: "Jujutsu Kaisen has been serialized since 2018 and has quickly gained popularity for its dynamic characters and intricate plot. The anime adaptation premiered in 2020 and has received widespread acclaim."
        },
        {
            title: "Solo Leveling",
            image: "../Img/solo.jpeg",
            description: "Solo Leveling is a South Korean web novel written by Chugong.",
            info: "Solo Leveling has been serialized since 2018 and has become a sensation in the web novel community. The story follows Sung Jin-Woo, the weakest hunter, who gains the ability to level up in strength and skills, embarking on a journey to become the strongest hunter."
        },
        {
            title: "seven deadly sins",
            image: "../Img/seven.jpg",
            description: "The Seven Deadly Sins is a Japanese manga series written and illustrated by Nakaba Suzuki.",
            info: "The Seven Deadly Sins has been serialized since 2012 and has become one of the most popular manga series. The anime adaptation began airing in 2014 and has since released multiple seasons."
        }

    ];

    const randomIndex = Math.floor(Math.random() * animes.length);
    return animes[randomIndex];
}
document.addEventListener("DOMContentLoaded", () => {
    const anime = getRandomAnime();
    document.getElementById("anime-title").textContent = anime.title;
    document.getElementById("anime-image").src = anime.image;
    document.getElementById("anime-description").textContent = anime.description;
    document.getElementById("anime-info").textContent = anime.info;
});