import Storage from '@react-native-firebase/app';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AuthApi from '../util/API/Auth.app';

const uploatImageToFirebase = async Image => {
    if (image.url) {
        const reference = Storage().ref('images/' + image.name);
        await reference.putFile(image.url);
        const url = await Storage().ref('images/' + image.fileName).getDownloadURL();
        return url;
    } else {
        return image;
    }
};

const initState = {
    userId: null,
    name: null,
    real_name: null,
    email: null,
    phone: null,
    
}