import { Avatar, colors, StyledFormArea, StyledTitle, ButtonGroup, StyledFormButton } from "../components/Styles";
import logo from "../assets/logo.jpg";
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import {FiMail, FiLock} from 'react-icons/fi';
import * as Yup from 'yup';

const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <div style={{
                    top: 15,
                    left: 0,
                    backgroundColor: "transparent",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                }}>
                    <Avatar image = {logo}></Avatar>
                </div>
                <StyledTitle size = {30} color = {colors.theme}>Login</StyledTitle>
                <Formik
                  initialValues = {{
                    code:"",
                    password:"",
                  }}
                validationSchema = { Yup.object({
                  code: Yup.string().max(9,"Código invalido.").required("Required"),
                  password: Yup.string().min(6, "Contraseña incorrecta").max(20, "Contraseña incorrecta").required("Required"),
                })
                }
                onSubmit = {(values, {setSubmitting}) =>{
                  console.log(values);
                }}
                >
                    {()=>(
                        <Form>
                            <TextInput name = "code" type = "text" label = "Código" placeholder = "12345678A" icon = {<FiMail/>}/>
                            <TextInput name="password" type="password" label="Password" placeholder="********" icon = {<FiLock/>}/> 
                            <ButtonGroup>
                                <StyledFormButton type="submit">Login</StyledFormButton>
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
            </StyledFormArea>
        </div>
    )
}
export default Login;
    
