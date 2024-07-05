import { initializeApp } from 'firebase/app';
import { getStorage, ref } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
	apiKey: 'AIzaSyChZjBE7w4WbAIouSZmkEDxF_ZhOOojMKQ',
	authDomain: 'sammy-udemy.firebaseapp.com',
	projectId: 'sammy-udemy',
	storageBucket: 'sammy-udemy.appspot.com',
	messagingSenderId: '658385060839',
	appId: '1:658385060839:web:b1ded1eb12f70251c1b342',
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const courseStorageRefs = ref(storage, `/sammi-udemy/course/${uuidv4()}`);

export { storage, courseStorageRefs };
