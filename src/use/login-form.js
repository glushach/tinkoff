import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export function useLoginForm() {
  const store = useStore()
  const router = useRouter()
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

  const onSubmit = handleSubmit(async values => {
    try {
      await store.dispatch('auth/login', values)
      router.push('/')
    } catch (e) {
    }

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
