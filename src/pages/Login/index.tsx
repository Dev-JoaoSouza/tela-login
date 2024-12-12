import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, LoginContainer, Column, Spacing, Title } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { defaultValues, IFormLogin } from "./types";
import { MdLock } from 'react-icons/md';
import { useState } from 'react';

const schema = yup.object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup.string().min(6, "No mínimo 6 caracteres").required("Campo obrigatório"),
}).required();

const Login = () => {
    const { control, formState: { errors, isValid }, } = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        defaultValues,
        reValidateMode: "onChange"
    });

    const [tipo, setTipo] = useState('password');
    const handleClickPassword = () => {
        setTipo(prev => prev === 'password' ? 'text' : 'password')
    }

    return (
        <Container>
            <LoginContainer>
                <Column>
                    <Title>Login</Title>
                    <Spacing />
                    <Input name="email" placeholder="Email" control={control} errorMessage={errors?.email?.message} />
                    <Spacing />
                    <Input name="password" type={tipo} placeholder="Senha" control={control} errorMessage={errors?.password?.message} rightIcon={<MdLock onClick={handleClickPassword} />} />
                    <Spacing />
                    <Button title="Entrar" disabled={!isValid} />
                </Column>
            </LoginContainer>
        </Container>
    );
};

export default Login;