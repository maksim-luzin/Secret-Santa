import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Row, Button, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { IValues, IActions } from '../../common/interfaces';
import { Routes } from '../../../../common/enums';
import { useAction } from '../../../../common/hooks/useAction';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  wish: yup.string().required()
});

const Auth = () => {
  const { registerUserAction } = useAction()
  const history = useHistory()
  const formSubmit = async (values: IValues, { resetForm }: IActions) => {
    const wishList = [values.wish]
    for (let numberWish = 2; numberWish < 11; numberWish++) {
      if (values[`wish${numberWish}`]) wishList.push(values[`wish${numberWish}`]);
    };

    const registrationData = {
      wishList: wishList.join('---'),
      firstName: values.firstName,
      lastName: values.lastName
    }
    await registerUserAction(registrationData)
    history.push(Routes.PLAY)
    resetForm()
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={formSubmit}
      initialValues={{
        firstName: '',
        lastName: '',
        wish: '',
        wish2: '',
        wish3: '',
        wish4: '',
        wish5: '',
        wish6: '',
        wish7: '',
        wish8: '',
        wish9: '',
        wish10: ''
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Container fluid='md'>
          <Form noValidate onSubmit={handleSubmit}>
            <Row className='mb-3'>
              <Form.Group as={Col} md='6' controlId='validationFormik01'>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='First name'
                  name='firstName'
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={touched.firstName && !!errors.firstName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='6' controlId='validationFormik02'>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Last name'
                  name='lastName'
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={touched.lastName && !!errors.lastName}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} md='12' controlId='validationFormik03'>
                <Form.Label>First wish</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='First wish'
                  name='wish'
                  value={values.wish}
                  onChange={handleChange}
                  isInvalid={touched.wish && !!errors.wish}
                />

                <Form.Control.Feedback type='invalid'>
                  {errors.wish}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} md='12' controlId='validationFormik03'>
                <Form.Label>Second wish</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Second wish'
                  name='wish2'
                  value={values.wish2}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} md='12' controlId='validationFormik03'>
                <Form.Label>Third wish</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Third wish'
                  name='wish3'
                  value={values.wish3}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} md='12' controlId='validationFormik03'>
                <Form.Label>Fourth wish</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Fourth wish'
                  name='wish4'
                  value={values.wish4}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} md='12' controlId='validationFormik03'>
                <Form.Label>Fifth wish</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Fifth wish'
                  name='wish5'
                  value={values.wish5}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} md='12' controlId='validationFormik03'>
                <Form.Label>Sixth wish</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Sixth wish'
                  name='wish6'
                  value={values.wish6}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} md='12' controlId='validationFormik03'>
                <Form.Label>Seventh wish</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Seventh wish'
                  name='wish7'
                  value={values.wish7}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} md='12' controlId='validationFormik03'>
                <Form.Label>Eighth wish</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Eighth wish'
                  name='wish8'
                  value={values.wish8}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} md='12' controlId='validationFormik03'>
                <Form.Label>Ninth wish</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ninth wish'
                  name='wish9'
                  value={values.wish9}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} md='12' controlId='validationFormik03'>
                <Form.Label>Tenth wish</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Tenth wish'
                  name='wish10'
                  value={values.wish10}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Button type='submit'>Submit</Button>
          </Form>
        </Container>
      )}
    </Formik >
  );
};

export { Auth };
