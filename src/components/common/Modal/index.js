import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';
import Close from '../Icon/Close';
import PALETTE from '../../../constants/palette';

const Modal = ({ children, type, isShowCloseButton, onClose }) => {
  const onClickDimmed = ({ target, currentTarget }) => {
    if (!onClose || target !== currentTarget) return;

    onClose();
  };

  return (
    <Styled.ModalContainer onClick={onClickDimmed}>
      <Styled.ModalInner type={type} isShowCloseButton={isShowCloseButton}>
        {isShowCloseButton && (
          <Styled.CloseButton onClick={onClose}>
            <Close color={PALETTE.GRAY_000} />
          </Styled.CloseButton>
        )}
        {children}
      </Styled.ModalInner>
    </Styled.ModalContainer>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  isShowCloseButton: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  type: 'default',
  isShowCloseButton: true,
};

export default Modal;
