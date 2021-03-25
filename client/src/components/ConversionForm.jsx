import React from 'react';
import {Field, Form, Formik} from "formik";
import {Alert, Button, Col, Row} from "reactstrap";
import {ReactstrapInput} from "reactstrap-formik";

import { getArabic, getRoman} from '../services/conversionsService';

function AlertHelper(color, message) {
  const selectedColor = color ? "success" : "danger"
  return <Alert color={selectedColor}>{message}</Alert>
}

export default function ConversionForm() {
  const [showRomanAlert, setShowRomanAlert] = React.useState(false)
  const [showArabicAlert, setShowArabicAlert] = React.useState(false)
  const [romanMessage, setRomanMessage] = React.useState('')
  const [romanStatus, setRomanStatus] = React.useState(false)
  const [arabicMessage, setArabicMessage] = React.useState('')
  const [arabicStatus, setArabicStatus] = React.useState(false)

  // React.useEffect(()=>{
  //   if
  // }, [showRomanAlert,showArabicAlert])

  const handleSubmit = async values => {
    const {toArabic = '', toRoman = ''} = values

    if (toRoman !== '') {
      const romanResponse = await getRoman(toRoman)
      setRomanMessage(romanResponse.message)
      setRomanStatus(romanResponse.success)
      setShowRomanAlert(true)
    } else {
      setShowRomanAlert(false)
    }

    if (toArabic !== '') {
      const arabicResponse = await getArabic(toArabic)
      setArabicMessage(arabicResponse.message)
      setArabicStatus(arabicResponse.success)
      setShowArabicAlert(true)
    } else {
      setShowArabicAlert(false)
    }

  }

  return (
    <>
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
            {showRomanAlert && AlertHelper(romanStatus, romanMessage)}
          </Col >
          <Col xs="12" >
            <Field
              id="toArabic"
              name="toArabic"
              label="To Arabic Numeral"
              component={ReactstrapInput}
            />
            {showArabicAlert && AlertHelper(arabicStatus, arabicMessage)}
          </Col >
          <Col xs="12" >
            <Button color="primary" type="submit" >Submit</Button >
          </Col >
        </Row >
      </Form >
    </Formik >
    </>
  )
}
