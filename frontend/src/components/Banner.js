import { Alert } from 'react-bootstrap' 
import {useEffect, useState} from 'react';
import {doc, getDoc} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

function Banner(){

    const [show, setShow] = useState(false);

    const [bannerAlert, setBannerAlert] = useState([]);
    useEffect(() => {
        (async () => {
            let data;
            data = await getDoc(doc(db, "storeInfo", "BannerAlert"));
            setBannerAlert(data.data());
            setShow(data.data().enabled);
        })();
        
    }, []);

    return(
        <Alert show={show} variant="danger" className={"banner position-absolute"} onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{bannerAlert.header}</Alert.Heading>
            <p>{bannerAlert.message}</p>
        </Alert>
    );
}

export default Banner;

