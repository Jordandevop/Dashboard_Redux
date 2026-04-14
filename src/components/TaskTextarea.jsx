import { Form } from 'react-bootstrap'
import ErrorMessage from './ErrorMessage'

export default function TaskTextarea({ label, name, value, onChange, error, placeholder }) {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                as="textarea"
                rows={4}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                isInvalid={!!error}
            />
            <ErrorMessage message={error} />
        </Form.Group>
    )
}