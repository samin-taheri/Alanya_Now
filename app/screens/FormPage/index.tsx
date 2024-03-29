import React, { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRoute } from '@react-navigation/native';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { AppButton, AppScreen, fields, Form, Text } from '@/components';
import { HomeStackNavigationRouteType } from '@/navigation';

const SelectOptions = [
  {
    value: '1',
    label: 'Armut',
  },
  {
    value: '2',
    label: 'Elma',
  },
  {
    value: '3',
    label: 'Karpuz',
  },
];

const initial = {
  name: '',
  date: '',
  password: '',
  select: '',
  autoComplete: '',
};

const FormPage = () => {
  const [users, setUsers] = useState([]);
  const route = useRoute<HomeStackNavigationRouteType<'FORM_SCREEN'>>();
  const { detailId } = route.params;

  const schema = Yup.object({
    name: fields.text.label('Text Example').required('Bu alan zorunludur'),
    date: fields.date.label('Date Picker').required('Tarih alanı zorunludur'),
    password: fields.password.label('Password').min(6, 'En az 6 karakter olmalı').required('Lütfen parola giriniz'),
    select: fields.select(SelectOptions, 'string', 'label', 'value').label('Select').required('select required message'),
    autoComplete: fields.autoComplete(users, 'string', 'name.first', 'name.first').required('test message').label('Auto Complete'),
  });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await fetch('https://randomuser.me/api?results=100');
    const data = await res.json();
    setUsers(data.results);
  };

  const form = useForm({
    defaultValues: initial,
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<typeof initial> = data => {
    console.log(data);
  };

  return (
    <AppScreen keyboardScroll>
      <Text>Detail Id: {detailId}</Text>
      <Form schema={schema} form={form} />
      <AppButton mt-10 type="secondary" onPress={form.handleSubmit(onSubmit)} title="Submit" />
    </AppScreen>
  );
};

export default FormPage;