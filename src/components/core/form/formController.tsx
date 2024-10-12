// import { classnames } from '@utils/classnames'
// import { useId } from 'react'
// import { Text } from '..'
// import Flex from '../flex'
// import { TextFieldProvider, useTextField } from './context'

import { useId } from 'react'
import { Check, Alert, Info } from '@components/icons'
import { classnames } from '@utils/classnames'
import { Flex, Text } from '..'
import { TextFieldProvider, useTextField } from './context'
import { FormControllerProps, FormLabelProps, FormMessageProps, TextFormFieldProps } from './form.type'
import { ForwardRefComponent } from '@type/polymorphic.type'

// import type { TextFormFieldProps, StatusType, FormControllerMaxProps } from './form.type'

// const statusType = {
//   text: '',
//   danger: ,
//   primary: <Info width="20" />,
//   success: <Check width="20" />,
//   warning: <Alert type="circle" width="20" />,
// }

// export const FormControllerMax = ({ maxLength, value }: FormControllerMaxProps) => {
//   return (
//     <span className="message--length">
//       {value ?? 0} / {maxLength}
//     </span>
//   )
// }

// export const FormController = (props: TextFormFieldProps) => {
//   const fallbackId = useId()
//   const {
//     children,
//     status = 'text',
//     value,
//     required,
//     disabled,
//     maxLength,
//     className,
//     readOnly,
//     hint,
//     label,
//     hideLabel,
//     message,
//     isInvalid,
//   } = props

//   const contextValue = {
//     value,
//     maxLength,
//     required,
//     disabled,
//     status,
//     readOnly,
//   }

//   return (
//     <Flex
//       direction="column"
//       gap="2xs"
//       as="div"
//       data-disabled={disabled}
//       data-readonly={readOnly}
//       data-invalid={isInvalid}
//     >
//       <div>
//         <Text
//           as="label"
//           size="sm"
//           transform="capitalize"
//           weight="medium"
//
//         >
//           {label}
//           <span className="form-controller--required">{required && ' *'}</span>
//         </Text>
//         {!!hint && (
//           <Text size="xs" contrast="low" transform="capitalize" color="slate">
//             {hint}
//           </Text>
//         )}
//       </div>
//       <TextFieldProvider {...contextValue}>{children}</TextFieldProvider>
//       {!!message && (
//         <Text className={`text-field--message-container u_${status}`} size="xs" color="red" contrast="low">
//           {statusType[status]} {message}
//         </Text>
//       )}
//     </Flex>
//   )
// }

export const Custom = ({ icon = <Alert type="circle" width="20" />, message, ...rest }: FormMessageProps) => {
  const { id } = useTextField()

  const messageId = `${id}-message`

  if (!message) return null
  return (
    <Text aria-live="polite" id={messageId} as="span" size="xs" color="red" contrast="low" {...rest}>
      <Flex items="center" gap="2xs">
        <span>{icon}</span>
        <span> {message}</span>
      </Flex>
    </Text>
  )
}

export const FormController = (props: FormControllerProps) => {
  const id = `form-${useId()}-field`
  const { children, label, hideLabel, error, className, hint, ...rest } = props
  const messageID = `${id}-message`
  const hintID = `${id}-hint`
  let describedby = ''

  if (!!error) describedby += ` ${messageID}`
  if (!!hint) describedby += ` ${hintID}`

  const ariaDescribedby = describedby ? describedby.trim() : null

  const values = {
    ...rest,
    id,
    ariaDescribedby,
  }

  const fieldLabel = `${label} ${rest.required ? '*' : ''}`
  return (
    <TextFieldProvider {...values}>
      <Flex direction="column" gap="2xs" {...classnames('text-field--root', { [className!]: !!className })}>
        <Text
          {...classnames({
            'u_sr-only': hideLabel,
          })}
          as="label"
          size="sm"
          weight="medium"
          htmlFor={id}
        >
          {fieldLabel}
        </Text>
        {hint && (
          <Text as="span" size="xs" id={hintID}>
            {hint}
          </Text>
        )}
        {children}
        {error && (
          <Text as={Flex} gap="xs" items="center" id={messageID} color="red" size="xs" contrast="low" role="alert">
            <span>
              <Alert type="circle" width="20" />
            </span>
            <span> {error}</span>
          </Text>
        )}
      </Flex>
    </TextFieldProvider>
  )
}
