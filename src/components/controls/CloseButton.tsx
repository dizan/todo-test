import styled from 'styled-components';
import close from '../../assets/images/close.png';
import React from 'react';

export interface CloseButtonProps {
    className: string;
    onClose?: any;
}

const CloseButtonWrapper = styled.span`
  cursor:pointer;
`;

function CloseButton({className, onClose}: CloseButtonProps) {
    return (
        <CloseButtonWrapper className={className} onClick={onClose}>
            <img src={close} alt="" />
        </CloseButtonWrapper>
    );
}

export default CloseButton;