import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Container = styled.span`
  display: inline-flex;
  margin-left: 6px;
  margin-right: 32px;
`;

const Title = styled.h5`
  font-size: 15px;
  font-weight: 700;
  display: block;
  margin-top: 0;
  margin-bottom: 6px;
`;

const Subtitle = styled.span`
  color: #888;
  font-size: 13px;
`;

export const Money: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const showModal = (): void => setVisible(true);

  const handleCancel = (): void => setVisible(false);

  return (
    <>
      <Button shape="circle" icon={<PlusOutlined />} onClick={showModal} />
      <Container>0&nbsp;₽</Container>
      <Modal title="Остаток на счете: 0 ₽" visible={visible} onCancel={handleCancel}>
        <Title>Пополнение счета</Title>
        <Subtitle>Выберите один из рекомендованных вариантов пополнения</Subtitle>
      </Modal>
    </>
  );
};
