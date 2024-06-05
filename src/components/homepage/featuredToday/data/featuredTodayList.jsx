import ListButton from "../assets/list-button.svg"
import GalleryButton from "../assets/gallery-button.svg"
import godzilla from '../assets/godzilla.jpg'
import festivalFilm from '../assets/festivalFilm.jpg'
import TVTracker from '../assets/TVTracker.jpg'
import poster from '../assets/Poster.jpg'


export const featuredTodayList = {
    1: {
        Photo: godzilla,
        Title: 'Five Godzilla Movies You Need to Watch',
        Caption: 'See the list',
        Button: ListButton
    },
    2: {
        Photo: festivalFilm,
        Title: '2024 Festival Films You Need to Know',
        Caption: 'See the list',
        Button: ListButton
    },
    3: {
        Photo: TVTracker,
        Title: 'TV Tracker: Renewed & Canceled Shows',
        Caption: 'Check the status',
        Button: ListButton
    },
    4: {
        Photo: poster,
        Title: 'The Latest (and Greatest) New Posters',
        Caption: 'See more posters',
        Button: GalleryButton
    }
};