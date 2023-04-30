
import {  H2, Button, ButtonArrow, DateField, MultiChoice, Radio } from "govuk-react";

function BookTab(){

  return(

    <div>

      <br />

      <H2>Book Appointment</H2>
    
      <DateField defaultValues={{ day: '28', month: '02', year: '2024'}}>
        What date would you like to book the appointment for?
      </DateField>
      <br/>
      <MultiChoice label="What time of day works for you?" hint="We will try our best to accommodate your needs">
        <Radio>Morning</Radio>
        <Radio>Noon</Radio>
        <Radio>Afternoon</Radio>
      </MultiChoice>
      <br/>
      <Button icon={<ButtonArrow />} start>
        Start now
      </Button>
  </div>
    
    )};

export default BookTab;