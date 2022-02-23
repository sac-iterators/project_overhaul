import { useState, ReactDOM} from 'react';

function CareersForm(){
    return(
        <form>
            <div>
                <label>What position are you interested in?</label>
                <select class="form-control" id="position">
                    <option disabled selected>Choose a position</option>
                    <option>Line Cook</option>
                    <option>Cashier</option>
                    <option>Server</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div>
                <label for="resume">Resume: </label>
                <input type="file" class="form-control" id="resumeAttachment"></input>
            </div>

        </form>
    );

}

export default CareersForm; 