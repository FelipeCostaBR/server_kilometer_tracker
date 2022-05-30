import { InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { IoSpeedometerOutline } from 'react-icons/io5';

import InputMask from "react-input-mask";

export const OdometerReader = () => {

  return (
    <InputGroup>
      <Input
        as={InputMask}
        placeholder='Type here'
        _placeholder={{ opacity: 0.5, color: 'inherit' }}
        paddingLeft={14}
        size='lg'
        focusBorderColor='green.light'
        bg='cardBg.dark'
        color='white'
        border='InactiveBorder'
        isRequired={true}
        mask={"***.***"}
        maskChar=""
        textAlign='left'
      />
      <InputLeftElement
        w='4.5rem'
        h='100%'
        className="InputLeft"
        pointerEvents="none"
      >
        <IoSpeedometerOutline color='white' size={24} />
      </InputLeftElement>
    </InputGroup>
  )
}
