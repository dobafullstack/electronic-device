import sliderApi from 'api/sliderApi';
import { NotificationManager } from 'components/common/react-notifications';
import { Formik } from 'formik';
import IntlMessages from 'helpers/IntlMessages';
import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import { storage } from '../../../../../helpers/Firebase';

const AddNewProductModal = ({ modalOpen, toggleModal }) => {
  const initialValues = {
    title: '',
    content: '',
    subTitle: '',
    image: '',
  };

  const getLinkUpload = (image, setFieldValue, fieldName) => {
    console.log(fieldName);

    const uploadTask = storage.ref(`images/banner/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      () => {},
      (err) => console.log(err),
      () => {
        storage
          .ref('images/banner')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setFieldValue(fieldName, url);
          });
      }
    );
  };

  const onSubmit = (values) => {
    const addSlider = async () => {
      try {
        const { result } = await sliderApi.createSlider(values);

        NotificationManager.success(result, 'Add Slider', 3000, null, null, '');
        toggleModal();
      } catch (error) {
        if (error.response.data) {
          NotificationManager.warning(
            error.response.data.result,
            'Add Slider',
            3000,
            null,
            null,
            ''
          );
        } else {
          NotificationManager.warning(
            error.message,
            'Add Slider',
            3000,
            null,
            null,
            ''
          );
        }
      }
    };

    addSlider();
  };

  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>
        <IntlMessages id="pages.add-new-modal-title" />
      </ModalHeader>
      <ModalBody>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ values, handleChange, handleSubmit, setFieldValue }) => (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <FormGroup>
                <Label>Title</Label>
                <Input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Sub Title</Label>
                <Input
                  type="text"
                  name="subTitle"
                  value={values.subTitle}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Content</Label>
                <Input
                  type="textarea"
                  name="content"
                  value={values.content}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Ảnh</Label>
                <Input
                  name="image"
                  type="file"
                  onChange={(e) => {
                    getLinkUpload(e.target.files[0], setFieldValue, 'image');
                  }}
                />
              </FormGroup>
              <div className="d-flex justify-content-end" style={{ gap: 10 }}>
                <Button color="secondary" outline onClick={toggleModal}>
                  <IntlMessages id="pages.cancel" />
                </Button>
                <Button color="primary" type="submit">
                  <IntlMessages id="pages.submit" />
                </Button>{' '}
              </div>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </Modal>
  );
};

export default AddNewProductModal;
