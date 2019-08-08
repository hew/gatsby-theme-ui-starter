import Swal from "sweetalert2"

export const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

// Formik onSubmit func
export const onSubmit = (
  { email, school, city, profile },
  { setSubmitting, setErrors, resetForm }
) => {

  resetForm()
  setSubmitting(false)
  Swal.fire({
    title: "Success!",
    text: "",
    text: "",
    type: "success",
    customClass: "customClass",
    confirmButtonColor: "#5d0dff",
    confirmButtonText: "OK",
  })
  // fetch('/', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //   body: encode({
  //     'form-name': 'form-landing-page',
  //     email,
  //     school,
  //     city,
  //     profile
  //   })
  // })
  //   .then(() => {
  //     console.log('[Paprika] Form submission success');
  //     resetForm();
  //     setSubmitting(false);
  //     Swal.fire({
  //       title:'Success!',
  //       text:'',
  //       text:'',
  //       type:'success',
  //       customClass: 'customClass',
  //       confirmButtonColor: '#5d0dff',
  //       confirmButtonText: 'OK'
  //     })
  //   })
  //   .catch(error => {
  //     console.error('Form submission error:', error);
  //     setErrors(false);
  //   });
}
