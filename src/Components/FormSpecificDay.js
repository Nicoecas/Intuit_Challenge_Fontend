import { useForm } from "react-hook-form"
import { Form, Label, Button, Col, Row } from "reactstrap"
import "../Styles/FormSpecificDayStyle.css"

const FormSpecificDay = ({FormSpecificDayData}) => {
    const today = new Date().toISOString().split('T')[0];
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            location: "Buenos Aires",
            date: today
        }
    })

    const onSubmitHandler = (data) => {
        FormSpecificDayData(data);
    }
    return (
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
            <Row>
                <Col sm="5">
                    <Label htmlFor="location" className="mr-sm-2">Location </Label>
                    <input class="form-control" type="text" {...register("location", {
                        required: {
                            value: true,
                            message: "Location is required"
                        }
                    })} />
                    {
                        errors.location && <span>{errors.location.message}</span>
                    }
                </Col>
                <Col sm="4">
                    <Label htmlFor="date" className="mr-sm-2">DateTime </Label>
                    <input class="form-control" type="date" max={today} {...register("date")} />
                </Col>
                <Col sm="3">
                    <Button type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    )
}
export default FormSpecificDay