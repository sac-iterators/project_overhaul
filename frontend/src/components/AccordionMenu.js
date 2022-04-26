import { useState} from 'react';
import AccordionItem from './AccordionItem';

function AccordionMenu(props){

    const [menu, setItem] = useState(props.data)

    return(
        <section className='info'>
            {menu.map((item) => (
                <AccordionItem key={item.id}{...item} />
            ))}
        </section>
    );

}

export default AccordionMenu; 