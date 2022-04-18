// classes, objects, constructor

class anime {
    constructor(name, type, episodes, status) {
        this.name = name;
        this.type = type;
        this.episodes = episodes;
        this.status = status;
    }

    bookmarkAnime() {
        return 'bookmarked';
        return `${this.name} is a ${this.type} anime with ${this.episodes} episodes and is ${this.status}`;
    }
}

const animeObject = new anime('Naruto', 'Shounen', '100', 'finished');
const animeObject2 = new anime('One Piece', 'Shounen', '100', 'finished');

console.log(animeObject.name);
console.log(animeObject.type);
console.log(animeObject.episodes);
console.log(animeObject.status);
console.log(animeObject.bookmarkAnime());

console.log(animeObject2.name);
console.log(animeObject2.type);
console.log(animeObject2.episodes);
console.log(animeObject2.status);
console.log(animeObject2.bookmarkAnime());