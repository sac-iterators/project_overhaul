import { useState, ReactDOM} from 'react';
import AccordionItem from './AccordionItem';

function AccordionMenu(props){

    const [menu, setItem] = useState(props.data)

    return(
        <div className='container'>
            <section className='info'>
                {menu.map((item) => (
                    <AccordionItem key={item.id}{...item} />
                ))}
            </section>
        </div>
    );

}

export default AccordionMenu; 