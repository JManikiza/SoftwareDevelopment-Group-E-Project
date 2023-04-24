import { Input, LabelText } from 'govuk-react';
import {CurrentContext} from '../../Pages/Temp'

function MyInput() {

    function onChangeCapture(e) {
        CurrentContext.nhsNo = e.target.value;
        
    }

    return (
        <>
            <LabelText> enter your nhs number </LabelText>
            <Input onChange={onChangeCapture} />
        </>
        );

};
export default MyInput; 