import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";

export function useLoginForm() {
  const {handleSubmit, isSubmitting, submitCount} = useForm()

  const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Please enter email')
      .email('Need enter correct email')
  )

  const MIN_LENGTH = 6

  const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
    'password',
    yup
      .string()
      .trim()
      .required('Please enter password')
      .min(MIN_LENGTH, `Password can not less ${MIN_LENGTH} symbols`)
  )

  const isToManyAttempts = computed(() => submitCount.value >= 3)

  watch(isToManyAttempts, value => {
    if (value) {
      setTimeout(() => {
        submitCount.value = 0
      }, 1500)
    }
  })

  const onSubmit = handleSubmit(values => {
    console.log('Form', values)
  })

  return {
    email,
    password,
    eError,
    pError,
    eBlur,
    pBlur,
    onSubmit,
    isSubmitting,
    isToManyAttempts
  }
}
