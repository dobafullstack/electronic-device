import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default yup.object().shape({
  name: yup.string().required("Họ tên không được bỏ trống"),
  phone: yup
    .number()
    .typeError("Số điện thoại không đúng định dạng")
    .required("Số điện thoại không được bỏ trống"),
  city: yup.string().required("Mời chọn tỉnh/thành"),
  district: yup.string().required("Mời chọn quận/huyện"),
  street: yup.string().required("Địa chỉ không được bỏ trống"),
});
