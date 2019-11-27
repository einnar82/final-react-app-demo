import { fetchPhotos } from "../services/photos.service";
const photoActions = setState => ({
  getAllPhotos: () => {
    fetchPhotos().then(data => {
      setState(state => ({
        ...state,
        photos: [...data.slice(0, 100)]
      }));
    });
  }
});

export default photoActions;
