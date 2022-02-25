import { useState, ReactDOM} from 'react';
import SingleQuestion from './SingleQuestion';
import data from './CareerInfo'

function AccordionMenu(){

    const [CareerInfo, setQuestions] = useState(data)

    return(
        <div className='container'>
            <section className='info'>
                {CareerInfo.map((question) => (
                    <SingleQuestion key={question.id} {...question} />
                ))}
            </section>
        </div>
    );

}

export default AccordionMenu; 