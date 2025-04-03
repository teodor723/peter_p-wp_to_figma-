import {useState, ChangeEvent, FocusEvent, FormEvent} from 'react';
import {Form, Button} from 'react-bootstrap';

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    option: string;
    comment: string;
}

interface FormErrors {
    [key: string]: string;
}

const initialState: FormData = {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    option: '',
    comment: '',
};

const selectOptions = [
    'Starting a Franchise',
    'Investing in Vela Agent LTD',
    'Receiving the Franchise & Investment Prospectus',
    'Booking a Discovery Call',
    'General Enquiry',
];

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>(initialState);
    const [errors, setErrors] = useState<FormErrors>({});

    const requiredFields = ['fullName', 'email', 'location', 'comment'];

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));

        if (errors[name]) {
            setErrors((prev) => ({...prev, [name]: ''}));
        }
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        if (requiredFields.includes(name) && !value.trim()) {
            setErrors((prev) => ({...prev, [name]: 'This field is required.'}));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        let valid = true;
        const newErrors: FormErrors = {};

        requiredFields.forEach((field) => {
            if (!formData[field as keyof FormData].trim()) {
                newErrors[field] = 'This field is required.';
                valid = false;
            }
        });

        setErrors(newErrors);

        if (valid) {
            console.log('Form data:', formData);
            alert('Thanks for contacting us! We will be in touch with you shortly.');
            setFormData(initialState);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="p-4 contact-form">
            <h2 className="mb-4">Simple Contact Form</h2>

            <div className="row">
                <Form.Group className="col-md-6 mb-3" controlId="fullName">
                    <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={!!errors.fullName}
                    />
                    <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="col-md-6 mb-3" controlId="email">
                    <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Add email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
            </div>

            <div className="row">
                <Form.Group className="col-md-6 mb-3" controlId="phone">
                    <Form.Label>Your Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Your Number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="col-md-6 mb-3" controlId="location">
                    <Form.Label>Location (City/Region) <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                        type="text"
                        name="location"
                        placeholder="Location (City/Region)"
                        value={formData.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={!!errors.location}
                    />
                    <Form.Control.Feedback type="invalid">{errors.location}</Form.Control.Feedback>
                </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="option">
                <Form.Label>Select</Form.Label>
                <Form.Select
                    name="option"
                    value={formData.option}
                    onChange={handleChange}
                    className="form-control"
                >
                    <option value="">Select</option>
                    {selectOptions.map((option, key) => (
                        <option value={option} key={key}>{option}</option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="comment">
                <Form.Label>Comments / Questions <span className="text-danger">*</span></Form.Label>
                <Form.Control
                    as="textarea"
                    rows={4}
                    name="comment"
                    placeholder="Comments"
                    value={formData.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.comment}
                />
                <Form.Control.Feedback type="invalid">{errors.comment}</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className="btn btn-primary px-4">
                Send Message
            </Button>
        </Form>
    );
};

export default ContactForm;
