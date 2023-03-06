import { FC, memo, useCallback } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormButton,
  FormContainer,
  Input,
  BackButton,
  Error,
  InputContainer,
} from "./styles";
import { Formik, Field } from "formik";
import { initialValues, validationSchema } from "./constants";
import { setToken } from "../../../services/storage";
import { login } from "../../../services/Api/auth";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (values: typeof initialValues) => {
    const loginError = await login(values);

    if (!loginError) {
      navigate("/categories"); 
    } else {
      setError(loginError);
    }
  };

  const handlegoToBack = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <FormContainer>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleLogin}
        initialValues={initialValues}
      >
        <Form>
          <Field name="email">
            {({ field, meta }: { field: any; meta: any }) => (
              <InputContainer>
                <Input $hasError={!!meta?.error} type="text" placeholder="Write your email on..."
                  {...field} />
                {meta?.error && <Error>{meta.error}</Error>}
              </InputContainer>
            )}
          </Field>
          <Field name="password">
            {({ field, meta }: { field: any; meta: any }) => (
              <InputContainer>
                <Input $hasError={!!meta?.error}
                  placeholder="Write your password on..."
                  {...field} type="password" />
                {meta?.error && <Error>{meta.error}</Error>}
              </InputContainer>
            )}
          </Field>
          <FormButton type="submit">Login</FormButton>
          {<BackButton onClick={handlegoToBack}>Back</BackButton>}
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default memo(LoginForm);
