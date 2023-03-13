/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import DocumentPicker from './src/DocumentPickers'
import DownloadImg from './src/DownloadImg';
import CameraPic from './src/CameraPic';
import VideoPlay from './src/VideoPlay'
import {name as appName} from './app.json';
import ImagePickers from './src/ImagePickers';
import SoundPlay from './src/SoundPlay';
import AudioPlay from './src/AudioPlay';
import TrackPlayer from 'react-native-track-player';
import GetLocations from './src/GetLocations';
import GetCurrentLocation from './src/GetCurrentLocation';
import Maps from './src/Maps';
import Animations from './src/Animations';
import ImageGallery from './src/ImageGallery';
import ReactAnimation from './src/ReactAnimation';
import img from './src/img';


TrackPlayer.registerPlaybackService(() => require('./src/Service'));
AppRegistry.registerComponent(appName, () => App);
