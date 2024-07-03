// src/components/Modal.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../redux/modalSlice';
import { clearCart } from '../redux/cartSlice';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
`;

const ModalButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${(props) => (props.primary ? '#ff6b6b' : '#ccc')};
  color: ${(props) => (props.primary ? 'white' : 'black')};

  &:hover {
    background: ${(props) => (props.primary ? '#ff4d4d' : '#aaa')};
  }
`;

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>정말로 장바구니를 지우시겠습니까?</h2>
        <ModalButton primary onClick={() => {
          dispatch(clearCart());
          dispatch(closeModal());
        }}>
          예
        </ModalButton>
        <ModalButton onClick={() => dispatch(closeModal())}>
          아니오
        </ModalButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
