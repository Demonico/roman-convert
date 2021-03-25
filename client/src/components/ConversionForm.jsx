import React from 'react';
import {Field, Form, Formik} from "formik";
import {Alert, Button, Col, Row} from "reactstrap";
import {ReactstrapInput} from "reactstrap-formik";

import { getToArabic, getToRoman} from '../services/conversionsService';

export default function ConversionForm() {
  const [roman, setRoman] = React.useState('')
  const [arabic, setArabic] = React.useState('')

  const handleSubmit = values => {
    console.log(values)
    const {toArabic, toRoman} = values

    setArabic(getToArabic(toArabic))
    setRoman(getToRoman(toRoman))
  }

  return (
    <Formik
      initialValues={{toRoman: "", toArabic: ""}}
      onSubmit={handleSubmit}
    >
      <Form >
        <Row >
          <Col xs="12" >
            <Field
              id="toRoman"
              name="toRoman"
              label="To Roman Numeral"
              component={ReactstrapInput}
            />
            <Alert>{roman}</Alert>
          </Col >
          <Col xs="12" >
            <Field
              id="toArabic"
              name="toArabic"
              label="To Arabic Numeral"
              component={ReactstrapInput}
            />
            <Alert>{arabic}</Alert>
          </Col >
          <Col xs="12" >
            <Button color="primary" type="submit" >Submit</Button >
          </Col >
        </Row >
      </Form >
    </Formik >
  )
}
