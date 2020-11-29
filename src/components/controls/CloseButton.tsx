import styled from 'styled-components';
import close from '../../assets/images/close.png';
import stateUnselected from '../../assets/images/state-unselected.png';
import React from 'react';

export interface SelectStateProps {
    selected: boolean;
    className: string;
    onClose: void;
}

const CloseButtonWrapper = styled.span`
  cursor:pointer;
`;

function CloseButton({selected, className, onClose}: SelectStateProps) {
    return (
        <CloseButtonWrapper className={className} onClick={onClose}>
            <img src={close} alt="" />
        </CloseButtonWrapper>
    );
}

export default CloseButton;