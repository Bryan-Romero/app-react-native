import React from 'react';
import { Formik, useField } from 'formik';
import { Button, StyleSheet, View } from 'react-native';
import StyledTextInput from '../components/StyledTextInput';
import StyledText from '../components/StyledText';
import { loginValidationSchema } from '../validationSchemas/login';

const initialValues = {
    email: '',
    password: '',
}

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)
    console.log(field)
    return (
        <>
            <StyledTextInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && 
                <StyledText style={styles.error}>
                    {meta.error}
                </StyledText>
            }
        </>
    )
}

const LogIn = () => {
    return ( 
        <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={values => console.log('hola')}
            >
            {({ handleSubmit }) => {
                return (
                    <View style={styles.form}>
                        <FormikInputValue
                            name='email'
                            placeholder='E-mail'
                        />
                        <FormikInputValue
                            name='password'
                            placeholder='Password'
                            secureTextEntry
                        />
                        <Button onPress={handleSubmit} title='Log In' />
                    </View>
                )
            }}
        </Formik>
    );
}

const styles = StyleSheet.create({
    form: {
        margin: 12,
    },
    error: {
        color: 'red',
        fontSize: 10,
        marginBottom: 20,
        marginTop: -10,
    },
})

export default LogIn;






// const validate = values => {
//     const errors = {}

//     if(!values.email) {
//         errors.email = 'Email is required'
//     } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//         errors.email = 'Invalid email address'
//     }

//     console.log(errors)

//     return errors
// }