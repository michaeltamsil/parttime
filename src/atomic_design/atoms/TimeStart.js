import React from 'react'
import { Input } from 'reactstrap'

export default () => (<div style={{display:"inline-block"}}>
    <Input className="d-inline" type="select" name="timeStart" style={{width:"auto"}}>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
    </Input>
    <Input className="d-inline" type="select" name="timeStartmeridiem" style={{width:"auto"}}>
        <option>AM</option>
        <option>PM</option>
    </Input>
</div>)