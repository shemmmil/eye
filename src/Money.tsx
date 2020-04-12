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

const Options = styled.div`
  margin-top: 26px;
  margin-bottom: 4px;
  position: relative;
  display: flex;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.15s;
  box-shadow: 0 1px 3px #ccc;
  box-sizing: border-box;
  width: 32%;
  padding: 16px 16px 14px;
  cursor: pointer;
  vertical-align: top;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 5px 14px 0 rgba(165, 176, 186, 0.4), 0 24px 13px -17px rgba(165, 176, 186, 0.3);
  }

  & + div {
    margin-left: 1.5%;
  }
`;

const OptionTitle = styled.span`
  font-size: 13px;
  line-height: 1.5;
  display: block;
`;

const OptionCost = styled.span`
  font-size: 18px;
  display: block;
  margin-top: 14px;
  color: #5b99e1;
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
        <Options>
          <Option>
            <OptionTitle>Опрос с минимальным бюджетом</OptionTitle>
            <OptionCost>5 000 ₽</OptionCost>
          </Option>
          <Option>
            <OptionTitle>Опрос с погрешностью 5%</OptionTitle>
            <OptionCost>25 000 ₽</OptionCost>
          </Option>
          <Option>
            <OptionTitle>Охватное исследование</OptionTitle>
            <OptionCost>100 000 ₽</OptionCost>
          </Option>
        </Options>
      </Modal>
    </>
  );
};
