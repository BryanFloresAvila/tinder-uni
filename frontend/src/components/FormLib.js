import { useState } from "react";
import { StyledIcon, StyledLabel, StyledTextInput, ErrorMsg } from "./Styles";
import { ErrorMessage, useField } from "formik";
import {FiEyeOff, FiEye} from 'react-icons/fi';

export const TextInput = ({icon, ...props}) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);
    return(
        <div style = {{position: "relative"}}>
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>

            {props.type !== "password" && <StyledTextInput {...field} {...props} />}
            {props.type === "password" && <StyledTextInput {...field} {...props} type={show ? "text" : "password"}/>}

            <StyledIcon>
                {icon}
            </StyledIcon>
            {props.type === "password" &&(
                <StyledIcon onClick={() => setShow(!show)} right>
                    {show && <FiEye></FiEye>}
                    {!show && <FiEyeOff></FiEyeOff>}
                </StyledIcon>
            )}
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ) : (
                <ErrorMessage style = {{visibility : "hidden"}}>.</ErrorMessage>
            )}
        </div>
    )
}
    