import {Field, Form, Formik} from "formik";
import {Button, Col, Row} from "reactstrap";
import {ReactstrapInput} from "reactstrap-formik";

export default function ConversionForm() {
  const handleSubmit = values => {
    console.log(values)
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
          </Col >
          <Col xs="12" >
            <Field
              id="toArabic"
              name="toArabic"
              label="To Arabic Numeral"
              component={ReactstrapInput}
            />
          </Col >
          <Col xs="12" >
            <Button color="primary" type="submit" >Submit</Button >
          </Col >
        </Row >
      </Form >
    </Formik >
  )
}
