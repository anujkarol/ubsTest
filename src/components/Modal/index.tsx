import React, { ReactElement } from 'react';
import { Close, Container, ContentWrapper, Title } from './styles';

import BackDrop from './Backdrop';
import { IModalProps } from './interface'; 


const Modal: React.FC<IModalProps> = ({
  children,
  isCloseIcon = false,
  handleCloseModal,
  isShow,
  title = '',
  style,
}): ReactElement | null => {
  if (!isShow) {
    return null;
  }
  return (
    <>
      <Container>
        <ContentWrapper>
          <Title style={style}>{title}</Title>
          {isCloseIcon && (
            <Close 
              isCloseIcon={isCloseIcon}
              onClick={handleCloseModal}
              className="cursor"
            >
              X
            </Close>
          )}
          {children}
        </ContentWrapper>
      </Container>
      <BackDrop />
    </>
  );
};

export default Modal;
