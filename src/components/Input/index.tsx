import React, { InputHTMLAttributes, useCallback, useState } from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused} data-testid="input-container">
      {Icon && <Icon size={20} />}
      <input onFocus={handleInputFocus} {...rest} />
    </Container>
  );
};

export default Input;
