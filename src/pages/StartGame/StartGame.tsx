import React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { robotsOptions, RobotsValues } from 'globalConstants';
import { startGame } from 'store/actionCreators';
import { Input, Select, ThemeSwitcher } from 'components';
import { Page, Form, SubmitButton } from './StartGame.styled';

interface FormValues {
  playerName: string;
  robots: RobotsValues;
}

const StartGameForm = (): React.ReactElement => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: { playerName: '', robots: robotsOptions[2].value },
  });

  const onSubmit = (formValues: FormValues) => dispatch(startGame(formValues));

  return (
    <Page>
      <Helmet>
        <title>Cards Game | Home</title>
      </Helmet>
      <ThemeSwitcher />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='NAME:'
          placeholder='Enter your name'
          register={register('playerName', { required: true })}
        />
        <Select
          label='NUMBER OF RIVALS:'
          options={robotsOptions}
          register={register('robots', { required: true })}
        />
        <SubmitButton type='submit' isDisabled={!isValid}>
          START GAME
        </SubmitButton>
      </Form>
    </Page>
  );
};

export default StartGameForm;
