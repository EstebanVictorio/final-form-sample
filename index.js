// @flow
import {Fragment} from 'react'
import {Form, Field} from 'react-final-form'



const onSubmit = values => console.log('Values submitted:', values)
const App = () => (
    <Form onSubmit={onSubmit} initialValues={{name: 'Your name:', lastname: 'Your lastname'}}>
        {
            formProps => (
                <form onSubmit={formProps.handleSubmit}>
                <Field name="name" >
                    {
                        fieldProps => (<input type="text" placeholder="Your name:" {...fieldProps}/>)
                    }
                </Field>
                <Field name="lastname" >
                    {
                        fieldProps => (<input type="text" placeholder="Your lastname:" {...fieldProps}/>)
                    }
                </Field>
                <input type="submit" />
                </form>
            )
        }
        
    </Form>
)
const container = document.querySelector("#root")
ReactDOM.render(<App/>, container)

