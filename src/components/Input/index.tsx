import React, { InputHTMLAttributes, useCallback, useState } from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  value?: number;
}

const Input: React.FC<InputProps> = ({ icon: Icon, value, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container
      isFocused={isFocused}
      data-testid="input-container"
      value={value}
    >
      {Icon && <Icon size={20} />}
      <input onFocus={handleInputFocus} onBlur={handleInputBlur} {...rest} />
    </Container>
  );
};

export default Input;
