import React from 'react'
import { CustomInput } from 'reactstrap'

export default () => (<div>
    <CustomInput type="checkbox" label="Monday" id="daysMonday"  inline name="days[]" value="Monday"/>
    <CustomInput type="checkbox" label="Tuesday" id="daysTuesday" inline name="days[]" value="Tuesday"/>
    <CustomInput type="checkbox" label="Wednesday" id="daysWednesday" inline name="days[]" value="Wednesday"/>
    <CustomInput type="checkbox" label="Thursday" id="daysThursday" inline name="days[]" value="Thursday"/>
    <CustomInput type="checkbox" label="Friday" id="daysFriday" inline name="days[]" value="Friday"/>
    <CustomInput type="checkbox" label="Saturday" id="daysSaturday" inline name="days[]" value="Saturday"/>
    <CustomInput type="checkbox" label="Sunday" id="daysSunday" inline name="days[]" value="Sunday"/>
</div>)