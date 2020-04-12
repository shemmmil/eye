import React from 'react';
import { Input } from 'antd';

const { Search: InputSearch } = Input;

export const Search = () => {
  return <InputSearch enterButton allowClear />;
};
