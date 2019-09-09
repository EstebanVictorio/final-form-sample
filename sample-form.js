// @flow
import React, {useState, useEffect} from 'react'
import {Form, Field} from 'react-final-form'
import SettingsContext from './settings-context';
import { FormattedMessage, defineMessages, formatMessage } from 'react-intl'

const messages = defineMessages({
    submitButton: {
                    id: "Form.submitButton",
                    description: "Submit button text",
                    defaultMessage:"Submit your form"
                },
    namePlaceholder: {
        id: "Form.namePlaceholder",
        description: "Name input placeholder",
        defaultMessage:"Your name"
    },
    lastNamePlaceholder: {
        id: "Form.lastNamePlaceholder",
        description: "Last Name input placeholder",
        defaultMessage:"Your lastname"
    }
})
import styles from './index.scss';


const SampleForm = ({ t, business, currentUser, setCurrentUser }) => {
    const [err, setErr] = useState(null)
    
    const onSubmit = values => {
        setCurrentUser({...currentUser, firstName: values.name})
        if(values.name === 'error') {
            setErr('Intentional Error')
        }
    }

    useEffect(() => {
        if(err) {
            throw new Error(err)
        }
    }, [err])

    return (
    <div className={styles.formContainer}>
    <Form onSubmit={onSubmit} initialValues={{name: '', lastname: ''}}>
        {
            formProps => (
                <form className={styles.form} onSubmit={formProps.handleSubmit}>
                <FormattedMessage
                    tagName="h2"
                    id="Form.greeting" 
                    description="Greeting to form submitter"
                    defaultMessage="Hello {name}"
                    values={
                        {
                            name: currentUser.firstName
                        }
                    }
                />
                <div className={styles.fields}>
                <Field name="name" >
                    {
                        ({input}) => (
                            <label>
                                <FormattedMessage
                                    tagName="span"
                                    id="Form.nameLabel" 
                                    description="Label of name field"
                                    defaultMessage="Name:"
                                />
                                <input type="text" placeholder={t(messages.namePlaceholder)} {...input}/>
                            </label>
                        )
                    }
                </Field>
                <Field name="lastname" >
                    {
                        ({input}) => (<label>
                                <FormattedMessage
                                    tagName="span"
                                    id="Form.lastNameLabel" 
                                    description="Label of last name field"
                                    defaultMessage="Lastname:"
                                />
                            <input type="text" placeholder={t(messages.lastNamePlaceholder)} {...input}/>
                        </label>)
                    }
                </Field>
                <input type="submit" value={t(messages.submitButton)} />
                </div>
                </form>
            )
        }
    </Form>
    </div>
    )
}


export default SampleForm


