import React, {Component} from 'react'
import {connect} from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import {
  required,
  maxLength,
  maxLength15,
  minLength,
  minLength2,
  number,
  minValue,
  minValue18,
  email,
  tooOld,
  aol,
  alphaNumeric,
  phoneNumber
} from './validations';
import moment from 'moment'

export const TextInput = ({
  input,
  label,
  subtitle,
  placeholder,
  labelcol,
  divcol,
  formgrouprow,
  disabled,
  type,
  style,
  marginTop,
  id,
  meta: {
    touched,
    error,
    warning
  }
}) => (<FormGroup style={marginTop} className={'form-group ' + formgrouprow}>
  {label != '' && <Label className={'field-label ' + labelcol} style={{marginTop:10, padding:0}} htmlFor={id}>{label}</Label>}

  {
    subtitle
      ? (<span>
        <small style={{
            color: '#969393d1'
          }}>
          {subtitle}</small>
      </span>)
      : ('')
  }
  <div style={style} className={divcol + ' ' + type}>
    <Input {...input} id={id} className="form-control" disabled={disabled} placeholder={placeholder} type={type}/> {touched && ((error && <span className="errortext">{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
</FormGroup>)

export const TextArea = ({
  input,
  label,
  subtitle,
  placeholder,
  type,
  id,
  rows,
  meta: {
    touched,
    error,
    warning
  }
}) => (<div className="form-group">
  <label htmlFor={id}>{label}</label>
  {
    subtitle
      ? (<span>
        <small style={{
            color: '#969393d1'
          }}>
          {subtitle}</small>
      </span>)
      : ('')
  }
  <textarea {...input} id={id} className="form-control" placeholder={placeholder} rows={rows} type={type}></textarea>
  {touched && ((error && <span className="errortext">{error}</span>) || (warning && <span>{warning}</span>))}

</div>)

export const FileInput = ({
  input,
  label,
  subtitle,
  type,
  id,
  meta: {
    touched,
    error,
    warning
  }
}) => (<div className="form-group">
  <label className="field-label" htmlFor={id}>{label}</label>
  {
    subtitle
      ? (<span>
        <small style={{
            color: '#969393d1'
          }}>
          {subtitle}</small>
      </span>)
      : ('')
  }
  <div className={type}>
    <input {...input} id={id} className="form-control" placeholder={label} type={type} value={undefined}/> {touched && ((error && <span className="errortext">{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
</div>)

export const renderChaeckBox = ({
  input,
  label,
  type,
  id,
  meta: {
    touched,
    error,
    warning
  }
}) => (<div className="form-group">

  <div className={type}>
    <input {...input} id={id} className="form-control" placeholder={label} type={type}/>
    <label className="field-label" htmlFor={id}>{label}</label>
    {touched && ((error && <span className="errortext">{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
</div>)

export const ChaeckBox = ({
  input,
  label,
  type,
  id,
  meta: {
    touched,
    error,
    warning
  }
}) => (<div className="d-block checkbox checkbox-full-bg checkbox-lg checkbox-rounded checkbox-persian-blue bw-0">

  <div className="form-group row">
    <label className="col-md-3 col-form-label d-block">
      <input {...input} value={false} name="checkbox" type="checkbox"></input>
      <span className="label-text heading-font-family headings-color pd-l-50">{label}</span>
    </label>
    <div className="col-md-9">
      {input && input.checked && (<input {...input} value={undefined} className="form-control" type="text"></input>) || (<input {...input} value={''} className="form-control" type="text" disabled="disabled"></input>)}
    </div>
  </div>
</div>)

export const Plaintext = ({
  input,
  meta,
  id,
  placeholder,
  disabled,
  type,
  label = '',
  data = '',
  extraClasses = ''
}) => (<div htmlFor={id}>

  {meta.touched && meta.error && <div className="alert alert-card alert-error">{meta.error}</div>}
  <div className="form-group has-feedback">

    <label className="field-label">{label}</label>
    <p className="form-control-static">{data}</p>
  </div>
</div>)

class SelectComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {input} = this.props
    return <div className="form-group">
      <div className={this.props.type}>
        <label className="field-label" htmlFor={this.props.id}>{this.props.label}</label>
        <select id={this.props.id} className="form-control" type={this.props.type} value={this.props.input.value
            ? this.props.input.value
            : ''} onChange={event => {
            input.onChange(event)
          }}>
          <option disabled="disabled" selected="selected">Select {this.props.label}</option>
          {this.props.data && this.props.data.map((option, index) => (<option key={index} value={option.id}>{option.name}</option>))}
        </select>
        {this.props.touched && ((this.props.error && <span className="errortext">{this.props.error}</span>) || (this.props.warning && <span>{this.props.warning}</span>))}
      </div>
    </div>
  }
};

class CheckBoxAndInputComponent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    const {input} = this.props
    return <ul className="list-unstyled px-3">
      <li>
        <div onChange={event => {
            input.onChange(event)
          }} className="d-block checkbox checkbox-full-bg checkbox-lg checkbox-rounded checkbox-persian-blue bw-0">
          <div className="form-group row">
            <label className="col-md-3 col-form-label d-block">
              <input name="checkbox" type="checkbox"></input>
              <span className="label-text heading-font-family headings-color pd-l-50">{option.name}</span>
            </label>
            <div className="col-md-9">
              <input className="form-control" type="text"></input>
            </div>
          </div>
        </div>
      </li>
      {this.props.touched && ((this.props.error && <span className="errortext">{this.props.error}</span>) || (this.props.warning && <span>{this.props.warning}</span>))}
    </ul>
  }
};

class SelectCom extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return (<div htmlFor={this.props.id} className="form-label">
      <div className="form-group">
        {this.props.meta.touched && this.props.meta.error && <div className="alert alert-card alert-error">{this.props.meta.error}</div>}
        <label className="field-label">{this.props.label}</label>
        <select onChange={this.props.input.onChange} className="form-control" placeholder={this.props.placeholder} id={this.props.id}>
          {this.props.children}
        </select>
      </div>
    </div>)
  }
}



class DatePickerC extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {input} = this.props
    return <div className="form-group">
      <div className={this.props.type + this.props.formgrouprow}>
        <label className={"field-label "+ this.props.labelcol} style={this.props.marginTop} htmlFor={this.props.id}>{this.props.label}</label>
        <div className="col-md-4" style={this.props.paddingRight}>
          <DatePicker
            className="form-control"
            id={this.props.id}
            selected={this.props.date}
            onChange={event => {

              input.onChange(event)
              }}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="LLL"
            timeCaption="time"
        />
        </div>
        {this.props.touched && ((this.props.error && <span className="errortext">{this.props.error}</span>) || (this.props.warning && <span>{this.props.warning}</span>))}
      </div>
    </div>
  }
};

export const RenderSelectBox = ({
  input,
  label,
  type,
  id,
  field,
  options,
  meta: {
    touched,
    error,
    warning
  }
}) => (<div className="form-group">
  <div className={type}>
    <label className="field-label" htmlFor={id}>{label}</label>
    <select {...input} id={id} className="form-control" type={type}>
      {options.map((option, index) =>(
        <option key={index} value={option.value}>{option.title}</option>
      ))}

    </select>
    {touched && ((error && <span className="errortext">{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
</div>)



export const DatePickerComponent = connect()(DatePickerC);
export const Select = connect()(SelectCom);

export const SelectBox = connect()(SelectComponent);
export const CheckBoxAndInput = connect()(CheckBoxAndInputComponent);
